"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact } from "@/lib/content";
import { enquirySchema, type Enquiry } from "@/lib/enquiry-schema";
import { Button } from "@/components/ui/Button";
import { Field, inputClasses } from "@/components/ui/Field";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      business: "",
      website: "",
      help: "",
      message: "",
      budget: "",
      company_website: "",
    },
  });

  const onSubmit = async (values: Enquiry) => {
    setStatus("sending");
    setServerError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Something went wrong on our side.");
      }

      setStatus("sent");
      trackEvent("form_submit", { service: values.help || "unspecified" });
      reset();
    } catch (error) {
      setStatus("error");
      trackEvent("form_error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  // Success replaces the form rather than sitting above it, so the next step
  // is unmistakable and the reader is not left re-scanning empty fields.
  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex h-full flex-col justify-center gap-4 border border-ink-800/15 bg-porcelain-raised p-8 sm:p-10"
      >
        <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-alert uppercase">
          Enquiry received
        </p>
        <h3 className="font-display text-display-sm font-semibold text-ink-900">
          Thanks — your message is with me.
        </h3>
        <p className="text-[1.0625rem] leading-relaxed text-steel-700">
          I read every enquiry myself and reply personally, usually within one
          working day. If it is urgent, email me directly and mention that in
          the subject line.
        </p>
        <Button
          type="button"
          variant="outline-dark"
          className="self-start"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative border border-ink-800/15 bg-porcelain-raised p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses(!!errors.name)}
            {...register("name")}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses(!!errors.email)}
            {...register("email")}
          />
        </Field>

        <Field
          id="phone"
          label="Phone / WhatsApp"
          optional
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClasses(!!errors.phone)}
            {...register("phone")}
          />
        </Field>

        <Field
          id="business"
          label="Business / Organization"
          optional
          error={errors.business?.message}
        >
          <input
            id="business"
            type="text"
            autoComplete="organization"
            placeholder="Company or brand name"
            aria-invalid={!!errors.business}
            className={inputClasses(!!errors.business)}
            {...register("business")}
          />
        </Field>

        <Field
          id="website"
          label="Website"
          optional
          error={errors.website?.message}
        >
          <input
            id="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourbusiness.com"
            aria-invalid={!!errors.website}
            className={inputClasses(!!errors.website)}
            {...register("website")}
          />
        </Field>

        <Field
          id="help"
          label="What do you need help with?"
          error={errors.help?.message}
          className="sm:col-span-2"
        >
          <select
            id="help"
            aria-invalid={!!errors.help}
            aria-describedby={errors.help ? "help-error" : undefined}
            className={inputClasses(!!errors.help)}
            defaultValue=""
            {...register("help")}
          >
            <option value="" disabled>
              Choose the closest fit
            </option>
            {contact.helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="budget"
          label="Budget / Timeline"
          optional
          hint="A rough range is enough — it helps me recommend the right starting point."
          error={errors.budget?.message}
        >
          <input
            id="budget"
            type="text"
            placeholder="e.g. ₹15,000/month, ready to start in 2 weeks"
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : "budget-hint"}
            className={inputClasses(!!errors.budget)}
            {...register("budget")}
          />
        </Field>

        <Field
          id="message"
          label="Project Details"
          hint="What are you trying to improve, and what have you tried so far?"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            rows={5}
            placeholder="A few sentences about your business and your goal."
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "message-error" : "message-hint"
            }
            className={`${inputClasses(!!errors.message)} resize-y`}
            {...register("message")}
          />
        </Field>

        {/* Honeypot. Hidden from sight and from assistive technology, so only
            an automated filler will ever populate it. */}
        <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
          <label htmlFor="company_website">Company website</label>
          <input
            id="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />
        </div>
      </div>

      {serverError ? (
        <p
          role="alert"
          className="mt-6 border border-alert/45 bg-phosphor/10 p-4 text-[0.875rem] text-ink-900"
        >
          {serverError} You can also email me directly and I&apos;ll pick it up
          from there.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* The control says what pressing it does, rather than repeating the
            section's offer headline — and stays on one line. */}
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="whitespace-nowrap"
          arrow
        >
          {status === "sending" ? "Sending…" : "Request my free consultation"}
        </Button>
        <p className="font-mono text-[0.6875rem] leading-relaxed tracking-[0.12em] text-steel-500 uppercase">
          No obligation · Reply within one working day
        </p>
      </div>

      {/* Politely announce the sending state for screen reader users. */}
      <p aria-live="polite" className="sr-only">
        {status === "sending" ? "Sending your enquiry." : ""}
      </p>
    </form>
  );
}
