import type { Metadata } from "next";
import Link from "next/link";
import { cta, amburLocalHub } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Ambur, Tamil Nadu — Mohammed Aouf",
  description:
    "Expert digital marketing services in Ambur, Tamil Nadu. Specializing in SEO, Local SEO, Google Ads, Meta Ads, and AI marketing for leather manufacturers, retail, healthcare, and local businesses.",
  alternates: {
    canonical: "/digital-marketing-ambur",
  },
};

const localFaqs = [
  {
    q: "Why does my Ambur business need digital marketing?",
    a: "Most customers and B2B buyers now search online before choosing a local store, doctor, restaurant, or manufacturer. Well-run digital marketing helps your Ambur business show up for high-intent searches, compete on Google Maps and turn that visibility into qualified enquiries.",
  },
  {
    q: "How can leather exporters and manufacturers in Ambur benefit from digital marketing?",
    a: "Through international B2B SEO, Google Search Ads targeting global import queries, and LinkedIn marketing. The aim is to help Ambur leather manufacturers connect directly with domestic distributors and international buyers across Europe, the US, and Asia.",
  },
  {
    q: "Which areas around Ambur do you cover?",
    a: "While anchored in Ambur, our digital marketing and Local SEO campaigns actively cover Vaniyambadi, Tirupattur, Vellore, Pernambut, Jolarpettai, Gudiyatham, and the greater Tamil Nadu region.",
  },
  {
    q: "How does Mohammed Aouf approach local Ambur marketing?",
    a: "We combine local market understanding with AI-assisted research and technical SEO rigor: Google Business Profile optimization, local citations, hyper-targeted Meta/Google Ads, and conversion-optimized websites.",
  },
];

export default function DigitalMarketingAmburPage() {
  const serviceSchema = generateServiceSchema({
    name: "Digital Marketing Services in Ambur",
    description:
      "Comprehensive digital marketing, SEO, Local SEO, and advertising services for businesses in Ambur, Tamil Nadu.",
    url: "/digital-marketing-ambur",
  });
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(localFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Digital Marketing in Ambur", url: "/digital-marketing-ambur" },
  ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Flagship Hero */}
        <section className="border-b border-steel-500/20 bg-ink-900 py-16 text-porcelain sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 font-mono text-xs text-phosphor uppercase">
                Ambur Local SEO & Digital Growth Pillar
              </div>
              <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-porcelain">
                Digital Marketing Services in Ambur, Tamil Nadu
              </h1>
              <p className="mt-4 font-mono text-base text-phosphor">
                Tailored AI Marketing, Local SEO, Google Ads & Meta Advertising for Ambur Enterprises
              </p>
              <p className="mt-4 text-lead text-steel-300">
                For leather manufacturers, retailers, healthcare clinics, restaurants, and startups across Ambur, Vaniyambadi, and Tirupattur capture local demand and scale revenue.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" size="lg" variant="phosphor" arrow>
                  {cta.primary}
                </ButtonLink>
                <ButtonLink href="#industries" size="lg" variant="outline-light">
                  Explore Ambur Industries
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        {/* Local Market Analysis */}
        <section className="py-16 sm:py-20 border-b border-steel-300/40">
          <Container>
            <div className="max-w-3xl">
              <Eyebrow tone="dark">The Ambur Commercial Context</Eyebrow>
              <h2 className="mt-4 font-display text-display-md font-bold text-ink-900">
                Why Ambur Businesses Need Modern Digital Marketing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel-700">
                Ambur is renowned across India and globally for leather craftsmanship and world-class culinary heritage. However, the local retail, service, and manufacturing sectors are experiencing rapid digitization. Traditional word-of-mouth alone is no longer enough to maintain market share.
              </p>
              <p className="mt-3 text-base leading-relaxed text-steel-700">
                Whether a customer is driving along the Chennai-Bengaluru highway looking for the best restaurant in Ambur, or an international importer is searching for premium leather goods, they turn to Google first. The work is making sure your business is visible, credible and easy to contact at that moment.
              </p>
            </div>
          </Container>
        </section>

        {/* Industry Focus in Ambur */}
        <section id="industries" className="py-16 sm:py-24 bg-porcelain-raised">
          <Container>
            <div className="max-w-2xl mb-12">
              <Eyebrow tone="dark">Targeted Sectors</Eyebrow>
              <h2 className="mt-4 font-display text-display-md font-bold text-ink-900">
                Tailored Digital Growth Across Ambur&apos;s Key Industries
              </h2>
              <p className="mt-3 text-base text-steel-700">
                We customize marketing channels and messaging for each distinct business model.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {amburLocalHub.industries.map((ind) => (
                <div
                  key={ind.title}
                  className="rounded-xl border border-steel-300/60 bg-porcelain p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {ind.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel-700">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-steel-300/30">
                    <span className="font-mono text-xs text-alert font-medium">
                      Customized Campaign Blueprint
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Local Services Offered */}
        <section className="py-16 sm:py-24 bg-porcelain">
          <Container>
            <div className="max-w-2xl mb-12">
              <Eyebrow tone="dark">Full Spectrum Services</Eyebrow>
              <h2 className="mt-4 font-display text-display-md font-bold text-ink-900">
                Core Digital Marketing Capabilities for Ambur
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Ambur Local SEO & Maps
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  Google Business Profile optimization, local citations, and geo-targeted ranking strategies across Ambur and Vaniyambadi.
                </p>
                <Link href="/local-seo-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore Local SEO →
                </Link>
              </div>

              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  On-page, technical, and semantic SEO that builds long-term organic authority and buyer search visibility.
                </p>
                <Link href="/seo-services-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore SEO Services →
                </Link>
              </div>

              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Google Ads (PPC) Management
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  High-converting Search and Performance Max campaigns targeting instant buyer intent with zero wasted spend.
                </p>
                <Link href="/google-ads-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore Google Ads →
                </Link>
              </div>

              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Meta Ads (Facebook & Instagram)
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  Hyper-local visual ad funnels driving store visits, WhatsApp direct leads, and brand awareness in Tamil Nadu.
                </p>
                <Link href="/meta-ads-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore Meta Ads →
                </Link>
              </div>

              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  AI Digital Marketing
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  Infusing artificial intelligence into audience research, content scaling, and automated campaign tracking.
                </p>
                <Link href="/ai-digital-marketing-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore AI Marketing →
                </Link>
              </div>

              <div className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Social Media Marketing
                </h3>
                <p className="mt-2 text-sm text-steel-700">
                  Consistent content strategy, community engagement, and brand building on Instagram and LinkedIn.
                </p>
                <Link href="/social-media-marketing-ambur" className="mt-4 inline-block font-mono text-xs font-semibold text-alert hover:underline">
                  Explore Social Media →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Surrounding Geographic Service Coverage */}
        <section className="py-12 bg-porcelain-raised border-y border-steel-300/40">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Geographic Service Area Across Tamil Nadu
                </h3>
                <p className="text-sm text-steel-500">
                  Primary Hub: Ambur · Regional Reach: Vaniyambadi, Tirupattur, Vellore, Pernambut, Jolarpettai, Gudiyatham.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-ink-800">
                {amburLocalHub.nearbyTowns.map((town) => (
                  <span key={town} className="rounded border border-steel-300 bg-porcelain px-2.5 py-1">
                    📍 {town}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-porcelain">
          <Container>
            <div className="max-w-2xl mb-10">
              <Eyebrow tone="dark">Ambur FAQs</Eyebrow>
              <h2 className="mt-4 font-display text-display-md font-bold text-ink-900">
                Frequently Asked Questions About Digital Marketing in Ambur
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {localFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-steel-300/60 bg-porcelain-raised p-6 shadow-xs">
                  <h3 className="font-display text-base font-bold text-ink-900">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* High-Conversion CTA */}
        <section className="bg-ink-900 py-16 text-porcelain">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-display-md font-bold text-porcelain">
                Grow Your Ambur Business With Mohammed Aouf
              </h2>
              <p className="mt-4 text-steel-300">
                Book a free marketing consultation and digital presence audit for your business in Ambur or surrounding areas.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" variant="phosphor" arrow>
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
            "@graph": [serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}
