import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import { seo, site } from "@/lib/content";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { Analytics } from "@/components/site/Analytics";
import { generateLocalBusinessSchema, generatePersonSchema } from "@/lib/schema";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
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
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — AI Digital Marketing`,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    locale: "en_IN",
    images: [
      {
        url: `${site.url}/images/og-mohammed-aouf.jpg`,
        width: 1200,
        height: 630,
        alt: "Mohammed Aouf — AI Digital Marketer & Freelance Growth Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    creator: "@mohammedaouf",
    images: [`${site.url}/images/og-mohammed-aouf.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [generatePersonSchema(), generateLocalBusinessSchema()],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-porcelain text-ink-900 antialiased selection:bg-phosphor selection:text-ink-900">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
        {/* Mobile-only contact bar. The matching bottom padding stops it from
            ever covering the end of a page. */}
        <MobileContactBar />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </body>
    </html>
  );
}
