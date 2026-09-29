import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { catalog, detailServices } from "@/lib/catalog";
import { faqs } from "@/lib/content";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Services — AI Marketing, SEO, AEO, GEO & Performance",
  description:
    "Fifteen focused digital marketing services: AI marketing strategy, SEO, AEO, GEO, performance marketing, Google Ads, social media, automation and analytics. Based in Ambur, Tamil Nadu.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <Navbar />
      <main className="bg-porcelain pt-20 sm:pt-24">
        <PageHeader
          eyebrow="Services"
          title="Digital growth services, built around measurable outcomes"
          lead="Fifteen focused capabilities across AI marketing, search, paid media, content, automation and analytics. Start with one, or combine them into a single growth system."
          primary={{ href: "/contact", label: "Book a Strategy Call" }}
          secondary={{ href: "#all-services", label: "Browse All Services" }}
        />

        {/* Service grid */}
        <section id="all-services" aria-labelledby="grid-heading" className="py-16 sm:py-24">
          <Container>
            <div className="mb-10 max-w-2xl">
              <Eyebrow tone="dark">15 capabilities</Eyebrow>
              <h2
                id="grid-heading"
                className="mt-4 font-display text-display-lg font-bold tracking-tight text-ink-950"
              >
                Choose the capability you need
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {catalog.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </section>

        {/* Detail blocks for services without a dedicated page */}
        <section
          aria-labelledby="detail-heading"
          className="border-y border-black/[0.08] bg-porcelain-raised py-16 sm:py-24"
        >
          <Container>
            <div className="mb-10 max-w-2xl">
              <Eyebrow tone="dark">Service details</Eyebrow>
              <h2
                id="detail-heading"
                className="mt-4 font-display text-display-lg font-bold tracking-tight text-ink-950"
              >
                What each service covers
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {detailServices.map((s) => (
                <div
                  key={s.slug}
                  id={s.slug}
                  className="rounded-2xl border border-black/10 bg-porcelain p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-phosphor">
                      <Icon name={s.icon} />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold text-steel-500">{s.n}</p>
                      <h3 className="font-display text-xl font-bold text-ink-950">{s.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-steel-700">{s.detail?.intro}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-800">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Icon name="check" className="mt-0.5 h-4 w-4 text-alert" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-black/10 pt-4 text-sm text-ink-900">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-alert">
                      You get:{" "}
                    </span>
                    {s.detail?.outcome}
                  </p>
                  <div className="mt-5">
                    <ButtonLink href="/contact" variant="primary" arrow>
                      Discuss this service
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-steel-700">
              Serving businesses in Ambur, Vaniyambadi, Tirupattur and across Tamil Nadu.{" "}
              <Link
                href="/digital-marketing-ambur"
                className="font-semibold text-alert underline underline-offset-4 hover:text-ink-950"
              >
                See the Ambur local marketing hub
              </Link>
              .
            </p>
          </Container>
        </section>

        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumb, generateFAQSchema(faqs)],
          }),
        }}
      />
    </>
  );
}
