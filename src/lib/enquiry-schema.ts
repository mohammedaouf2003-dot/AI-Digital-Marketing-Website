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
});

export type Enquiry = z.infer<typeof enquirySchema>;
