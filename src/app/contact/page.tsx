import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — Book a Digital Marketing Strategy Call",
  description:
    "Book a strategy call with Mohammed Aouf, AI digital marketer in Ambur, Tamil Nadu. Send an enquiry, call, or message on WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Consultation", url: "/contact" },
  ]);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Header */}
        <section className="border-b border-steel-500/20 bg-ink-900 py-16 text-porcelain sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 font-mono text-xs text-phosphor uppercase">
                Contact
              </div>
              <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-porcelain">
                Let&apos;s Build Your Next Growth Engine.
              </h1>
              <p className="mt-4 text-lead text-steel-300">
                Tell me about your business and where growth has stalled. You will get an
                honest read on what is worth doing first.
              </p>

              {/* Direct actions sit in the header so the fastest paths to a
                  conversation never require scrolling. */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/contact#enquiry" size="lg" variant="phosphor" arrow>
                  Book a Strategy Call
                </ButtonLink>
                <ButtonLink href={site.whatsapp} size="lg" variant="outline-light">
                  Chat on WhatsApp
                </ButtonLink>
                <ButtonLink href={site.tel} size="lg" variant="outline-light">
                  Call {site.phone}
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        {/* Form + Contact Info Grid */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 items-start">
              {/* Contact Direct Details */}
              <div className="rounded-2xl border border-steel-300/60 bg-porcelain-raised p-8 shadow-xs">
                {/* A face before the phone number: people reply faster when they
                    can see who will answer. */}
                {/* Container matches the source photo's own aspect ratio (square)
                    and uses object-contain, so the complete frame always shows —
                    no cropping of face, shoulders, hands or desk at any width. */}
                <div className="relative -mx-3 -mt-3 mb-8 aspect-square overflow-hidden rounded-xl bg-ink-900">
                  <Image
                    src="/images/mohammed-aouf-strategy-poster.jpg"
                    alt="Mohammed Aouf at his laptop, thinking through a client's marketing question"
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 90vw, 480px"
                  />
                </div>
                <Eyebrow tone="dark">Direct Channels</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">
                  Mohammed Aouf
                </h2>
                <p className="font-mono text-xs text-alert font-semibold uppercase mt-1">
                  {site.role}
                </p>

                <div className="mt-8 space-y-6 font-mono text-xs">
                  <div className="border-b border-steel-300/40 pb-4">
                    <p className="text-steel-500 uppercase tracking-wider mb-2">Phone</p>
                    <a
                      href={site.tel}
                      className="font-sans text-lg font-semibold text-ink-900 underline decoration-alert/60 underline-offset-4 hover:text-alert"
                    >
                      Call {site.phone}
                    </a>
                  </div>

                  <div className="border-b border-steel-300/40 pb-4">
                    <p className="text-steel-500 uppercase tracking-wider mb-2">WhatsApp</p>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-lg font-semibold text-ink-900 underline decoration-alert/60 underline-offset-4 hover:text-alert"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="mt-1 font-sans text-[0.8125rem] text-steel-500">
                      Same number — {site.phone}
                    </p>
                  </div>

                  <div className="border-b border-steel-300/40 pb-4">
                    <p className="text-steel-500 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-sans text-base font-semibold text-ink-900 underline decoration-alert/60 hover:text-alert break-all"
                    >
                      {site.email}
                    </a>
                  </div>

                  <div className="border-b border-steel-300/40 pb-4">
                    <p className="text-steel-500 uppercase tracking-wider mb-1">
                      Based In &amp; Servicing
                    </p>
                    <p className="font-sans text-sm font-medium text-ink-900">
                      Ambur, Tamil Nadu, India
                    </p>
                    <p className="mt-1 font-sans text-[0.8125rem] leading-relaxed text-steel-500">
                      Working remotely with businesses across Ambur, Vaniyambadi,
                      Tirupattur, Vellore and the wider Tamil Nadu region — and
                      with clients outside India.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-ink-900 p-5 text-porcelain font-mono text-xs">
                  <p className="text-phosphor uppercase font-semibold mb-1">
                    What Happens Next
                  </p>
                  <p className="text-steel-300">
                    I read every enquiry personally and reply within one working
                    day — usually with a first read on your market before we even
                    schedule a call.
                  </p>
                </div>
              </div>

              {/* Inquiry Form */}
              <div id="enquiry" className="scroll-mt-28">
                <h2 className="font-display text-display-md font-bold text-ink-950">
                  Book a Strategy Call
                </h2>
                <p className="mt-2 mb-6 max-w-lg text-sm leading-relaxed text-steel-700">
                  The more context you give, the more useful my first reply will
                  be. No obligation, and no sales sequence afterwards.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [localBusinessSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}
