import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TopicVisual } from "@/components/site/TopicVisual";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights — AI Marketing, SEO, AEO & GEO Guides",
  description:
    "Explore in-depth articles, actionable guides, and expert strategies on AI digital marketing, SEO, Local SEO in Ambur, AEO, GEO, Google Ads, and Performance Marketing.",
  alternates: {
    canonical: "/insights",
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
  ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Hub Header */}
        <section className="border-b border-steel-500/20 bg-ink-900 py-16 text-porcelain sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 font-mono text-xs text-phosphor uppercase">
                Insights
              </div>
              <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-porcelain">
                Practical guides on AI marketing and search growth
              </h1>
              <p className="mt-4 text-lead text-steel-300">
                Clear guides on AI marketing, SEO, AEO, GEO, local search, paid media and conversion, written for business owners.
              </p>
            </div>
          </Container>
        </section>

        {/* Articles List */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-steel-300/60 bg-porcelain-raised p-7 shadow-xs transition-all duration-base hover:border-alert hover:shadow-md"
                >
                  {/* Each article carries a diagram of its own mechanism, so the
                      index reads as six distinct subjects rather than six
                      identical cards. */}
                  {article.visual && (
                    <div className="mb-6 -mx-1 rounded-lg border border-steel-300/50 bg-porcelain px-4 py-3 transition-colors duration-base group-hover:border-alert/40">
                      <TopicVisual
                        topic={article.visual.topic}
                        label={article.visual.label}
                        className="h-auto w-full"
                      />
                    </div>
                  )}

                  <div>
                    {/* Meta Bar */}
                    <div className="flex items-center justify-between font-mono text-xs text-steel-500">
                      <span className="rounded bg-alert/10 border border-alert/20 px-2 py-0.5 text-[0.6875rem] font-bold text-alert uppercase">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-900 group-hover:text-alert transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm leading-relaxed text-steel-700">
                      {article.excerpt}
                    </p>

                    {/* AEO Direct Answer Preview */}
                    <div className="mt-5 rounded-lg border border-steel-300/40 bg-porcelain p-3.5 text-xs text-steel-700 font-mono">
                      <p className="text-[0.625rem] font-bold text-steel-500 uppercase mb-1">
                        Direct Answer Summary:
                      </p>
                      <p className="line-clamp-2 text-ink-800">
                        {article.directAnswer}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-4 border-t border-steel-300/30">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-alert group-hover:underline"
                    >
                      Read the Guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Knowledge Hub Conversion CTA */}
        <section className="bg-ink-900 py-16 text-porcelain">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-display-md font-bold text-porcelain">
                Need Help Implementing These Strategies?
              </h2>
              <p className="mt-4 text-steel-300">
                Turn theory into practice. Work directly with Mohammed Aouf to implement AI marketing, Local SEO, and high-converting advertising funnels for your business.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" variant="phosphor" arrow>
                  Book a Strategy Call
                </ButtonLink>
                <ButtonLink href="/digital-marketing-ambur" size="lg" variant="outline-light">
                  Explore Ambur Services
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
