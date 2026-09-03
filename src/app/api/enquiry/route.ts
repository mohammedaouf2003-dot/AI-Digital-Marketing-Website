import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquiry-schema";
import { site } from "@/lib/content";

/**
 * Enquiry handler.
 *
 * All credentials stay server-side: the API key is read from the environment
 * at request time and never reaches the client bundle. The client only ever
 * sees a generic success or a safe error message.
 */

// A tiny in-memory rate limit. Enough to stop casual form spam on a single
// instance; swap for a shared store if the site ever runs on several.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries in a short time. Please try again shortly." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const { name, email, business, website, help, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  // The verified sending domain, e.g. "Enquiries <hello@mohammedaouf.com>".
  const from = process.env.ENQUIRY_FROM;
  const to = process.env.ENQUIRY_TO ?? site.email;

  if (!apiKey || !from) {
    // Never silently swallow an enquiry: log it so it is recoverable, and
    // tell the visitor plainly rather than showing a fake success.
    console.error(
      "[enquiry] Email is not configured (RESEND_API_KEY / ENQUIRY_FROM missing). Enquiry received:",
      { name, email, business, website, help, message },
    );
    return NextResponse.json(
      {
        error:
          "The enquiry form is not connected yet, so this message was not sent.",
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Business", business || "—"],
    ["Website", website || "—"],
    ["Needs help with", help],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#150c2e">
      <h2 style="margin:0 0 16px">New enquiry from the website</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding:4px 16px 4px 0;color:#6e6a85">${label}</td>
                 <td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#6e6a85;font-size:13px">Message</p>
      <p style="margin:0;white-space:pre-wrap;font-size:15px">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry — ${name}${business ? ` (${business})` : ""}`,
      html,
    });

    if (error) {
      console.error("[enquiry] Resend rejected the message:", error);
      return NextResponse.json(
        { error: "Your message could not be sent just now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[enquiry] Unexpected failure:", error);
    return NextResponse.json(
      { error: "Your message could not be sent just now." },
      { status: 500 },
    );
  }
}
