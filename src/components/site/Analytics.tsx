"use client";

import Script from "next/script";
import { useEffect } from "react";
import { classifyLink, trackEvent } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * One delegated click listener instead of an onClick on every button, so the
 * phone, WhatsApp, email and CTA links across the site are all measured with
 * no per-component wiring and almost no JavaScript.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const event = classifyLink(anchor);
      if (!event) return;
      trackEvent(event, {
        link_text: anchor.textContent?.trim().slice(0, 80),
        link_url: anchor.getAttribute("href"),
        cta_location: anchor.closest("[id]")?.id ?? "unknown",
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GTM_ID) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
