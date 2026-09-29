import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { GrowthFlow } from "@/components/site/GrowthFlow";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { aiSections } from "@/lib/catalog";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Marketing — Strategy, AI Search Visibility, AEO, GEO & Automation",
  description:
    "Practical AI marketing for business growth: AI search visibility, AEO, GEO, content systems, customer acquisition, automation and analytics. Human-led strategy by Mohammed Aouf.",
  alternates: { canonical: "/ai-marketing" },
};

export default function AiMarketingPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "AI Marketing", url: "/ai-marketing" },
  ]);

  return (
    <>
      <Navbar />
      <main className="bg-porcelain pt-20 sm:pt-24">
        <PageHeader
          eyebrow="AI Marketing"
          title="Practical AI marketing, led by strategy"
          lead="AI is a multiplier, not a strategy. I use it to research faster, structure content for AI search, automate follow-up and read your data sooner, with a human making the calls."
          primary={{ href: "/contact", label: "Book a Strategy Call" }}
          secondary={{ href: "/services", label: "See All Services" }}
        />

        {/* Growth flow */}
        <section aria-labelledby="flow-heading" className="py-16 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
              <div>
                <Eyebrow tone="dark">How it fits together</Eyebrow>
                <h2
                  id="flow-heading"
                  className="mt-4 font-display text-display-lg font-bold tracking-tight text-ink-950"
                >
                  From data to growth, in one connected system
                </h2>
                <p className="mt-4 text-lead text-steel-700">
                  Each stage feeds the next. Insight without action is a report; action without insight is guesswork.
                </p>
              </div>
              <figure className="mx-auto w-full max-w-md">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-ink-900">
                  <Image
                    src="/images/mohammed-aouf-ai-marketer-poster.jpg"
                    alt="Mohammed Aouf, AI digital marketer, working at his laptop"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
              </figure>
            </div>
            <div className="mt-12">
              <GrowthFlow />
            </div>
          </Container>
        </section>

        {/* Nine practical areas */}
        <section
          aria-labelledby="areas-heading"
          className="border-y border-black/[0.08] bg-porcelain-raised py-16 sm:py-24"
        >
          <Container>
            <div className="mb-10 max-w-2xl">
              <Eyebrow tone="dark">Where AI earns its place</Eyebrow>
              <h2
                id="areas-heading"
                className="mt-4 font-display text-display-lg font-bold tracking-tight text-ink-950"
              >
                Nine practical applications
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aiSections.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="rounded-2xl border border-black/10 bg-porcelain p-6 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-phosphor">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-700">{s.body}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-800">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Icon name="check" className="mt-0.5 h-4 w-4 text-alert" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-steel-700">
              Related:{" "}
              <Link href="/aeo-answer-engine-optimization" className="font-semibold text-alert underline underline-offset-4 hover:text-ink-950">
                AEO
              </Link>
              ,{" "}
              <Link href="/geo-generative-engine-optimization" className="font-semibold text-alert underline underline-offset-4 hover:text-ink-950">
                GEO
              </Link>{" "}
              and{" "}
              <Link href="/ai-digital-marketing-ambur" className="font-semibold text-alert underline underline-offset-4 hover:text-ink-950">
                AI digital marketing in Ambur
              </Link>
              .
            </p>
          </Container>
        </section>

        <FinalCTA
          title="Ready to Put AI to Work on Growth?"
          lead="Share your goals and current marketing. I will show you where AI helps and where it does not."
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
