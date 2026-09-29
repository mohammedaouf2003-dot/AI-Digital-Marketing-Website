import { site } from "./content";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}#person`,
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    image: `${site.url}/images/mohammed-aouf-ai-digital-marketer.jpg`,
    description:
      "Mohammed Aouf is an AI digital marketer and freelance growth strategist based in Ambur, Tamil Nadu specializing in SEO, Local SEO, AEO, GEO, and Performance Marketing.",
    // City and region only — no postal code. A postcode narrows this to a
    // delivery area, and this is a home-based practice, so it is not published.
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "AI Content Marketing",
      "Conversion Rate Optimization",
      "Google Analytics 4",
      "Performance Marketing",
    ],
    sameAs: [
      site.socials.linkedin,
      site.socials.github,
      site.socials.instagram,
      site.socials.twitter,
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}#service`,
    name: `${site.name} — AI Digital Marketing & Local SEO`,
    url: site.url,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    priceRange: "$$",
    image: `${site.url}/images/mohammed-aouf-ai-digital-marketer.jpg`,
    provider: { "@id": `${site.url}#person` },
    description:
      "AI digital marketing, SEO, Local SEO, and Performance Marketing services for businesses in Ambur, Vaniyambadi, Tirupattur, Vellore, and Tamil Nadu.",
    // Deliberately no streetAddress. This is a freelance practice working
    // remotely, not a walk-in premises, and publishing a made-up or residential
    // street would be both inaccurate and a privacy problem. City, region and
    // country are all that can be honestly claimed.
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phone,
        email: site.email,
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: site.whatsapp,
        contactOption: "Chat",
        areaServed: "IN",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.location.geo.latitude,
      longitude: site.location.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Ambur" },
      { "@type": "City", name: "Vaniyambadi" },
      { "@type": "City", name: "Tirupattur" },
      { "@type": "City", name: "Vellore" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: [
      "AI Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Google Business Profile Optimization",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Google Ads Management",
      "Meta Ads Management",
      "Social Media Marketing",
      "AI Content Marketing",
    ],
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tamil Nadu, India",
    },
    url: `${site.url}${url}`,
  };
}

export function generateFAQSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}${url}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}
