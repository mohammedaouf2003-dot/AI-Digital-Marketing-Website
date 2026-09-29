import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Mohammed Aouf",
  description: "Privacy policy for mohammedaouf.in",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto py-12">
            <h1 className="font-display text-display-lg font-bold text-ink-900">
              Privacy Policy
            </h1>
            <p className="mt-2 font-mono text-xs text-steel-500">
              Last updated: September 2026
            </p>

            <div className="mt-8 space-y-6 text-base text-steel-700 leading-relaxed">
              <p>
                At <strong>{site.name}</strong> (accessible at {site.url}), I prioritize the privacy of visitors. This Privacy Policy document outlines the types of information collected and how it is utilized.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                1. Information We Collect
              </h2>
              <p>
                When you submit an inquiry through our contact form, we collect the information you voluntarily provide, including your name, email address, company/brand name, website URL, and project message details.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the collected information solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond directly to your marketing consultation inquiries.</li>
                <li>Evaluate your website and digital presence to provide recommendations.</li>
                <li>Maintain direct communication regarding our marketing engagements.</li>
              </ul>
              <p>
                We do <strong>never sell, rent, or trade</strong> your personal information to third parties or spam marketing lists.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                3. Analytics and Cookies
              </h2>
              <p>
                This website may utilize standard web analytics (such as Google Analytics 4) to monitor aggregate website traffic, popular pages, and performance metrics. These tools do not collect personally identifiable information without your consent.
              </p>

              <h2 className="font-display text-xl font-bold text-ink-900 pt-4">
                4. Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact Mohammed Aouf directly at{" "}
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
