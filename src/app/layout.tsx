import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import { seo, site } from "@/lib/content";

/**
 * Type pairing:
 *  - Bricolage Grotesque carries the display voice (variable, slightly
 *    idiosyncratic grotesk — confident without reading as corporate).
 *  - Instrument Sans handles body copy at reading sizes.
 *  - IBM Plex Mono is the utility face for readouts, codes and labels,
 *    which is where the "instrument" identity actually lives.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#150c2e",
  width: "device-width",
  initialScale: 1,
};

/**
 * Person + ProfessionalService schema. Only facts that are actually true are
 * described here — no ratings, no review counts, no invented credentials.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}#person`,
      name: site.name,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      url: site.url,
      description: seo.description,
      knowsAbout: [
        "Search engine optimization",
        "Social media marketing",
        "AI content marketing",
        "Meta Ads",
        "Google Ads",
        "Digital marketing strategy",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}#service`,
      name: `${site.name} — AI Digital Marketing`,
      url: site.url,
      email: `mailto:${site.email}`,
      provider: { "@id": `${site.url}#person` },
      description: seo.description,
      serviceType: [
        "SEO",
        "Social Media Marketing",
        "AI Content Marketing",
        "Meta Ads",
        "Google Ads",
        "AI Digital Marketing Strategy",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
