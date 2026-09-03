"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cta, nav, site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu, and let Escape close it.
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-base ease-out-quint",
        scrolled
          ? "border-b border-steel-500/20 bg-ink-900/85 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between gap-6 px-gutter">
        <Link
          href="#home"
          className="group flex items-baseline gap-2.5 text-porcelain"
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-[1.0625rem] font-semibold tracking-tight whitespace-nowrap">
            Mohammed Aouf
          </span>
          <span
            aria-hidden="true"
            className="hidden font-mono text-[0.625rem] tracking-[0.18em] text-steel-300 uppercase sm:inline"
          >
            / AI Growth
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-2 text-[0.9375rem] text-steel-300 transition-colors duration-fast hover:text-porcelain"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-phosphor transition-transform duration-base ease-out-quint hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Wrapped rather than given `hidden` directly: the button's own
              `inline-flex` would win the display conflict and it would stay
              visible on phones, where the menu already carries the CTA. */}
          <span className="hidden sm:block">
            <ButtonLink href="#contact" variant="phosphor" size="md">
              {cta.nav}
            </ButtonLink>
          </span>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-steel-500/30 text-porcelain transition-colors duration-fast hover:border-phosphor hover:text-phosphor lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-base ease-out-quint",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-base ease-out-quint",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-steel-500/20 bg-ink-900/97 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile" className="px-gutter py-4">
          <ul className="divide-y divide-steel-500/15">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-porcelain"
                >
                  <span className="font-display text-xl tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-mono text-[0.625rem] tracking-[0.18em] text-steel-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#contact"
            onClick={() => setOpen(false)}
            size="lg"
            className="mt-6 w-full"
            arrow
          >
            {cta.nav}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
