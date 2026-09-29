import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogArticles, site } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TopicVisual } from "@/components/site/TopicVisual";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Mohammed Aouf`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [site.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `/blog/${article.slug}`,
    datePublished: article.date,
  });

  const faqSchema = generateFAQSchema(article.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Knowledge Hub", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  // Related articles (excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Article Header */}
        <header className="border-b border-steel-500/20 bg-ink-900 py-16 text-porcelain sm:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="rounded bg-phosphor/20 border border-phosphor/30 px-2.5 py-0.5 font-bold text-phosphor uppercase">
                    {article.category}
                  </span>
                  <span className="text-steel-400">·</span>
                  <span className="text-steel-300">{article.readTime}</span>
                  <span className="text-steel-400">·</span>
                  <span className="text-steel-300">{article.date}</span>
                </div>

                <h1 className="mt-5 font-display text-display-lg font-bold tracking-tight text-porcelain leading-tight">
                  {article.title}
                </h1>

                {/* Author Strip */}
                <div className="mt-6 flex items-center gap-3 border-t border-steel-500/20 pt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-phosphor/40 bg-ink-800">
                    <Image
                      src="/mohammed-aouf.png"
                      alt={article.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-porcelain">
                      {article.author}
                    </p>
                    <p className="font-mono text-xs text-phosphor">
                      AI Digital Marketer & Growth Strategist · Ambur
                    </p>
                  </div>
                </div>
              </div>

              {/* The article's own diagram: a picture of the mechanism the guide
                  explains, so the reader knows the subject before the first
                  paragraph. Ink surface, so it takes the dark tone. */}
              {article.visual && (
                <div className="hidden lg:block">
                  <div className="rounded-sm border border-white/10 bg-ink-950 p-6">
                    <TopicVisual
                      topic={article.visual.topic}
                      label={article.visual.label}
                      tone="dark"
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-steel-500">
                    {article.category} · Framework
                  </p>
                </div>
              )}
            </div>
          </Container>
        </header>

        {/* Article Body */}
        <section className="py-12 sm:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
              {/* Main Content Stream */}
              <article className="max-w-3xl">
                {/* AEO Direct Answer Box (Position Zero Structured Box) */}
                <div className="rounded-xl border-2 border-alert/30 bg-alert/5 p-6 sm:p-8 mb-10">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-alert uppercase mb-2">
                    <span>⚡</span> Key Direct Answer / Executive Summary
                  </div>
                  <p className="text-base font-medium leading-relaxed text-ink-900">
                    {article.directAnswer}
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-base leading-relaxed text-steel-700">
                  {article.content.map((sec, idx) => (
                    <div key={idx}>
                      <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                        {sec.heading}
                      </h2>
                      {"text" in sec && sec.text && <p className="mb-4">{sec.text}</p>}
                      {"points" in sec && sec.points && (
                        <ul className="space-y-2.5 font-mono text-sm text-ink-800 my-4 pl-2">
                          {sec.points.map((pt: string, pIdx: number) => (
                            <li key={pIdx} className="flex items-start gap-2.5">
                              <span className="text-alert font-bold">→</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                {article.faq && article.faq.length > 0 && (
                  <div className="mt-14 pt-10 border-t border-steel-300/60">
                    <h3 className="font-display text-xl font-bold text-ink-900 mb-6">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {article.faq.map((item, fIdx) => (
                        <div
                          key={fIdx}
                          className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-5"
                        >
                          <h4 className="font-display text-base font-bold text-ink-900">
                            {item.q}
                          </h4>
                          <p className="mt-2 text-sm text-steel-700">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio Box */}
                <div className="mt-14 rounded-2xl border border-steel-300/60 bg-porcelain-raised p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-alert bg-ink-800">
                    <Image
                      src="/mohammed-aouf.png"
                      alt={site.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink-900">
                      About the Author: {site.name}
                    </h4>
                    <p className="mt-1 text-sm text-steel-700">
                      Mohammed Aouf is an AI digital marketer and freelance growth strategist based in Ambur, Tamil Nadu. He helps businesses combine AI research with SEO, Local SEO, and performance advertising to build sustainable customer acquisition.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/about-mohammed-aouf"
                        className="font-mono text-xs font-semibold text-alert underline decoration-alert/60 hover:text-ink-900"
                      >
                        View Full Entity Profile →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Consultation Card */}
                <div className="rounded-xl border border-steel-300/70 bg-ink-900 p-6 text-porcelain">
                  <h3 className="font-display text-lg font-bold text-porcelain">
                    Need Guidance on This Strategy?
                  </h3>
                  <p className="mt-2 text-xs text-steel-300">
                    Speak directly with Mohammed Aouf to see how these methods apply to your specific business and market in Tamil Nadu.
                  </p>
                  <ButtonLink href="/contact" size="md" variant="phosphor" className="mt-5 w-full justify-center" arrow>
                    Free Consultation
                  </ButtonLink>
                </div>

                {/* Ambur Local Hub Card */}
                <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                  <h3 className="font-display text-base font-bold text-ink-900">
                    Ambur Local SEO Services
                  </h3>
                  <p className="mt-2 text-xs text-steel-700">
                    Are you a business in Ambur, Vaniyambadi, or Tirupattur? Discover our dedicated Local SEO and Google Maps framework.
                  </p>
                  <Link
                    href="/digital-marketing-ambur"
                    className="mt-4 inline-block font-mono text-xs font-semibold text-alert underline decoration-alert/50 hover:text-ink-900"
                  >
                    Visit Ambur Local Hub →
                  </Link>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                    <h3 className="font-mono text-xs font-bold tracking-wider text-steel-500 uppercase mb-4">
                      Related Guides
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((rel) => (
                        <div key={rel.slug} className="border-b border-steel-300/30 pb-3 last:border-b-0 last:pb-0">
                          <Link
                            href={`/blog/${rel.slug}`}
                            className="font-display text-sm font-semibold text-ink-900 hover:text-alert transition-colors"
                          >
                            {rel.title}
                          </Link>
                          <p className="mt-1 font-mono text-[0.6875rem] text-steel-500">
                            {rel.readTime} · {rel.category}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [articleSchema, faqSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}
