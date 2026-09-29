/**
 * Single source of truth for all content across mohammedaouf.in
 *
 * POSITIONING:
 * Mohammed Aouf — AI Digital Marketer & Freelance Growth Strategist
 * Local SEO Focus: Ambur, Tamil Nadu (expanding to Vaniyambadi, Tirupattur, Vellore, Tamil Nadu, India)
 *
 * NOTE ON CREDIBILITY:
 * Contains zero manufactured claims, zero fake client logos, zero fabricated statistics.
 * Authority is demonstrated through deep technical competence, actionable frameworks,
 * and genuine transparent project work.
 */

export const site = {
  name: "Mohammed Aouf",
  role: "AI Digital Marketer & Freelance Growth Strategist",
  email: "mohammedaouf2003@gmail.com",
  phone: "+91 95978 66054",
  tel: "tel:+919597866054",
  whatsapp: "https://wa.me/919597866054",
  url: "https://www.mohammedaouf.in",
  location: {
    city: "Ambur",
    district: "Tirupattur",
    state: "Tamil Nadu",
    country: "India",
    geo: {
      latitude: "12.7904",
      longitude: "78.7166",
    },
  },
  tagline: "AI-Powered Digital Marketing, SEO & Growth Strategies That Drive Real Business Results",
  socials: {
    linkedin: "https://linkedin.com/in/mohammed-aouf",
    github: "https://github.com/mohammedaouf2003",
    instagram: "https://instagram.com/mohammedaouf",
    twitter: "https://x.com/mohammedaouf",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-mohammed-aouf" },
  { label: "Services", href: "/services" },
  { label: "AI Marketing", href: "/ai-marketing" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const cta = {
  primary: "Book a Strategy Call",
  secondary: "Explore My Services",
  nav: "Free Consultation",
  contact: "Discuss Your Project",
  audit: "Request a Free Local SEO Audit",
} as const;

export const hero = {
  badge: "AI Digital Marketer · Ambur, Tamil Nadu",
  h1: "AI Digital Marketing Freelancer in Ambur, Tamil Nadu",
  headline: [
    "AI Digital Marketing",
    "Freelancer in Ambur,",
    "Tamil Nadu",
  ],
  fullTitle: "AI Digital Marketing Freelancer in Ambur, Tamil Nadu — Mohammed Aouf",
  lead:
    "I help businesses grow through AI-powered digital marketing, SEO, Local SEO, Google Ads, Meta Ads, social media marketing and performance-focused strategies that turn online visibility into qualified leads and revenue.",
  services: [
    "AI Digital Marketing",
    "SEO & Local SEO",
    "AEO & GEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
  ],
} as const;

export const trustStrip = [
  { label: "AI Digital Marketing", icon: "cpu" },
  { label: "SEO", icon: "search" },
  { label: "Local SEO", icon: "map-pin" },
  { label: "AEO", icon: "help-circle" },
  { label: "GEO", icon: "sparkles" },
  { label: "Performance Marketing", icon: "trending-up" },
  { label: "Google Ads", icon: "target" },
  { label: "Meta Ads", icon: "share-2" },
] as const;

export const signalChain = [
  {
    code: "01",
    label: "Audience & Intent",
    note: "Pinpoint who is actively searching for your service in Ambur & beyond.",
  },
  {
    code: "02",
    label: "Strategy & Positioning",
    note: "Craft data-backed channel plans tailored to your specific margins.",
  },
  {
    code: "03",
    label: "AI Acceleration",
    note: "Leverage intelligent tooling for rapid research, analysis & content scaling.",
  },
  {
    code: "04",
    label: "Search & Paid Execution",
    note: "Deploy multi-channel SEO, Google Ads & Meta campaigns in tight sync.",
  },
  {
    code: "05",
    label: "Measurable Growth",
    note: "Track real phone calls, enquiries, footfalls and revenue conversions.",
  },
] as const;

export const about = {
  heading: "Meet Mohammed Aouf",
  subheading: "AI Digital Marketer & Freelance Growth Strategist based in Ambur, Tamil Nadu",
  eyebrow: "Entity Profile & Background",
  shortBio:
    "I am an AI digital marketer and freelance growth strategist from Ambur, Tamil Nadu. I bridge the gap between cutting-edge AI technologies and practical, revenue-generating digital marketing for local businesses and modern brands.",
  fullBio: [
    "I'm Mohammed Aouf, an AI digital marketer and freelance growth strategist based in Ambur, Tamil Nadu. I help small-to-medium businesses, local enterprises, manufacturers, and service providers turn digital channels into reliable engines for customer acquisition.",
    "My journey in digital marketing is founded on a deep curiosity for both human psychology and computational systems. Rather than relying on outdated agency retainers or vanity metrics like impressions and arbitrary likes, I focus exclusively on what moves a business forward: high-intent search visibility, hyper-targeted ad spend, and conversion-optimized web experiences.",
    "I integrate Artificial Intelligence (AI) across every stage of the marketing lifecycle — from intent clustering and semantic entity analysis to ad creative iteration, automated reporting, and Generative Engine Optimization (GEO). AI does not replace strategic judgement; it amplifies precision and speed, allowing small teams to operate with the firepower of large agencies.",
    "Whether the goal is international search visibility for an Ambur manufacturer or more local enquiries for a retailer or clinic in Tamil Nadu, the commitment is the same: shared metrics, honest reporting and no inflated promises.",
  ],
  credentials: [
    { label: "Location", value: "Ambur, Tamil Nadu, India" },
    { label: "Specialization", value: "AI Marketing, SEO, AEO/GEO & Paid Ads" },
    { label: "Local Focus", value: "Ambur, Vaniyambadi, Tirupattur, Vellore" },
    { label: "Working Style", value: "Direct Freelance Partnership / High Accountability" },
  ],
  skills: [
    "Search Engine Optimization (SEO)",
    "Local SEO & Google Business Profile",
    "Answer Engine Optimization (AEO)",
    "Generative Engine Optimization (GEO)",
    "Google Ads (Search, Display, Performance Max)",
    "Meta Ads (Facebook & Instagram)",
    "AI Content Strategy & Semantic Topic Clusters",
    "Google Analytics 4 (GA4) & Search Console",
    "Conversion Rate Optimization (CRO)",
    "Website Architecture & Technical Audits",
  ],
  photo: {
    src: "/images/mohammed-aouf-executive-poster.jpg",
    alt: "Mohammed Aouf — AI Digital Marketer & Freelance Growth Strategist in Ambur, Tamil Nadu",
  },
} as const;

export const services = [
  {
    slug: "ai-digital-marketing-ambur",
    code: "AI-MKT",
    title: "AI Digital Marketing",
    shortTitle: "AI Marketing",
    summary:
      "Intelligent, AI-powered marketing strategy, audience intelligence, content workflows, and automated campaign optimization.",
    description:
      "Transform how your business finds, reaches, and converts customers by infusing AI into market research, customer segmentation, copywriting, and bid management.",
    benefits: [
      "Faster market research and competitor intelligence",
      "Dynamic ad creative and copy testing",
      "Predictive audience targeting and intent clustering",
      "Semantic content pipelines that rank faster",
    ],
    features: [
      "AI Marketing Strategy & Roadmap",
      "Prompt-Engineered Content Workflows",
      "Predictive Campaign Analytics",
      "AI-Assisted Competitor Intelligence",
    ],
    href: "/ai-digital-marketing-ambur",
  },
  {
    slug: "seo-services-ambur",
    code: "SEO",
    title: "SEO (Search Engine Optimization)",
    shortTitle: "SEO Services",
    summary:
      "Comprehensive on-page, technical, off-page, and semantic content SEO to dominate organic search rankings.",
    description:
      "Gain sustainable organic rankings on Google for high-intent search terms. We audit technical code, build topical authority clusters, and optimize every page for search engines and real users.",
    benefits: [
      "Long-term organic traffic that doesn't stop when ad spend pauses",
      "Topical authority in your industry niche",
      "Zero technical debt (Core Web Vitals, Schema, indexation)",
      "High-intent buyer traffic from targeted keywords",
    ],
    features: [
      "Deep Technical SEO Audits",
      "On-Page SEO & Content Optimization",
      "Keyword & Search Intent Mapping",
      "Schema.org Structured Data Implementation",
    ],
    href: "/seo-services-ambur",
  },
  {
    slug: "local-seo-ambur",
    code: "LOC-SEO",
    title: "Local SEO & Google Business Profile",
    shortTitle: "Local SEO",
    summary:
      "Dominate the Google 3-Pack and local map searches in Ambur, Vaniyambadi, Tirupattur, and across Tamil Nadu.",
    description:
      "When customers in Ambur or surrounding areas search for your services, make sure your business is the first recommendation on Google Maps and Local Search results.",
    benefits: [
      "Higher rankings in the Google Maps 3-Pack",
      "Direct inbound phone calls and store visits",
      "Local citation consistency across web directories",
      "Authentic review acquisition and reputation management",
    ],
    features: [
      "Google Business Profile (GBP) Full Optimization",
      "Local Citation Building & NAP Consistency",
      "Geo-Targeted Local Landing Pages",
      "Local Review & Reputation Growth Strategies",
    ],
    href: "/local-seo-ambur",
  },
  {
    slug: "aeo-answer-engine-optimization",
    code: "AEO",
    title: "AEO (Answer Engine Optimization)",
    shortTitle: "AEO Services",
    summary:
      "Optimize your content so Google's Featured Snippets, Voice Search, and conversational engines quote your business as the direct answer.",
    description:
      "Search is transitioning from lists of links to direct answers. AEO structures your website's knowledge graph, Q&A sections, and entity data to win position zero and AI answer boxes.",
    benefits: [
      "Win Featured Snippets and 'People Also Ask' boxes",
      "Voice search visibility on Siri, Google Assistant & Alexa",
      "Higher brand authority as the cited answer source",
      "Immediate credibility for prospective customers",
    ],
    features: [
      "Direct Answer Schema & FAQ Graph Markup",
      "Conversational Search Query Targeting",
      "Question-Based Content Structuring (H2/H3)",
      "Featured Snippet Optimization",
    ],
    href: "/aeo-answer-engine-optimization",
  },
  {
    slug: "geo-generative-engine-optimization",
    code: "GEO",
    title: "GEO (Generative Engine Optimization)",
    shortTitle: "GEO Services",
    summary:
      "Position your brand to be cited and recommended in AI search engines like ChatGPT, Google Gemini, Perplexity, and Claude.",
    description:
      "As users turn to Large Language Models for product and service recommendations, GEO ensures your brand entity is firmly encoded in training corpora, retrieval-augmented indexes, and AI citations.",
    benefits: [
      "Brand recommendations inside AI search engines",
      "Future-proof visibility against traditional search disruption",
      "Entity-level clarity across Wikidata, Schema, and citations",
      "High trust from users using generative AI assistants",
    ],
    features: [
      "Brand Entity Authority Building",
      "Digital Footprint & Citation Optimization for LLMs",
      "Structured Knowledge Graph Engineering",
      "Information Gain & Semantic Depth Audits",
    ],
    href: "/geo-generative-engine-optimization",
  },
  {
    slug: "google-ads-ambur",
    code: "G-ADS",
    title: "Google Ads & PPC Management",
    shortTitle: "Google Ads",
    summary:
      "High-ROI Google Search, Display, and Performance Max advertising targeting buyers at the exact moment of search intent.",
    description:
      "Stop wasting budget on irrelevant clicks. We build tightly themed Google Ads campaigns with negative keyword protection, high-converting landing pages, and automated smart bidding.",
    benefits: [
      "Immediate inbound leads from high-intent searches",
      "Tight cost-per-acquisition control",
      "Elimination of wasted ad spend via negative keywords",
      "Clear conversion tracking down to each rupee spent",
    ],
    features: [
      "Search, Display & Performance Max Setup",
      "High-Intent Keyword Bidding & Negative Lists",
      "Ad Copywriting & A/B Split Testing",
      "GA4 & Google Tag Manager Conversion Tracking",
    ],
    href: "/google-ads-ambur",
  },
  {
    slug: "meta-ads-ambur",
    code: "M-ADS",
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Ads",
    summary:
      "Targeted social advertising campaigns that generate brand awareness, qualified leads, and direct sales.",
    description:
      "Reach your exact target customer on Facebook and Instagram using custom audiences, lookalike modeling, engaging video/visual formats, and conversion-engineered funnels.",
    benefits: [
      "Scalable customer acquisition across Facebook & Instagram",
      "Hyper-specific demographic and interest targeting",
      "Retargeting funnels that convert warm visitors",
      "Creative testing to find winning hook combinations",
    ],
    features: [
      "Custom Audience & Retargeting Funnels",
      "High-Converting Ad Copy & Creative Direction",
      "Meta Pixel & Conversions API (CAPI) Integration",
      "Lead Generation & WhatsApp Direct Ads",
    ],
    href: "/meta-ads-ambur",
  },
  {
    slug: "social-media-marketing-ambur",
    code: "SMM",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    summary:
      "Strategic content, audience engagement, and community growth across Instagram, LinkedIn, and Facebook.",
    description:
      "Build a loyal, engaged audience for your brand. We design content calendars, craft informative visual posts, and manage organic engagement to turn passive followers into active advocates.",
    benefits: [
      "Consistent, professional social brand presence",
      "Stronger community trust and customer loyalty",
      "Organic reach through relevant local & industry content",
      "Direct channel to announce promotions and updates",
    ],
    features: [
      "Content Strategy & Editorial Calendar",
      "Visual Design & Video Scripting",
      "Community Engagement & Response Management",
      "Monthly Social Growth & Analytics Reporting",
    ],
    href: "/social-media-marketing-ambur",
  },
  {
    slug: "digital-marketing-ambur",
    code: "DM-AMB",
    title: "Digital Marketing Services in Ambur",
    shortTitle: "Ambur Digital Marketing",
    summary:
      "Complete end-to-end digital growth partner for businesses in Ambur, Vaniyambadi, Tirupattur, and Vellore.",
    description:
      "From Ambur's renowned leather manufacturers to local retailers, restaurants, healthcare clinics, and service providers — tailored digital marketing strategies that fit the local economy.",
    benefits: [
      "Deep understanding of Ambur's commercial landscape",
      "Multi-channel approach combining SEO, Ads, and Social",
      "B2B export visibility for leather and manufacturing",
      "Local footfall and phone calls for retail and service brands",
    ],
    features: [
      "Local Market & Competitor Analysis",
      "B2B & B2C Digital Strategy",
      "Multi-Channel Campaign Execution",
      "Transparent Bi-Weekly Reporting",
    ],
    href: "/digital-marketing-ambur",
  },
] as const;

export const growthFocus = {
  eyebrow: "Strategic Pillars",
  heading: "Turn Your Digital Presence Into Predictable Business Growth",
  body: [
    "Your business doesn't just need more likes or random website visits.",
    "It needs the right audience, a frictionless journey, and measurable commercial results.",
    "I combine AI tools, technical marketing rigor, and data-driven execution to help businesses improve visibility, engagement, leads, and conversions.",
  ],
  pillars: [
    {
      code: "01",
      title: "Search Visibility",
      desc: "Get discovered by buyers actively searching on Google and Google Maps.",
      meta: "SEO / Local SEO / Maps",
    },
    {
      code: "02",
      title: "Audience Engagement",
      desc: "Build meaningful connection and brand recall through strategic social content.",
      meta: "SMM / AI Content",
    },
    {
      code: "03",
      title: "Qualified Leads",
      desc: "Drive targeted traffic using Google Ads and Meta Ads campaigns designed for ROI.",
      meta: "PPC / Paid Ads",
    },
    {
      code: "04",
      title: "Conversion Optimization",
      desc: "Turn clicks into real phone calls, WhatsApp inquiries, and closed orders.",
      meta: "CRO / Landing Pages",
    },
    {
      code: "05",
      title: "Continuous Growth",
      desc: "Continuously analyze GA4 data, search queries, and conversion metrics to scale.",
      meta: "Analytics / Retention",
    },
  ],
} as const;

export const principles = {
  eyebrow: "Why Work With Me",
  heading: "A Modern, High-Accountability Marketing Partnership",
  lead:
    "No confusing jargon, no vanity dashboards, and no bloated agency overhead. Here is how we work together.",
  items: [
    {
      title: "AI-Powered Speed + Human Strategy",
      body:
        "I leverage AI tools to execute research, data clustering, and content drafts at scale — while maintaining 100% human oversight, brand voice, and strategic discretion.",
    },
    {
      title: "Business Outcomes Over Vanity Metrics",
      body:
        "Impressions and post likes do not pay payroll. I focus on high-intent search queries, verified phone calls, form leads, and measurable customer acquisition costs.",
    },
    {
      title: "Rooted in Ambur & Tamil Nadu",
      body:
        "I understand the local market dynamics of Ambur, Vaniyambadi, Tirupattur, and Vellore — from leather export realities to local consumer buying behavior.",
    },
    {
      title: "Zero Black-Hat or Risky Shortcuts",
      body:
        "I strictly follow Google's Search Essentials, Meta advertising policies, and clean technical SEO standards. Your digital assets remain secure and reputable for the long run.",
    },
    {
      title: "Transparent, Direct Communication",
      body:
        "You deal directly with me. No account managers playing telephone. You get clear bi-weekly updates and straight answers on what is working and what we are optimizing.",
    },
    {
      title: "Customized Channel Allocation",
      body:
        "Every business has different unit economics. We allocate your marketing budget only into the specific channels (SEO, Meta, Google, Social) that match your growth stage.",
    },
  ],
} as const;

export const process = {
  eyebrow: "Methodology",
  heading: "A Simple, Transparent 6-Step Growth Process",
  lead:
    "Every engagement follows a structured, repeatable cadence so you always know what is being built, measured, and optimized.",
  steps: [
    {
      code: "01",
      title: "Discovery & Unit Economics",
      body: "We examine your target customer, average order value, margins, and existing digital footprint.",
    },
    {
      code: "02",
      title: "Technical & Competitor Audit",
      body: "We dissect your website, local Google presence, and competitor ad strategies to uncover immediate opportunities.",
    },
    {
      code: "03",
      title: "Tailored Strategy & Roadmap",
      body: "We construct a prioritized channel plan: Local SEO, Google Ads, Meta Ads, and content architectures.",
    },
    {
      code: "04",
      title: "Rapid Execution & Setup",
      body: "We configure GA4, Meta Pixel, Schema markup, landing page copy, and launch initial campaigns.",
    },
    {
      code: "05",
      title: "Data-Driven Optimization",
      body: "We refine keyword bids, test ad creatives, improve landing page conversions, and prune low-performing assets.",
    },
    {
      code: "06",
      title: "Clear Reporting & Scaling",
      body: "You receive transparent reports showing exact conversions, lead costs, organic keyword progress, and the next roadmap phase.",
    },
  ],
} as const;

export const techStack = [
  { category: "Search & SEO", tools: ["Google Search Console", "Google Analytics 4", "Semrush / Ahrefs Methodologies", "Screaming Frog", "Schema.org Markup"] },
  { category: "Advertising", tools: ["Google Ads Manager", "Meta Ads Manager", "Meta Pixel & CAPI", "Google Tag Manager", "Custom Conversion Tracking"] },
  { category: "AI & Automation", tools: ["Anthropic Claude Workflows", "OpenAI ChatGPT-4o", "Perplexity Research", "Midjourney Creative Direction", "Custom Prompt Engineering"] },
  { category: "Web & CRO", tools: ["Next.js & Modern Web Standards", "Tailwind CSS", "Lighthouse Performance", "Hotjar / Heatmap Analysis", "Mobile-First UX"] },
] as const;

export const projects = [
  {
    slug: "local-seo-visibility-framework",
    title: "Ambur Retail & Service Local SEO Growth Framework",
    type: "Practice Project · Strategy Framework",
    tag: "Local SEO / GBP / Schema",
    summary:
      "A comprehensive local search blueprint designed for retail, healthcare, and dining establishments in Ambur, Tamil Nadu to compete for Google Maps visibility.",
    challenge:
      "Local businesses in Ambur frequently lose potential in-store visits and phone inquiries to unoptimized Google Business Profiles and missing local citations.",
    solution:
      "Designed a complete GBP audit checklist, Geo-targeted service area clustering, structured LocalBusiness Schema markup, and a systematic customer review process.",
    keyResults: [
      "Optimized Google 3-Pack ranking strategy",
      "Full LocalBusiness & GeoCoordinates Schema architecture",
      "Standardized NAP (Name, Address, Phone) citation blueprint",
    ],
  },
  {
    slug: "ai-content-topical-authority-engine",
    title: "AI-Powered B2B Topical Authority Architecture",
    type: "Personal Project · Research & Strategy",
    tag: "AI Content / Semantic SEO / AEO",
    summary:
      "A high-speed semantic content production framework that combines AI research with human editorial oversight to build topical dominance in niche markets.",
    challenge:
      "Producing in-depth, search-intent-aligned educational articles typically takes weeks of manual drafting, leading to slow organic indexation.",
    solution:
      "Built a multi-stage prompt workflow using Claude and ChatGPT to analyze Google Search intent, generate detailed outlines, extract direct-answer snippets for AEO, and apply strict editorial fact-checking.",
    keyResults: [
      "Shorter path from search-intent research to reviewed draft",
      "Structured Q&A format built specifically for Google Featured Snippets",
      "Entity-rich writing without keyword stuffing",
    ],
  },
  {
    slug: "meta-google-ads-performance-funnel",
    title: "High-Intent PPC & Meta Advertising Funnel Architecture",
    type: "Practice Project · Campaign Blueprint",
    tag: "Google Ads / Meta Ads / Performance Marketing",
    summary:
      "A dual-engine paid acquisition system combining Google Search Ads (for immediate high intent) and Meta Retargeting (for brand recall and conversion recovery).",
    challenge:
      "Businesses often burn paid ad budget on broad keywords or broad social boosts with no clear conversion attribution or retargeting loop.",
    solution:
      "Constructed tightly themed search ad groups with exact/phrase matches, strict negative keyword exclusion lists, and dynamic Meta video retargeting funnels driving to dedicated landing pages.",
    keyResults: [
      "Designed to cut non-converting click spend",
      "Full-funnel attribution via GA4 and Meta Conversions API",
      "Designed for predictable Cost-Per-Acquisition (CPA)",
    ],
  },
] as const;

export const amburLocalHub = {
  eyebrow: "Local Market Authority",
  heading: "Digital Marketing Built for Ambur & Surrounding Tamil Nadu Businesses",
  lead:
    "Ambur is an industrial and commercial powerhouse renowned worldwide for leather manufacturing, vibrant retail markets, and rich hospitality. Yet many businesses here have not tapped their full digital potential.",
  industries: [
    {
      title: "Leather & Footwear Manufacturers / Exporters",
      desc: "Reach global buyers, European & American importers, and domestic distributors with targeted B2B SEO, international Google Ads, and LinkedIn authority positioning.",
    },
    {
      title: "Restaurants & Hospitality (Ambur Biryani & Dining)",
      desc: "Dominate Google Maps searches when travelers along NH 48 and local food lovers search for the best dining experiences.",
    },
    {
      title: "Healthcare Clinics, Diagnostic Centers & Doctors",
      desc: "Help patients across Ambur, Vaniyambadi, and Pernambut find trusted specialists, clinic timings, and direct appointment bookings.",
    },
    {
      title: "Retail Stores, Supermarkets & Boutiques",
      desc: "Drive daily footfall and WhatsApp inquiries with hyper-local Meta Ads and Google Local Inventory campaigns.",
    },
    {
      title: "Real Estate, Builders & Contractors",
      desc: "Generate qualified buyer leads for residential plots, commercial properties, and building projects across Tirupattur and Vellore districts.",
    },
    {
      title: "Colleges, Schools & Training Institutes",
      desc: "Attract student admissions and course enrollments with targeted search campaigns during peak academic decision windows.",
    },
  ],
  nearbyTowns: [
    "Ambur (Pillar Hub)",
    "Vaniyambadi",
    "Tirupattur",
    "Vellore",
    "Pernambut",
    "Jolarpettai",
    "Gudiyatham",
  ],
} as const;

export const blogArticles = [
  {
    slug: "what-is-ai-digital-marketing",
    title: "What Is AI Digital Marketing? A Practical Guide for Businesses",
    category: "AI Digital Marketing",
    visual: {
      topic: "ai",
      label: "Diagram: several market signals converging into one synthesis that produces a prioritised action",
      caption: "Signals → synthesis → prioritised action",
    },
    readTime: "6 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "Learn how artificial intelligence is transforming digital marketing from keyword research and ad creative generation to predictive analytics and automated customer journeys.",
    directAnswer:
      "AI Digital Marketing is the practice of leveraging artificial intelligence technologies—including machine learning, natural language processing (NLP), and generative AI—to analyze market data, automate marketing tasks, predict customer behavior, and optimize campaigns for maximum ROI.",
    content: [
      {
        heading: "Introduction: Why AI Is Transforming Modern Marketing",
        text: "Digital marketing has reached a stage where manual data analysis and generic mass content can no longer compete. Artificial Intelligence (AI) allows marketers to process millions of search data points in seconds, identify buyer patterns, and tailor individualized ad experiences at scale.",
      },
      {
        heading: "AI Digital Marketing vs Traditional Digital Marketing",
        text: "While traditional digital marketing relies on manual spreadsheet analysis, static A/B testing, and time-intensive creative production, AI digital marketing utilizes predictive algorithms to dynamically allocate ad spend, cluster search keywords by semantic intent, and draft highly relevant content in real time.",
      },
      {
        heading: "Core Applications of AI in Digital Marketing",
        points: [
          "Semantic Keyword & Entity Research: Discovering topics based on searcher intent rather than raw keyword frequency.",
          "Dynamic Ad Creative Testing: Testing dozens of headline variations and visual hooks on Meta and Google Ads.",
          "Predictive Churn & Conversion Modeling: Identifying which website visitors are most likely to purchase.",
          "Intelligent Content Production: Using LLMs under human editorial control to generate comprehensive guides and FAQs.",
        ],
      },
      {
        heading: "How Small & Local Businesses Can Benefit",
        text: "Small businesses no longer need massive agency budgets to execute world-class campaigns. With AI-assisted tools, a single dedicated marketer can manage search optimization, paid ads, and social content with extreme efficiency and precision.",
      },
    ],
    faq: [
      {
        q: "Will AI replace human digital marketers?",
        a: "No. AI replaces repetitive data entry and initial draft creation. Strategic decisions, brand positioning, ethical considerations, and human empathy remain entirely the responsibility of skilled marketers.",
      },
      {
        q: "What are the best AI tools for digital marketing?",
        a: "Leading tools include Claude and ChatGPT for content strategy, Perplexity for deep market research, Midjourney for creative direction, and Google's Smart Bidding algorithms in Google Ads.",
      },
    ],
  },
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO? Answer Engine Optimization vs SEO Explained",
    category: "AEO",
    visual: {
      topic: "aeo",
      label: "Diagram: a search question answered directly in a highlighted answer box above supporting sources",
      caption: "Question → direct answer → context",
    },
    readTime: "5 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "Understand Answer Engine Optimization (AEO), how it differs from traditional SEO, and how to structure your website to win Featured Snippets and voice search answers.",
    directAnswer:
      "Answer Engine Optimization (AEO) is the process of optimizing website content specifically so that search engines, voice assistants (Siri, Alexa, Google Assistant), and AI bots can extract concise, direct answers to user questions and display them as Featured Snippets or instant voice readouts.",
    content: [
      {
        heading: "The Shift From 10 Blue Links to Instant Answers",
        text: "Modern search users expect immediate answers without having to click through multiple websites. Google's Featured Snippets, 'People Also Ask' accordions, and AI Overviews prioritize clear, factual, well-structured definitions over lengthy, fluffy paragraphs.",
      },
      {
        heading: "AEO vs Traditional SEO: Key Differences",
        text: "Traditional SEO focuses on keyword density, backlinks, and page rankings for broad search queries. AEO, in contrast, focuses on semantic entity relationships, question-based headings (H2/H3), concise 40-60 word direct answers, and FAQ Schema markup.",
      },
      {
        heading: "How to Optimize Your Content for AEO",
        points: [
          "Use Question-Based Headings: Frame your subheadings exactly as users ask questions (e.g., 'What is...', 'How does...').",
          "Provide the Direct Answer First: Give a clear 2-3 sentence definition immediately beneath the heading.",
          "Use Ordered and Unordered Lists: Search engines love extracting step-by-step instructions and bullet points.",
          "Implement FAQPage Schema Markup: Provide structured JSON-LD code so search crawlers can parse Q&As without ambiguity.",
        ],
      },
    ],
    faq: [
      {
        q: "Does AEO replace SEO?",
        a: "No, AEO is an advanced evolution of on-page and technical SEO. Strong technical foundations and crawling access remain essential for AEO success.",
      },
    ],
  },
  {
    slug: "what-is-geo-generative-engine-optimization",
    title: "What Is GEO? Generative Engine Optimization Guide",
    category: "GEO",
    visual: {
      topic: "geo",
      label: "Diagram: several content entities converging into a single AI-generated answer",
      caption: "Content entities → AI understanding",
    },
    readTime: "7 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "Learn how to optimize your brand and content to be cited by Generative AI engines like ChatGPT, Google Gemini, Perplexity, and Claude.",
    directAnswer:
      "Generative Engine Optimization (GEO) is the strategy of enhancing a brand's digital presence, entity authority, and factual citations so that Generative AI models (like ChatGPT, Perplexity, and Gemini) reference and recommend the brand when answering user prompts.",
    content: [
      {
        heading: "Understanding the New Search Paradigm",
        text: "Millions of consumers and business buyers now use conversational AI tools to research products, compare vendors, and find local experts. If your brand is not recognized as a verified entity in AI knowledge bases, you are invisible to this rapidly growing audience.",
      },
      {
        heading: "How Generative AI Search Models Work",
        text: "Generative search engines combine Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG). When a user asks for 'the best digital marketer in Ambur', the AI searches trusted web sources, evaluates brand consensus, and synthesizes a direct recommendation.",
      },
      {
        heading: "The 4 Pillars of GEO Success",
        points: [
          "Entity Authority: Clear, consistent schema (Person, LocalBusiness) across your domain and verified external profiles.",
          "Information Gain: Publishing original research, unique viewpoints, and verified data rather than regurgitated summaries.",
          "Brand Mentions & Digital PR: Earning genuine citations and mentions across high-trust directories and publications.",
          "Clear Semantic Hierarchy: Writing clean markdown and HTML that AI parsers can ingest without confusion.",
        ],
      },
    ],
    faq: [
      {
        q: "How can I check if my brand appears in AI search?",
        a: "Test specific research queries in Perplexity, ChatGPT Search, and Google Gemini related to your service and location to see if your brand is cited in the footnotes.",
      },
    ],
  },
  {
    slug: "local-seo-guide-ambur-businesses",
    visual: {
      topic: "local-seo",
      label: "Diagram: a street grid map with one business pin surfaced, connecting local search to a nearby customer",
      caption: "Local search → discovery → business → customer",
    },
    title: "Local SEO Guide for Ambur Businesses: Rank on Google Maps",
    category: "Local SEO",
    readTime: "8 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "A step-by-step local search engine optimization playbook for businesses in Ambur, Vaniyambadi, and Tirupattur to dominate local search and Google Maps.",
    directAnswer:
      "Local SEO for Ambur businesses involves optimizing your Google Business Profile, building consistent local citations with your Name, Address, and Phone (NAP), earning genuine customer reviews, and creating geo-targeted landing pages so local customers find you first.",
    content: [
      {
        heading: "Why Local SEO Matters in Ambur, Tamil Nadu",
        text: "Over 80% of local consumers search on Google before visiting a store, clinic, or service provider. If your business does not appear in the top 3 Google Maps results (the Local 3-Pack), your competitors are capturing all those phone calls and footfall.",
      },
      {
        heading: "Step 1: Optimize Your Google Business Profile (GBP)",
        text: "Claim and verify your profile. Fill out 100% of information: exact business name (no keyword stuffing), primary category, service areas (Ambur, Vaniyambadi, Tirupattur), accurate working hours, and high-resolution interior/exterior photos.",
      },
      {
        heading: "Step 2: Maintain NAP Consistency Across Directories",
        text: "Your Name, Address, and Phone number (NAP) must be identical across your website, Google Maps, Justdial, IndiaMART, Facebook, and local directories. Conflicting phone numbers or addresses confuse Google's ranking algorithm.",
      },
      {
        heading: "Step 3: Systematic Customer Reviews",
        text: "Actively encourage satisfied customers in Ambur to leave authentic 5-star Google reviews mentioning the specific service or product they purchased. Always reply politely to all reviews.",
      },
    ],
    faq: [
      {
        q: "How long does it take to rank on Google Maps in Ambur?",
        a: "With a fully optimized Google Business Profile, consistent citations, and initial local reviews, businesses often see noticeable ranking improvements within 4 to 8 weeks.",
      },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-guide",
    visual: {
      topic: "compare",
      label: "Diagram: two separate routes, one from active search intent and one from social discovery, converging on the same channel decision",
      caption: "Search intent and social discovery are different problems",
    },
    title: "Google Ads vs Meta Ads: Which Is Best for Your Business?",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "Compare Google Search Ads and Meta (Facebook/Instagram) Ads. Learn how search intent vs social discovery dictates your advertising budget allocation.",
    directAnswer:
      "Google Ads captures high-intent demand (people actively searching for a solution right now), making it ideal for immediate lead generation and emergency services. Meta Ads creates demand by targeting specific demographics and interests with engaging visual creative, making it ideal for brand discovery, e-commerce, and visual retail.",
    content: [
      {
        heading: "Understanding Search Intent vs Visual Discovery",
        text: "When someone's leather machinery breaks or they urgently need a doctor in Ambur, they search on Google. Google Ads meets existing demand at the exact moment of need. On the other hand, when someone is browsing Instagram, Meta Ads introduces them to an exciting product or service they weren't actively looking for.",
      },
      {
        heading: "When to Choose Google Ads",
        points: [
          "High Search Volume Services: Plumbing, clinic visits, B2B export sourcing, real estate searches.",
          "High Urgency: Customers who need an immediate quote or solution today.",
          "Clear Keyword Intent: When users search with transactional keywords like 'buy leather shoes online' or 'SEO freelancer Ambur'.",
        ],
      },
      {
        heading: "When to Choose Meta Ads (Facebook & Instagram)",
        points: [
          "Visually Appealing Products: Fashion, food, hospitality, retail, interior design.",
          "Broad Local Brand Awareness: Announcing a grand opening, special festival discounts, or community events in Ambur.",
          "Retargeting: Re-engaging website visitors who looked at your services but didn't submit the contact form.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I run Google Ads and Meta Ads together?",
        a: "Yes! The most effective marketing funnels use Google Ads to capture searchers with high intent, and Meta Ads to retarget those visitors with social proof and video testimonials.",
      },
    ],
  },
  {
    slug: "how-ai-is-changing-seo",
    visual: {
      topic: "content",
      label: "Diagram: a grid of drafted pieces narrowed to one edited and published article",
      caption: "Many drafts → one piece worth publishing",
    },
    title: "How AI Is Changing SEO: Strategy for Modern Search Engines",
    category: "SEO",
    readTime: "6 min read",
    date: "2026-09-28",
    author: "Mohammed Aouf",
    excerpt:
      "Discover how Google's AI Overviews, semantic search algorithms, and helpful content updates require a fresh approach to search engine optimization.",
    directAnswer:
      "AI is shifting SEO from simple keyword placement to semantic entity understanding and user intent satisfaction. Search engines now evaluate 'Information Gain', author expertise (E-E-A-T), and direct answer clarity rather than raw word count or repetitive keywords.",
    content: [
      {
        heading: "The End of Keyword-Stuffed Content",
        text: "Google's RankBrain, BERT, and Gemini-powered search algorithms understand synonyms, conversational context, and user search intent. Repeating the same keyword 20 times in a blog post now harms rankings rather than helping them.",
      },
      {
        heading: "What Is 'Information Gain' and Why It Matters",
        text: "Google's algorithms reward content that provides new information, unique real-world insights, original case studies, or first-hand perspectives that cannot be found on other generic websites.",
      },
      {
        heading: "Actionable SEO Strategy for the AI Era",
        points: [
          "Focus on Topical Depth: Cover every facet of your core service in interconnected pillar and cluster pages.",
          "Demonstrate First-Hand Experience: Share real methods, local context, and transparent working processes.",
          "Implement Comprehensive Structured Data: Help search crawlers understand entities with Schema.org.",
          "Optimize for User Engagement: Fast page loading, clean typography, and zero intrusive pop-ups.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Google penalize AI-generated content?",
        a: "Google does not penalize AI content simply because it was created with AI. Google penalizes low-quality, generic, mass-produced content created solely to manipulate search rankings without adding value.",
      },
    ],
  },
] as const;

export const faqs = [
  {
    q: "What does an AI Digital Marketer & Freelance Growth Strategist do?",
    a: "An AI Digital Marketer combines modern artificial intelligence tools (for deep market research, audience clustering, and rapid content iteration) with human marketing strategy (SEO, Google Ads, Meta Ads, and Conversion Optimization) to generate measurable customer inquiries and revenue for businesses.",
    category: "General",
  },
  {
    q: "Why should businesses in Ambur, Tamil Nadu invest in Local SEO?",
    a: "Ambur has a competitive local marketplace spanning leather industries, restaurants, healthcare, retail, and education. Local SEO ensures that whenever potential customers search for your service in Ambur or surrounding areas like Vaniyambadi and Tirupattur, your business appears at the top of Google Maps and search results.",
    category: "Local SEO",
  },
  {
    q: "How is AEO (Answer Engine Optimization) different from regular SEO?",
    a: "While traditional SEO focuses on getting your web page ranked in the top 10 search results, AEO structures your content into direct, bite-sized answers (using Q&A formats, bullet points, and Schema markup) so search engines and voice assistants quote you directly as the authoritative answer.",
    category: "AEO / GEO",
  },
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of optimizing your brand entity and digital footprint so AI platforms like ChatGPT, Google Gemini, and Perplexity recognize and recommend your business when users ask for service suggestions.",
    category: "AEO / GEO",
  },
  {
    q: "How much does it cost to work with Mohammed Aouf?",
    a: "Every engagement is customized according to your business goals and the scope of work (e.g., Local SEO audit, full-funnel Google/Meta Ads management, or complete AI digital marketing strategy). We discuss budget and expected ROI transparently during your free consultation.",
    category: "Pricing & Process",
  },
  {
    q: "How soon can we expect results from SEO versus Paid Ads?",
    a: "Google Ads and Meta Ads can generate targeted traffic and inbound leads within days of campaign launch. Organic SEO and Local SEO typically show initial ranking and organic growth within 4 to 12 weeks as search engines index and reward your content.",
    category: "Pricing & Process",
  },
  {
    q: "Do you provide transparent reports?",
    a: "Yes. You receive regular, plain-language performance reports showing exact metrics: organic search rankings, phone calls, website leads, ad spend, and cost per lead—with zero vanity metric fluff.",
    category: "Pricing & Process",
  },
] as const;

export const seo = {
  defaultTitle: "Mohammed Aouf — AI Digital Marketer & Freelance Growth Strategist | Ambur, Tamil Nadu",
  titleTemplate: "%s | Mohammed Aouf",
  defaultDescription:
    "Mohammed Aouf is an AI digital marketer and freelance growth strategist in Ambur, Tamil Nadu. Expert in AI digital marketing, SEO, Local SEO, AEO, GEO, Google Ads, Meta Ads, and performance marketing. Get a free consultation.",
  keywords: [
    "AI digital marketing",
    "AI digital marketer in Ambur",
    "digital marketing freelancer in Ambur",
    "digital marketing services in Ambur",
    "SEO services in Ambur",
    "SEO freelancer in Ambur",
    "local SEO services in Ambur",
    "Google Ads in Ambur",
    "Meta Ads in Ambur",
    "freelance growth strategist Tamil Nadu",
    "AEO Answer Engine Optimization",
    "GEO Generative Engine Optimization",
    "AI content marketing",
    "digital marketing consultant Tamil Nadu",
    "marketing automation",
    "AI search visibility",
    "Mohammed Aouf",
  ],
} as const;

export const contact = {
  heading: "Start With a Direct Conversation",
  lead:
    "Tell me about your business and your target goals. I will provide an honest evaluation of your market opportunity in Ambur or beyond — with zero obligation.",
  helpOptions: [
    "AI Digital Marketing",
    "SEO",
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Performance Marketing",
    "AEO",
    "GEO",
    "Website / SEO Optimization",
    "Other",
  ],
} as const;

export const closing = {
  heading: "Ready to Turn Your Digital Presence Into Predictable Growth?",
  lead:
    "Let's identify where your marketing can improve and build an AI-powered growth strategy tailored around your unit economics.",
} as const;

export const problems = {
  heading: "Common Growth Challenges We Solve in Ambur",
  lead:
    "Most business owners know they need to grow online, but aren't sure which channel will deliver the highest return.",
  items: [
    {
      question: "Need more visibility in Ambur & Google Maps?",
      answer: "We optimize your Google Business Profile and build local citations so nearby customers find you first.",
    },
    {
      question: "Spending on ads without measurable leads?",
      answer: "We restructure your Google Ads and Meta Ads with exact negative keywords, high-converting landing pages, and WhatsApp direct funnels.",
    },
    {
      question: "Want long-term organic traffic that doesn't stop?",
      answer: "We implement white-hat technical and semantic SEO to capture high-intent buyer searches consistently.",
    },
    {
      question: "Unsure how AI can help your marketing?",
      answer: "We use AI to speed up research, audience clustering, and creative testing without sacrificing human brand judgment.",
    },
  ],
} as const;

export const trust = {
  heading: "How We Keep Marketing Accountable",
  lead:
    "No inflated dashboards, no fake promises. These are the working commitments behind every engagement.",
  commitments: [
    {
      title: "Defined Scope & Roadmap",
      body: "Every engagement starts with clear deliverables, prioritized channels, and explicit commercial targets.",
    },
    {
      title: "Shared Unit Economics",
      body: "We align on target Cost Per Lead (CPL) and Customer Acquisition Cost (CAC) upfront.",
    },
    {
      title: "AI Used Transparently",
      body: "We clearly explain where AI accelerates execution and where human strategy guides decision-making.",
    },
    {
      title: "Transparent Bi-Weekly Reporting",
      body: "Regular, plain-language reports on search rankings, ad spend, and verified inquiries.",
    },
  ],
  tools: [
    "Google Search Console",
    "Google Analytics 4",
    "Meta Ads Manager",
    "Google Ads Manager",
    "Claude & ChatGPT Workflows",
    "Schema.org Structured Data",
  ],
  toolsPlaceholder: "Industry-standard marketing and analytics platforms.",
} as const;


