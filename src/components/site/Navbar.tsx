"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-mohammed-aouf" },
  { label: "Services", href: "/services" },
  { label: "AI Marketing", href: "/ai-marketing" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** Related routes that keep a nav item highlighted on child pages. */
const activeGroups: Record<string, string[]> = {
  "/services": [
    "/services",
    "/seo-services-ambur",
    "/local-seo-ambur",
    "/aeo-answer-engine-optimization",
    "/geo-generative-engine-optimization",
    "/google-ads-ambur",
    "/meta-ads-ambur",
    "/performance-marketing-ambur",
    "/social-media-marketing-ambur",
    "/digital-marketing-ambur",
  ],
  "/ai-marketing": ["/ai-marketing", "/ai-digital-marketing-ambur"],
  "/insights": ["/insights", "/blog"],
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const group = activeGroups[href] ?? [href];
  return group.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out",
        scrolled
          ? "border-b border-black/[0.08] bg-[#f9f8f5]/90 py-3.5 backdrop-blur-md shadow-xs"
          : "border-b border-transparent py-5 bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between gap-6 px-gutter">
        {/* Brand Name */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-ink-950"
          aria-label={`${site.name} — Home`}
        >
          <span className="font-display text-[1.125rem] font-bold tracking-tight text-ink-950 group-hover:text-phosphor transition-colors">
            {site.name}
          </span>
          <span
            aria-hidden="true"
            className="hidden font-mono text-[0.625rem] tracking-[0.16em] text-steel-500 uppercase md:inline"
          >
            / AI Growth Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-[0.875rem] font-medium transition-colors",
                  isActive
                    ? "text-phosphor font-semibold"
                    : "text-steel-700 hover:text-ink-950"
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-phosphor rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink href="/contact" variant="primary" size="md">
              Book a Strategy Call
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded border border-black/15 text-ink-950 transition-colors hover:border-phosphor hover:text-phosphor xl:hidden bg-porcelain-raised"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-full bg-current transition-transform duration-200",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-full bg-current transition-transform duration-200",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-black/10 bg-[#f9f8f5]/98 backdrop-blur-xl xl:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
      >
        <nav aria-label="Mobile" className="px-gutter py-6">
          <ul className="divide-y divide-black/8">
            {navigationItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-3.5 transition-colors hover:text-phosphor",
                    isActivePath(pathname, item.href) ? "text-phosphor" : "text-ink-900",
                  )}
                >
                  <span className="font-display text-lg tracking-tight font-semibold">
                    {item.label}
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-steel-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink
              href="/contact"
              onClick={() => setOpen(false)}
              size="lg"
              variant="primary"
              className="w-full justify-center"
              arrow
            >
              Book a Strategy Call
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
