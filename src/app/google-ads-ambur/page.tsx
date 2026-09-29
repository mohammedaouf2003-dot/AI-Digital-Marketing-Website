import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management in Ambur, Tamil Nadu — Mohammed Aouf",
  description:
    "Data-driven Google Ads (PPC) management in Ambur, Tamil Nadu. Search Ads, Display Ads, and Performance Max campaigns targeting high-intent buyers with zero wasted budget.",
  alternates: {
    canonical: "/google-ads-ambur",
  },
};

export default function GoogleAdsAmburPage() {
  return (
    <ServicePageTemplate
      title="Google Ads & PPC Management"
      slug="google-ads-ambur"
      metaDescription="High-converting Google Ads and PPC management services in Ambur, Tamil Nadu. Search, Display, and Performance Max campaigns designed for positive ROAS."
      h1="Google Ads Management in Ambur, Tamil Nadu"
      subtitle="High-Intent PPC Campaigns That Capture Ready-to-Buy Customers"
      visual={{
        topic: "google-ads",
        label: "Diagram: a typed search query producing a sponsored result above organic listings, leading to a landing page",
        caption: "Search intent → ad → landing page → conversion",
      }}
      intro={[
        "Google Ads is the fastest way to place your business at the very top of Google when potential customers are actively searching for your products or services.",
        "Based in Ambur, Tamil Nadu, I structure disciplined Google Ads campaigns focused on exact search intent, negative keyword filtering, high-converting landing pages, and strict cost-per-lead limits.",
      ]}
      problem={{
        title: "Why Most Small Business Google Ads Campaigns Burn Money",
        description:
          "Without proper campaign architecture, Google's default 'Smart Campaigns' waste your budget on broad match keywords, accidental mobile clicks, and irrelevant search terms.",
        points: [
          "Burning money on broad irrelevant search queries with zero buyer intent",
          "Missing negative keyword lists that drain budget on 'free' or 'job' searches",
          "Sending paid traffic to a generic homepage instead of a focused landing page",
          "No conversion tracking or GA4 event integration to verify true ROI",
        ],
      }}
      solution={{
        title: "Tightly-Themed, High-Converting PPC Funnels",
        description:
          "We build Search and Performance Max campaigns engineered to maximize your Quality Score and convert every rupee of ad spend into measurable inquiries.",
        features: [
          {
            title: "High-Intent Keyword Grouping",
            desc: "Focusing on phrase and exact match transactional terms used by ready buyers.",
          },
          {
            title: "Exhaustive Negative Keyword Lists",
            desc: "Preventing wasted ad spend by blocking thousands of irrelevant non-commercial queries.",
          },
          {
            title: "Persuasive Responsive Search Ad Copy",
            desc: "A/B testing dynamic headlines and value propositions that boost Click-Through Rate (CTR).",
          },
          {
            title: "Dedicated Landing Page Guidance",
            desc: "Ensuring visitors land on fast, mobile-friendly pages designed to trigger calls and form leads.",
          },
          {
            title: "Smart Bidding & Target CPA Management",
            desc: "Leveraging Google's machine-learning bidding to acquire leads within your target cost limits.",
          },
          {
            title: "Full GA4 & Google Tag Manager Tracking",
            desc: "Tracking exact phone calls, WhatsApp clicks, and form submissions down to the specific keyword.",
          },
        ],
      }}
      benefits={[
        "Instant top-of-page visibility on Google search results",
        "Direct control over your daily ad budget and cost per acquisition",
        "Elimination of wasteful clicks via negative keyword shielding",
        "Transparent real-time reporting on phone calls and inquiries generated",
      ]}
      localFocus="Ideal for Ambur leather manufacturers seeking B2B export leads, healthcare specialists, dental clinics, real estate builders, and education institutes across Tamil Nadu."
      faqs={[
        {
          q: "What is the minimum budget to start Google Ads in Ambur?",
          a: "You can start local Google Ads campaigns with a modest ad spend (e.g. ₹500 to ₹1,500/day depending on industry competition). We ensure every rupee is targeted strictly at high-intent searches.",
        },
        {
          q: "How soon do Google Ads generate leads?",
          a: "Unlike SEO which takes weeks to build organic authority, Google Ads can begin delivering targeted clicks and direct customer calls within 24 to 48 hours of campaign launch.",
        },
        {
          q: "Do I pay Google directly for the ad spend?",
          a: "Yes. You maintain 100% ownership of your Google Ads account and pay Google directly for your ad clicks. We charge a transparent freelance management fee for strategy, setup, and optimization.",
        },
      ]}
    />
  );
}
