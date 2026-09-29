import Link from "next/link";
import { nav, services, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate bg-ink-950 py-16 text-porcelain border-t border-steel-500/20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Identity & Mission */}
          <div>
            <Link href="/" className="font-display text-xl font-bold text-porcelain hover:text-phosphor transition-colors">
              {site.name}
            </Link>
            <p className="mt-2 font-mono text-[0.6875rem] leading-relaxed tracking-[0.14em] text-phosphor uppercase">
              {site.role}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-steel-400">
              Based in Ambur, Tamil Nadu. AI digital marketing, SEO and
              performance advertising for businesses that need measurable
              growth.
            </p>

            {/* Direct actions, each labelled for what it actually does. */}
            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.tel}
                  className="font-mono text-xs text-porcelain underline decoration-phosphor/50 underline-offset-4 transition-colors hover:text-phosphor"
                >
                  Call {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-porcelain underline decoration-phosphor/50 underline-offset-4 transition-colors hover:text-phosphor"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-xs break-all text-porcelain underline decoration-phosphor/50 underline-offset-4 transition-colors hover:text-phosphor"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-phosphor uppercase font-bold">
              <Link href="/services" className="hover:text-porcelain">
                Services (all 15) →
              </Link>
            </p>
            <ul className="mt-4 space-y-2 text-xs text-steel-300">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-phosphor"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local & Authority Hubs */}
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-phosphor uppercase font-bold">
              Hubs & Authority
            </p>
            <ul className="mt-4 space-y-2 text-xs text-steel-300">
              <li>
                <Link href="/digital-marketing-ambur" className="transition-colors hover:text-phosphor">
                  Ambur Digital Marketing Pillar
                </Link>
              </li>
              <li>
                <Link href="/local-seo-ambur" className="transition-colors hover:text-phosphor">
                  Ambur Google Maps & Local SEO
                </Link>
              </li>
              <li>
                <Link href="/aeo-answer-engine-optimization" className="transition-colors hover:text-phosphor">
                  AEO (Answer Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/geo-generative-engine-optimization" className="transition-colors hover:text-phosphor">
                  GEO (Generative Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-phosphor">
                  Projects & Case Frameworks
                </Link>
              </li>
              <li>
                <Link href="/insights" className="transition-colors hover:text-phosphor">
                  Insights & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-phosphor uppercase font-bold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-xs text-steel-300">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-porcelain"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-steel-500/20">
                <Link href="/privacy" className="transition-colors hover:text-porcelain">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-porcelain">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="transition-colors hover:text-porcelain">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-steel-500/20 pt-6 font-mono text-[0.6875rem] tracking-[0.12em] text-steel-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Ambur, Tamil Nadu.
          </p>
          <div className="flex items-center gap-4">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-phosphor">LinkedIn</a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-phosphor">GitHub</a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-phosphor">Instagram</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
