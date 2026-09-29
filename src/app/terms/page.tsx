import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Mohammed Aouf",
  description: "Terms of service for mohammedaouf.in",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto py-12">
            <h1 className="font-display text-display-lg font-bold text-ink-900">
              Terms of Service
            </h1>
            <p className="mt-2 font-mono text-xs text-steel-500">
              Last updated: September 2026
            </p>

            <div className="mt-8 space-y-6 text-base text-steel-700 leading-relaxed">
              <p>
                Welcome to <strong>{site.url}</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                1. Professional Services & Consultations
              </h2>
              <p>
                The information provided on this website is for general informational and educational purposes regarding digital marketing, SEO, Local SEO, and advertising strategies. Initial consultations and audits are provided on a non-binding basis.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                2. Intellectual Property
              </h2>
              <p>
                All original frameworks, guides, written articles, branding assets, and code on this website are the intellectual property of Mohammed Aouf, unless otherwise stated.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                3. No Guarantee of Specific Search Engine Rankings
              </h2>
              <p>
                In strict adherence to industry ethical guidelines and Google&apos;s Search Essentials, we do not make false guarantees of specific #1 keyword positions or immediate revenue multiples. Marketing success depends on consistent execution, competitive dynamics, and market conditions.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                4. Inquiries
              </h2>
              <p>
                For any questions regarding these terms, please contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-alert underline">
                  {site.email}
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
