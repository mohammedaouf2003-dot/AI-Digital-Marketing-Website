import Link from "next/link";
import { cta, services } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { TopicVisual, type TopicKey } from "@/components/site/TopicVisual";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/lib/schema";

interface ServicePageProps {
  title: string;
  slug: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string[];
  /** Which diagram represents this discipline, and how to describe it. */
  visual: { topic: TopicKey; label: string; caption: string };
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    features: { title: string; desc: string }[];
  };
  benefits: string[];
  localFocus?: string;
  faqs: { q: string; a: string }[];
}

export function ServicePageTemplate({
  title,
  slug,
  metaDescription,
  h1,
  subtitle,
  intro,
  visual,
  problem,
  solution,
  benefits,
  localFocus,
  faqs,
}: ServicePageProps) {
  const serviceSchema = generateServiceSchema({
    name: title,
    description: metaDescription,
    url: `/${slug}`,
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: title, url: `/${slug}` },
  ]);

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Editorial Header */}
        <section className="border-b border-black/[0.08] bg-porcelain py-16 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-porcelain-raised px-4 py-1 font-mono text-xs text-alert uppercase font-bold shadow-xs">
                  Service Specialty · Ambur, Tamil Nadu
                </div>
                <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-ink-950">
                  {h1}
                </h1>
                <p className="mt-4 font-mono text-xs font-bold tracking-wider text-alert uppercase">
                  {subtitle}
                </p>
                <div className="mt-5 space-y-3 text-lead text-steel-700">
                  {intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <ButtonLink href="/contact" size="lg" variant="primary" arrow>
                    {cta.primary}
                  </ButtonLink>
                  <ButtonLink href="/digital-marketing-ambur" size="lg" variant="outline-dark">
                    Explore Ambur Local Hub
                  </ButtonLink>
                </div>
              </div>

              {/* Each discipline gets its own diagram, so the page explains
                  itself visually before the visitor reads the detail. */}
              <figure className="relative">
                <div className="rounded-sm border border-black/10 bg-porcelain-raised p-6 shadow-sm sm:p-8">
                  <TopicVisual
                    topic={visual.topic}
                    label={visual.label}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-steel-500">
                  {visual.caption}
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        {/* Problem Breakdown */}
        <section className="py-16 sm:py-24 border-b border-black/[0.08]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Eyebrow tone="dark">The Core Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-display-lg font-bold text-ink-950">
                  {problem.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-steel-700">
                  {problem.description}
                </p>
                <ul className="mt-6 space-y-3 font-mono text-xs text-ink-800">
                  {problem.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="text-alert font-bold">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-black/10 bg-porcelain-raised p-8 sm:p-10 shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink-950 mb-3">
                  Why Strategic Execution Matters
                </h3>
                <p className="text-sm leading-relaxed text-steel-700 mb-6">
                  Without systematic search intent mapping and tight negative keyword shielding, digital marketing budgets are wasted on non-converting clicks.
                </p>
                <div className="rounded-xl bg-[#171920] p-5 text-porcelain font-mono text-xs">
                  <p className="text-phosphor uppercase font-bold mb-1">Measurable Objective</p>
                  <p className="text-steel-300 font-sans text-xs">
                    Targeted customer acquisition, measurable Cost-Per-Lead (CPL), and enduring brand authority across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Strategic Solution */}
        <section className="py-16 sm:py-24 bg-porcelain-raised border-b border-black/[0.08]">
          <Container>
            <div className="max-w-2xl mb-12">
              <Eyebrow tone="dark">Strategic Framework</Eyebrow>
              <h2 className="mt-4 font-display text-display-lg font-bold text-ink-950">
                {solution.title}
              </h2>
              <p className="mt-4 text-base text-steel-700">
                {solution.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solution.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-black/10 bg-porcelain p-6 shadow-xs"
                >
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-steel-700">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Plate */}
        <section className="py-16 sm:py-24 bg-porcelain border-b border-black/[0.08]">
          <Container>
            <div className="rounded-3xl border border-black/10 bg-[#171920] p-8 sm:p-12 text-porcelain shadow-xl">
              <div className="max-w-2xl">
                <span className="font-mono text-xs font-bold text-phosphor uppercase tracking-wider block mb-2">
                  Commercial Deliverables
                </span>
                <h2 className="font-display text-display-lg font-bold text-porcelain">
                  What You Gain With This Engagement
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 font-mono text-xs"
                  >
                    <span className="text-phosphor font-bold text-sm block mb-2">
                      0{i + 1}
                    </span>
                    <p className="text-porcelain font-sans font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Local Focus */}
        {localFocus && (
          <section className="py-12 bg-porcelain border-b border-black/[0.08]">
            <Container>
              <div className="rounded-2xl border border-alert/25 bg-alert/5 p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink-950">
                  Ambur & Tamil Nadu Commercial Focus
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">
                  {localFocus}
                </p>
                <div className="mt-4">
                  <Link
                    href="/digital-marketing-ambur"
                    className="font-mono text-xs font-bold text-alert uppercase tracking-wider underline decoration-alert/60 hover:text-ink-950"
                  >
                    Learn more about our Ambur Local Marketing Hub →
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-porcelain-raised border-b border-black/[0.08]">
          <Container>
            <div className="max-w-2xl mb-12">
              <Eyebrow tone="dark">Direct Q&A</Eyebrow>
              <h2 className="mt-4 font-display text-display-lg font-bold text-ink-950">
                Frequently Asked Questions About {title}
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-black/10 bg-porcelain p-6 sm:p-8 shadow-xs"
                >
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-700">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-14 bg-porcelain border-b border-black/[0.08]">
          <Container>
            <h3 className="font-mono text-xs font-bold tracking-wider text-steel-400 uppercase mb-6">
              Explore Related Disciplines
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.href}
                  className="group rounded-2xl border border-black/10 bg-porcelain-raised p-5 transition-all hover:border-alert shadow-xs"
                >
                  <p className="font-mono text-xs font-bold text-alert uppercase">
                    {rel.code}
                  </p>
                  <h4 className="mt-1 font-display text-base font-bold text-ink-950 group-hover:text-alert transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs text-steel-500 line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-[#171920] py-16 sm:py-24 text-porcelain">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-display-lg font-bold text-porcelain">
                Ready to Implement {title}?
              </h2>
              <p className="mt-4 text-steel-300">
                Contact Mohammed Aouf today for an honest, actionable review of your market opportunities.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" variant="primary" arrow>
                  {cta.primary}
                </ButtonLink>
                <ButtonLink href="/about-mohammed-aouf" size="lg" variant="outline-light">
                  Meet Mohammed Aouf
                </ButtonLink>
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
            "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}
