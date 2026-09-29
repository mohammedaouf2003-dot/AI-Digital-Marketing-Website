import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, site } from "@/lib/content";
import { coreExpertise } from "@/lib/catalog";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About — AI Digital Marketing & Growth Strategist",
  description:
    "Mohammed Aouf is an AI digital marketer and growth strategist in Ambur, Tamil Nadu, focused on SEO, AEO, GEO, performance marketing and marketing automation.",
  alternates: { canonical: "/about-mohammed-aouf" },
};

const approach = [
  { title: "High intent over vanity", body: "Focus on searches and audiences that lead to enquiries, not empty impressions." },
  { title: "AI as a multiplier", body: "AI speeds research, drafting and reporting. Strategy and judgement stay human." },
  { title: "Unit economics first", body: "Marketing works only when cost per acquisition leaves a healthy margin." },
  { title: "Clean, white-hat standards", body: "Compliance with Google and Meta policies to protect long-term visibility." },
];

export default function AboutPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Mohammed Aouf", url: "/about-mohammed-aouf" },
  ]);

  return (
    <>
      <Navbar />
      <main className="bg-porcelain pt-20 sm:pt-24">
        <PageHeader
          eyebrow="About"
          title="AI digital marketer and growth strategist"
          lead={about.shortBio}
          primary={{ href: "/contact", label: "Book a Strategy Call" }}
          secondary={{ href: "/services", label: "View Services" }}
        />

        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              {/* Profile */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-black/10 bg-porcelain-raised p-5 shadow-sm">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-ink-800">
                    <Image
                      src={about.photo.src}
                      alt={about.photo.alt}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 90vw, 420px"
                    />
                  </div>
                  <dl className="mt-5 space-y-2.5 font-mono text-xs">
                    {about.credentials.map((c) => (
                      <div key={c.label} className="flex flex-col gap-0.5 border-b border-black/10 pb-2.5 sm:flex-row sm:justify-between">
                        <dt className="text-steel-500">{c.label}</dt>
                        <dd className="font-semibold text-ink-900 sm:text-right">{c.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-4 block break-all font-mono text-xs font-semibold text-alert underline underline-offset-4 hover:text-ink-950"
                  >
                    {site.email}
                  </a>
                </div>
              </aside>

              {/* Story */}
              <div className="space-y-14">
                <div>
                  <Eyebrow tone="dark">Professional introduction</Eyebrow>
                  <h2 className="mt-4 font-display text-display-md font-bold text-ink-950">
                    Growth built on strategy, not hype
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-steel-700">
                    <p>{about.fullBio[0]}</p>
                    <p>{about.fullBio[3]}</p>
                  </div>
                </div>

                <div>
                  <Eyebrow tone="dark">Core expertise</Eyebrow>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {coreExpertise.map((e) => (
                      <li key={e.label} className="flex items-center gap-3 rounded-xl border border-black/10 bg-porcelain-raised px-4 py-3">
                        <Icon name={e.icon} className="h-5 w-5 text-alert" />
                        <span className="text-sm font-semibold text-ink-900">{e.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Eyebrow tone="dark">Strategic approach</Eyebrow>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {approach.map((a, i) => (
                      <div key={a.title} className="rounded-xl border border-black/10 bg-porcelain-raised p-5">
                        <span className="font-mono text-xs font-bold text-alert">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mt-1 font-display text-base font-bold text-ink-950">{a.title}</h3>
                        <p className="mt-1.5 text-sm text-steel-700">{a.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-ink-900 p-6 text-porcelain sm:p-8">
                  <Eyebrow tone="light">AI + digital marketing focus</Eyebrow>
                  <p className="mt-4 text-base leading-relaxed text-steel-300">
                    I apply AI across research, content, search visibility, automation and analytics, and
                    keep a person accountable for every decision that reaches a customer.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <ButtonLink href="/ai-marketing" variant="phosphor" arrow>
                      Explore AI Marketing
                    </ButtonLink>
                    <Link
                      href="/digital-marketing-ambur"
                      className="self-center font-mono text-xs font-bold uppercase tracking-wider text-phosphor underline underline-offset-4 hover:text-white"
                    >
                      Ambur local marketing hub →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
