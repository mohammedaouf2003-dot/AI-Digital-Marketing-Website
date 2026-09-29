/**
 * Service architecture, AI-marketing capabilities and homepage copy.
 * Capability descriptions only — no client names, metrics or credentials.
 */
import type { IconName } from "@/components/ui/Icon";

export type CatalogService = {
  slug: string;
  n: string;
  title: string;
  /** Capability / role framing — not an employment claim. */
  role: string;
  blurb: string;
  icon: IconName;
  capabilities: string[];
  /** Existing dedicated page. When absent, the service has a detail block on /services#slug. */
  href?: string;
  detail?: { intro: string; outcome: string };
};

export const catalog: CatalogService[] = [
  {
    slug: "ai-digital-marketing-strategy",
    n: "01",
    title: "AI Digital Marketing Strategy",
    role: "AI Digital Marketing Strategist",
    blurb: "A single growth roadmap that puts AI where it saves time and sharpens decisions.",
    icon: "compass",
    capabilities: ["Channel & funnel roadmap", "AI-assisted market research", "Audience & offer positioning"],
    href: "/ai-marketing",
  },
  {
    slug: "seo-strategy",
    n: "02",
    title: "SEO Strategy",
    role: "SEO Strategist",
    blurb: "Technical, on-page and content SEO built around search intent that turns into enquiries.",
    icon: "search",
    capabilities: ["Technical SEO audits", "Keyword & intent mapping", "Local SEO & Google Business Profile"],
    href: "/seo-services-ambur",
  },
  {
    slug: "aeo",
    n: "03",
    title: "Answer Engine Optimization (AEO)",
    role: "AEO Strategist",
    blurb: "Structure your content so search engines quote your business as the direct answer.",
    icon: "message",
    capabilities: ["FAQ & answer schema", "Question-led content", "Featured snippet targeting"],
    href: "/aeo-answer-engine-optimization",
  },
  {
    slug: "geo",
    n: "04",
    title: "Generative Engine Optimization (GEO)",
    role: "GEO Strategist",
    blurb: "Make your brand easy for AI assistants to understand, cite and recommend.",
    icon: "sparkles",
    capabilities: ["Brand entity clarity", "Citation & mention strategy", "Structured knowledge markup"],
    href: "/geo-generative-engine-optimization",
  },
  {
    slug: "ai-search-visibility",
    n: "05",
    title: "AI Search Visibility",
    role: "AI Search Visibility Strategist",
    blurb: "Track and improve how your business appears across AI answers and modern search.",
    icon: "radar",
    capabilities: ["AI answer visibility review", "Source & citation gap analysis", "Content refresh priorities"],
    href: "/ai-marketing#ai-search",
  },
  {
    slug: "performance-marketing",
    n: "06",
    title: "Performance Marketing",
    role: "Performance Marketing Strategist",
    blurb: "Paid campaigns managed against cost per lead and revenue, not clicks.",
    icon: "trending",
    capabilities: ["Full-funnel campaign planning", "Budget & bidding control", "Landing-page alignment"],
    href: "/performance-marketing-ambur",
  },
  {
    slug: "google-ads",
    n: "07",
    title: "Google Ads & Paid Search",
    role: "Paid Search Strategist",
    blurb: "Search and Performance Max campaigns that capture buyers at the moment of intent.",
    icon: "target",
    capabilities: ["Search & PMax setup", "Negative keyword control", "Conversion tracking"],
    href: "/google-ads-ambur",
  },
  {
    slug: "social-media-marketing",
    n: "08",
    title: "Social Media Marketing",
    role: "Social Media Strategist",
    blurb: "Organic and paid social that builds recognition and moves people to enquire.",
    icon: "share",
    capabilities: ["Content calendars", "Meta Ads (Facebook & Instagram)", "Audience & retargeting"],
    href: "/social-media-marketing-ambur",
  },
  {
    slug: "content-strategy",
    n: "09",
    title: "Content Strategy & Content Marketing",
    role: "Content Strategy Consultant",
    blurb: "Content planned around what your buyers search, ask and compare.",
    icon: "pen",
    capabilities: ["Topic & cluster planning", "AI-assisted drafting with human editing", "Content refresh cycles"],
    detail: {
      intro:
        "Content earns traffic only when it answers a real question better than what already ranks. I plan topics from search and customer questions, then use AI for research and first drafts while a human edits for accuracy and voice.",
      outcome: "A prioritised content plan and published pages that support search, AI answers and sales conversations.",
    },
  },
  {
    slug: "conversion-rate-optimization",
    n: "10",
    title: "Conversion Rate Optimization",
    role: "Conversion Optimization Strategist",
    blurb: "Turn more of your existing visitors into calls, WhatsApp chats and enquiries.",
    icon: "funnel",
    capabilities: ["Landing-page review", "Form & call-to-action testing", "Funnel drop-off analysis"],
    detail: {
      intro:
        "Before spending more on traffic, fix what happens after the click. I review pages, forms and calls-to-action against how visitors actually behave and test the changes that matter.",
      outcome: "Clearer pages and a higher share of visitors reaching the contact step.",
    },
  },
  {
    slug: "marketing-automation",
    n: "11",
    title: "Marketing Automation",
    role: "Marketing Automation Consultant",
    blurb: "Follow-ups, reminders and lead routing that run without manual chasing.",
    icon: "workflow",
    capabilities: ["Lead routing & alerts", "Email & WhatsApp follow-up flows", "CRM-ready enquiry capture"],
    detail: {
      intro:
        "Slow follow-up loses leads. I set up simple, reliable flows so every enquiry is captured, routed and answered promptly, using tools your team can actually maintain.",
      outcome: "Faster response times and fewer enquiries lost between the form and the first conversation.",
    },
  },
  {
    slug: "ai-marketing-automation",
    n: "12",
    title: "AI Marketing Automation",
    role: "AI Automation Strategist",
    blurb: "AI-assisted workflows for reporting, content operations and lead qualification.",
    icon: "cpu",
    capabilities: ["Automated reporting", "Content operations workflows", "Lead qualification assistants"],
    href: "/ai-marketing#automation",
  },
  {
    slug: "lead-generation",
    n: "13",
    title: "Lead Generation & Demand Generation",
    role: "Lead Generation Strategist",
    blurb: "A repeatable way to be found, contacted and chosen by qualified buyers.",
    icon: "users",
    capabilities: ["Search + paid + social mix", "Offer & lead-magnet design", "Lead quality feedback loop"],
    detail: {
      intro:
        "Demand generation builds awareness and interest; lead generation captures it. I combine both so you are not reliant on a single channel, and tune the mix using lead quality, not lead volume.",
      outcome: "A steadier flow of relevant enquiries across more than one channel.",
    },
  },
  {
    slug: "analytics-growth-intelligence",
    n: "14",
    title: "Analytics, Tracking & Growth Intelligence",
    role: "Growth Analytics Strategist",
    blurb: "Tracking you can trust, so decisions rest on data rather than opinion.",
    icon: "chart",
    capabilities: ["GA4 & Search Console setup", "Call, form & WhatsApp tracking", "Simple decision dashboards"],
    detail: {
      intro:
        "If calls, forms and WhatsApp chats are not tracked, campaigns cannot be judged. I set up measurement properly and report on what changed, why, and what to do next.",
      outcome: "Clear reporting tied to enquiries and revenue, not vanity metrics.",
    },
  },
  {
    slug: "growth-consulting",
    n: "15",
    title: "Digital Growth Strategy & Consulting",
    role: "Digital Marketing Consultant",
    blurb: "Hands-on advice and a prioritised plan when you need direction before spend.",
    icon: "briefcase",
    capabilities: ["Marketing & website audit", "90-day priority plan", "Ongoing advisory"],
    detail: {
      intro:
        "Not every business needs a retainer. Sometimes the right first step is an honest audit and a short, ordered plan of what to fix, what to start and what to stop.",
      outcome: "A clear, prioritised roadmap you can run yourself or with me.",
    },
  },
];

export const detailServices = catalog.filter((s) => s.detail);

/** Home page: the six services shown as the "selected" set. */
export const selectedServiceSlugs = [
  "ai-digital-marketing-strategy",
  "seo-strategy",
  "aeo",
  "geo",
  "performance-marketing",
  "social-media-marketing",
];

export function serviceHref(s: CatalogService) {
  return s.href ?? `/services#${s.slug}`;
}

export const coreExpertise: { label: string; icon: IconName }[] = [
  { label: "AI Digital Marketing", icon: "cpu" },
  { label: "SEO", icon: "search" },
  { label: "AEO", icon: "message" },
  { label: "GEO", icon: "sparkles" },
  { label: "Performance Marketing", icon: "trending" },
  { label: "Social Media Marketing", icon: "share" },
  { label: "Content Strategy", icon: "pen" },
  { label: "Marketing Automation", icon: "workflow" },
  { label: "Conversion Optimization", icon: "funnel" },
  { label: "Analytics & Growth Strategy", icon: "chart" },
];

export const whyWork = [
  { title: "Strategy first", body: "Every channel starts from your margins, market and goals, not a template." },
  { title: "AI where it helps", body: "AI speeds up research, content and reporting. A human makes the decisions." },
  { title: "Search visibility", body: "Found on Google, in local results and increasingly inside AI answers." },
  { title: "Customer acquisition", body: "Paid and organic channels planned around cost per qualified enquiry." },
  { title: "Conversion & automation", body: "Pages and follow-up built so interest is not lost after the click." },
  { title: "Data-driven decisions", body: "Tracking set up first, so every change can be judged on evidence." },
];

export const outcomes = [
  { label: "Visibility", note: "Be found in search, maps and AI answers." },
  { label: "Leads", note: "More relevant calls, forms and WhatsApp chats." },
  { label: "Conversions", note: "Pages that turn interest into enquiries." },
  { label: "Efficiency", note: "Less wasted spend and manual effort." },
  { label: "Automation", note: "Follow-up and reporting that run themselves." },
  { label: "Customer Acquisition", note: "A repeatable path from stranger to customer." },
];

export const aiAdvantage = [
  { label: "Research", note: "Faster market, competitor and audience analysis." },
  { label: "Content", note: "AI-assisted drafts, human-edited for accuracy." },
  { label: "Search", note: "Structured to be found and cited by AI engines." },
  { label: "Customer acquisition", note: "Smarter targeting and creative testing." },
  { label: "Automation", note: "Routine follow-up and reporting handled." },
  { label: "Analytics", note: "Patterns surfaced sooner from your own data." },
  { label: "Personalization", note: "Messages matched to segment and intent." },
  { label: "Growth systems", note: "Connected workflows instead of one-off tactics." },
];

export const growthFlow = [
  "Data",
  "AI Insights",
  "Strategy",
  "Automation",
  "Customer Acquisition",
  "Growth",
];

export const aiSections: {
  id: string;
  title: string;
  body: string;
  points: string[];
  icon: IconName;
}[] = [
  {
    id: "strategy",
    title: "AI Marketing Strategy",
    body: "A roadmap that decides where AI belongs in your marketing and where it does not.",
    points: ["Opportunity and channel mapping", "Tool selection that fits your team", "Human review points built in"],
    icon: "compass",
  },
  {
    id: "ai-search",
    title: "AI Search Visibility",
    body: "Improve how your business appears when people ask AI assistants and answer engines.",
    points: ["Review of current AI answers about your category", "Gaps in sources and citations", "Priority fixes for content and markup"],
    icon: "radar",
  },
  {
    id: "aeo",
    title: "AEO",
    body: "Answer Engine Optimization structures pages to be quoted as the direct answer.",
    points: ["Question-led page structure", "FAQ and answer schema", "Featured snippet targeting"],
    icon: "message",
  },
  {
    id: "geo",
    title: "GEO",
    body: "Generative Engine Optimization makes your brand clear and citable for AI assistants.",
    points: ["Consistent brand and entity data", "Authoritative mentions and citations", "Structured, machine-readable content"],
    icon: "sparkles",
  },
  {
    id: "content",
    title: "AI Content Systems",
    body: "A repeatable process for research, drafting, editing and refreshing content.",
    points: ["Briefs built from real search questions", "Human editing for accuracy and voice", "Scheduled refresh of top pages"],
    icon: "pen",
  },
  {
    id: "acquisition",
    title: "AI-Powered Customer Acquisition",
    body: "Sharper targeting and faster creative testing across search and social.",
    points: ["Audience and intent analysis", "Ad variant testing", "Budget shifted toward what converts"],
    icon: "target",
  },
  {
    id: "automation",
    title: "Marketing & AI Workflow Automation",
    body: "Automating the repeatable work so response is fast and consistent.",
    points: ["Lead capture, routing and alerts", "Follow-up sequences", "Automated reporting"],
    icon: "workflow",
  },
  {
    id: "lead-gen",
    title: "AI Lead Generation",
    body: "Finding and qualifying the enquiries most likely to become customers.",
    points: ["Qualification questions and scoring", "Faster first response", "Feedback loop into targeting"],
    icon: "users",
  },
  {
    id: "analytics",
    title: "AI Analytics & Insights",
    body: "Turning analytics data into plain-language findings and next actions.",
    points: ["Trend and anomaly summaries", "Channel comparison", "Recommended next steps"],
    icon: "chart",
  },
];
