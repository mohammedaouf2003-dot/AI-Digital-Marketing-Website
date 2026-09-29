import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Performance Marketing Services in Ambur, Tamil Nadu — Mohammed Aouf",
  description:
    "Data-driven performance marketing services in Ambur, Tamil Nadu. Full-funnel campaign optimization, attribution modeling, and scalable customer acquisition.",
  alternates: {
    canonical: "/performance-marketing-ambur",
  },
};

export default function PerformanceMarketingAmburPage() {
  return (
    <ServicePageTemplate
      title="Performance Marketing"
      slug="performance-marketing-ambur"
      metaDescription="Performance marketing and paid acquisition systems engineered for measurable revenue growth in Ambur, Tamil Nadu."
      h1="Performance Marketing Services in Ambur, Tamil Nadu"
      subtitle="Data → Insight → Action → Optimization → Measurable Revenue Growth"
      visual={{
        topic: "performance",
        label: "Diagram: a rising measured performance curve that loops back to drive the next decision",
        caption: "Data → insight → decision → optimisation",
      }}
      intro={[
        "Performance marketing shifts the focus from vanity metrics (impressions, video views, post likes) to verifiable commercial outcomes: cost-per-lead, customer acquisition cost (CAC), and return on ad spend (ROAS).",
        "Based in Ambur, Tamil Nadu, I engineer multi-channel paid funnels combining Google Search Ads for immediate buyer intent and Meta Ads for visual discovery and retargeting.",
      ]}
      problem={{
        title: "Unfocused Ad Spend Without Conversion Tracking",
        description:
          "Many businesses spend money across social boosts and broad search keywords without tracking which campaign actually produced a paying customer.",
        points: [
          "Zero attribution on which channel generates profitable customer inquiries",
          "Wasted ad spend on non-converting clicks with no negative keyword protection",
          "Sending paid traffic to slow, generic homepages instead of dedicated landing pages",
          "Lack of full-funnel retargeting to convert interested warm prospects",
        ],
      }}
      solution={{
        title: "Full-Funnel Paid Acquisition & Attribution Architecture",
        description:
          "We structure campaigns with clear unit economics, conversion tracking via GA4 & Meta CAPI, and continuous A/B creative testing.",
        features: [
          {
            title: "Unit Economics & CAC Modeling",
            desc: "Aligning campaign bids with your gross margins so acquisition cost is judged against real profit, not clicks.",
          },
          {
            title: "Multi-Channel Paid Attribution",
            desc: "Configuring GA4 event tracking, Google Tag Manager, and Meta Conversions API (CAPI).",
          },
          {
            title: "Creative & Copy Testing Frameworks",
            desc: "Testing multiple visual hooks, headlines, and calls-to-action to find winning ad combinations.",
          },
          {
            title: "High-Converting Landing Page Guidance",
            desc: "Structuring fast, mobile-first landing pages with direct WhatsApp and phone call triggers.",
          },
          {
            title: "Dynamic Audience Retargeting",
            desc: "Re-engaging visitors who evaluated your services with social proof and specific offers.",
          },
          {
            title: "Transparent Bi-Weekly Reporting",
            desc: "Plain-language KPI dashboards showing exact ad spend, leads generated, and cost per acquisition.",
          },
        ],
      }}
      benefits={[
        "Predictable, scalable customer acquisition for your business",
        "Complete transparency on every rupee spent and lead generated",
        "Elimination of wasted ad clicks through negative keyword lists",
        "Higher return on ad spend across Google and Meta platforms",
      ]}
      localFocus="Tailored for Ambur leather exporters, manufacturers, retail showrooms, healthcare clinics, and real estate developers across Tamil Nadu."
      faqs={[
        {
          q: "What is Performance Marketing?",
          a: "Performance marketing is a data-driven advertising methodology where marketing campaigns are measured and optimized specifically against tangible business goals—such as phone inquiries, form leads, and sales—rather than surface vanity metrics.",
        },
        {
          q: "How do you track leads in Ambur campaigns?",
          a: "We implement Google Tag Manager, GA4 conversion events, and Meta Conversions API (CAPI) to record exact phone calls, WhatsApp chat initiations, and contact form submissions.",
        },
        {
          q: "What is the recommended minimum ad budget?",
          a: "Campaigns in Ambur and Tamil Nadu can be launched effectively with ad budgets as low as ₹15,000 to ₹35,000/month, scaling up as positive return on ad spend is verified.",
        },
      ]}
    />
  );
}
