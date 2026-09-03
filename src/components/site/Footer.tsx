import Link from "next/link";
import { nav, services, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative isolate bg-ink-900 py-16 text-porcelain">
      <Container>
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
          {/* Identity */}
          <div>
            <p className="font-display text-display-sm font-semibold">
              {site.name}
            </p>
            <p className="mt-2 max-w-xs font-mono text-[0.6875rem] leading-relaxed tracking-[0.12em] text-steel-300 uppercase">
              {site.role}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-[0.9375rem] text-steel-300 underline decoration-phosphor/60 decoration-1 underline-offset-4 transition-colors duration-fast hover:text-phosphor"
            >
              {site.email}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-300 uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-steel-300 transition-colors duration-fast hover:text-porcelain"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-300 uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.code}>
                  <Link
                    href="#services"
                    className="text-[0.9375rem] text-steel-300 transition-colors duration-fast hover:text-porcelain"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-steel-500/20 pt-6 font-mono text-[0.6875rem] tracking-[0.12em] text-steel-300 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Freelance · Available for new engagements</p>
        </div>
      </Container>
    </footer>
  );
}
