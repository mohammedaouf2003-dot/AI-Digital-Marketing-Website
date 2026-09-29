import { z } from "zod";

/**
 * Shared by the form and the route handler so the client and server can never
 * disagree about what a valid enquiry is.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email so I can reply.")
    .email("Please enter a valid email address."),
  // Optional, but if given it has to be dialable — a typo here means the
  // reply never reaches the visitor.
  phone: z
    .string()
    .trim()
    .max(30, "That number is too long.")
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || v.replace(/[^\d]/g, "").length >= 10,
      "Please enter a valid phone or WhatsApp number.",
    ),
  business: z
    .string()
    .trim()
    .max(120, "That is too long.")
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .trim()
    .max(200, "That is too long.")
    .optional()
    .or(z.literal("")),
  help: z.string().trim().min(1, "Please choose what you need help with."),
  message: z
    .string()
    .trim()
    .min(10, "A sentence or two about your business helps me reply usefully.")
    .max(2000, "Please keep this under 2000 characters."),
  // Context that shapes the reply but is not required to move forward.
  budget: z.string().trim().max(120, "That is too long.").optional().or(z.literal("")),
  /**
   * Honeypot. Real people never see this field — it is hidden from sight and
   * from assistive technology, so anything posted into it is a bot. The API
   * accepts the message and discards it silently, which is more effective than
   * rejecting it and telling the spammer what tripped.
   */
  company_website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});


export type Enquiry = z.infer<typeof enquirySchema>;
