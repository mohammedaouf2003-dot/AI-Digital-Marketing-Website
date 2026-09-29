import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/FinalCTA";
import {
  AiAdvantage,
  CoreExpertise,
  Outcomes,
  SelectedServices,
  WhyWork,
} from "@/components/site/HomeSections";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "AI Digital Marketing & Growth Strategy | Mohammed Aouf, Ambur, Tamil Nadu" },
  description:
    "AI-powered digital marketing built for measurable growth: SEO, AEO, GEO, performance marketing, social media and automation. Mohammed Aouf, Ambur, Tamil Nadu.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreExpertise />
        <WhyWork />
        <SelectedServices />
        <AiAdvantage />
        <Outcomes />
        <About />
        <FinalCTA />
      </main>
      <Footer />

      {/* Person and business schema are already emitted once by the root layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
