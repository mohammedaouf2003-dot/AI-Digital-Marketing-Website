/**
 * Single source of truth for every word on the site.
 *
 * NOTE ON CREDIBILITY: this file contains no invented clients, testimonials,
 * results, certifications, awards or years of experience. Anything awaiting
 * real information from Mohammed is marked with `placeholder: true` and is
 * rendered with a visible "to be supplied" treatment in development.
 */

export const site = {
  name: "Mohammed Aouf",
  role: "AI Digital Marketer & Freelance Growth Strategist",
  email: "mohammedaouf2003@gmail.com",
  // Replace with the real production domain before launch.
  url: "https://mohammedaouf.com",
  tagline: "AI-Powered Digital Marketing That Drives Business Growth",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const cta = {
  primary: "Get a Free Marketing Consultation",
  nav: "Free Consultation",
  secondary: "Email Mohammed",
} as const;

export const hero = {
  headline: ["AI-Powered", "Digital Marketing", "That Drives", "Business Growth"],
  lead:
    "I help businesses build a stronger digital presence, reach the right audience and generate measurable growth through AI-powered digital marketing strategies.",
  services: [
    "SEO",
    "Social Media Marketing",
    "AI Content Marketing",
    "Meta Ads",
    "Google Ads",
  ],
} as const;

/** The hero instrument: the chain a business actually moves through. */
export const signalChain = [
  {
    code: "AUD",
    label: "Audience",
    note: "Who is actually worth reaching.",
  },
  {
    code: "STR",
    label: "Strategy",
    note: "What to do, and in what order.",
  },
  {
    code: "AI",
    label: "AI",
    note: "Where AI speeds up the work.",
  },
  {
    code: "CMP",
    label: "Campaigns",
    note: "Search, social and paid, running together.",
  },
  {
    code: "GRW",
    label: "Growth",
    note: "Measured, reviewed, improved.",
  },
] as const;

export const growth = {
  heading: "Turn Your Digital Presence Into Business Growth",
  body: [
    "Your business needs more than just likes, posts or website traffic.",
    "It needs the right audience, the right strategy and measurable results.",
    "I combine AI, marketing strategy and data-driven execution to help businesses improve visibility, engagement, leads and conversions.",
  ],
  eyebrow: "What I focus on",
  focus: [
    {
      code: "01",
      title: "Visibility",
      body: "Help your business get discovered by the right audience.",
    },
    {
      code: "02",
      title: "Engagement",
      body: "Build meaningful connections through social media and content.",
    },
    {
      code: "03",
      title: "Leads",
      body: "Reach potential customers through targeted marketing campaigns.",
    },
    {
      code: "04",
      title: "Conversions",
      body: "Optimize marketing activities toward real business goals.",
    },
    {
      code: "05",
      title: "Growth",
      body: "Continuously analyze and improve your digital marketing performance.",
    },
  ],
} as const;

/**
 * Services are channels, not a sequence — so they carry channel codes
 * rather than step numbers.
 */
export const services = [
  {
    code: "SEO",
    title: "SEO",
    body:
      "Improve your search visibility and attract relevant organic traffic through strategic SEO.",
    concept: "Be found by people already looking for you.",
  },
  {
    code: "SMM",
    title: "Social Media Marketing",
    body:
      "Build a stronger social presence, engage your audience and grow brand awareness.",
    concept: "Turn attention into an audience that stays.",
  },
  {
    code: "AIC",
    title: "AI Content Marketing",
    body:
      "Use AI intelligently to create strategic, relevant and conversion-focused content.",
    concept: "AI for speed. Strategy for direction.",
  },
  {
    code: "META",
    title: "Meta Ads",
    body:
      "Reach targeted audiences through data-driven Facebook and Instagram advertising campaigns.",
    concept: "Put the offer in front of the right feed.",
  },
  {
    code: "GADS",
    title: "Google Ads",
    body:
      "Connect with potential customers actively searching for your products or services.",
    concept: "Meet demand at the moment it appears.",
  },
  {
    code: "STRAT",
    title: "AI Digital Marketing Strategy",
    body:
      "Combine AI-powered tools, marketing insights and business goals to create smarter marketing strategies.",
    concept: "One plan the whole business can follow.",
  },
] as const;

export const principles = {
  heading: "More Than Marketing. A Growth-Focused Approach.",
  items: [
    {
      title: "AI + Marketing",
      body:
        "I combine AI tools with practical digital marketing strategies to improve efficiency and execution.",
    },
    {
      title: "Business-Focused",
      body:
        "I focus on understanding your business goals instead of using a one-size-fits-all approach.",
    },
    {
      title: "Data-Driven",
      body:
        "Marketing decisions are guided by audience insights, campaign performance and measurable data.",
    },
    {
      title: "Customized Strategy",
      body:
        "Every business is different. Your marketing strategy should be built around your audience, industry and objectives.",
    },
    {
      title: "Transparent Communication",
      body:
        "Clear communication and regular updates keep you informed throughout the process.",
    },
    {
      title: "Continuous Optimization",
      body:
        "I monitor performance and look for opportunities to improve your marketing results.",
    },
  ],
} as const;

export const problems = {
  heading: "What Can I Help You Solve?",
  lead:
    "Most conversations start with one of these. Find the one that sounds like your business.",
  items: [
    {
      question: "Need more visibility?",
      answer:
        "I can help improve your online presence through SEO and strategic content.",
    },
    {
      question: "Need a stronger social presence?",
      answer:
        "I can create social media strategies designed around your audience and business objectives.",
    },
    {
      question: "Need better content?",
      answer:
        "I can use AI-assisted content strategies to create consistent and relevant marketing content.",
    },
    {
      question: "Need more leads?",
      answer:
        "I can help reach targeted audiences through Meta Ads and Google Ads.",
    },
    {
      question: "Don't know where to start?",
      answer:
        "I can analyze your current digital presence and identify practical marketing opportunities.",
    },
  ],
} as const;

/** This one genuinely is a sequence, so it is numbered. */
export const process = {
  heading: "A Simple, Transparent Process",
  lead:
    "Six steps, in this order, every time — so you always know what is happening and why.",
  steps: [
    {
      code: "01",
      title: "Discover",
      body: "Understand your business, target audience and goals.",
    },
    {
      code: "02",
      title: "Analyze",
      body: "Review your current digital presence and identify opportunities.",
    },
    {
      code: "03",
      title: "Strategize",
      body: "Develop a customized marketing strategy based on your objectives.",
    },
    {
      code: "04",
      title: "Execute",
      body:
        "Implement the right combination of SEO, social media, content and paid advertising.",
    },
    {
      code: "05",
      title: "Optimize",
      body: "Monitor performance and continuously improve the strategy.",
    },
    {
      code: "06",
      title: "Report",
      body: "Provide clear updates and insights so you understand the progress.",
    },
  ],
} as const;

export const about = {
  heading: "Meet Your AI Digital Marketing Partner",
  eyebrow: "About",
  body: [
    "I'm Mohammed Aouf, an AI digital marketer and freelance growth strategist. I work with businesses that know they need a stronger digital presence but aren't sure which part of their marketing to fix first.",
    "My approach starts with the business, not the channel. Before touching a campaign, I want to understand what you sell, who buys it, and what a good month actually looks like for you. Only then does it make sense to decide whether the answer is search, social, content, paid — or a combination.",
    "I use AI where it genuinely helps: research, audience analysis, content production, campaign iteration and reporting. It removes the slow, repetitive part of marketing so more time goes into strategy and judgement. AI does not replace the thinking — it makes room for it.",
    "What I care about is business outcomes rather than surface metrics. Visibility, engagement, leads and conversions are only useful if they move the business. I'd rather show you a clear, honest picture of what is working and what isn't than a dashboard designed to look impressive.",
    "I keep communication direct. You'll know what I'm doing, why I'm doing it, and what the results look like — in plain language, on a regular rhythm.",
  ],
  photo: {
    src: "/mohammed-aouf.png",
    alt: "Mohammed Aouf, AI digital marketer and freelance growth strategist, standing by a desk with marketing analytics on screen",
    placeholder: false as boolean,
  },
} as const;

/**
 * Trust is built from method here, not from evidence that does not exist yet.
 * `tools` is intentionally empty until Mohammed supplies the real list.
 */
export const trust = {
  heading: "How I Keep the Work Accountable",
  lead:
    "No inflated dashboards and no vague retainers. These are the working commitments behind every engagement.",
  commitments: [
    {
      title: "Defined scope",
      body:
        "Every engagement starts with what will be done, in what order, and what it is meant to achieve.",
    },
    {
      title: "Shared measurement",
      body:
        "We agree upfront which numbers matter for your business, and those are the numbers I report on.",
    },
    {
      title: "AI used transparently",
      body:
        "I'll tell you where AI is part of the workflow and where the work is judgement, research or manual review.",
    },
    {
      title: "Regular reporting rhythm",
      body:
        "Clear written updates on a set schedule, including what did not work and what I'm changing.",
    },
  ],
  tools: [] as readonly string[],
  toolsPlaceholder:
    "Tools and platforms will be listed here once confirmed — SEO, analytics, ad platforms and AI tooling actually used in engagements.",
} as const;

export const closing = {
  heading: "Ready to Turn Your Digital Presence Into Growth?",
  lead:
    "Let's identify where your marketing can improve and build a strategy around your business goals.",
} as const;

export const contact = {
  heading: "Start With a Conversation",
  lead:
    "Tell me a little about your business and what you're trying to improve. I'll come back with an honest read on where I think the opportunity is — no obligation.",
  helpOptions: [
    "SEO / search visibility",
    "Social media marketing",
    "AI content marketing",
    "Meta Ads",
    "Google Ads",
    "Overall marketing strategy",
    "Not sure yet",
  ],
} as const;

export const seo = {
  title: "Mohammed Aouf — AI Digital Marketing Freelancer",
  description:
    "Mohammed Aouf is an AI digital marketer and freelance growth strategist helping businesses grow through SEO, social media marketing, AI content marketing, Meta Ads and Google Ads. Get a free marketing consultation.",
  keywords: [
    "AI digital marketing",
    "freelance digital marketer",
    "SEO freelancer",
    "Meta Ads",
    "Google Ads",
    "AI content marketing",
    "growth strategist",
  ],
} as const;
