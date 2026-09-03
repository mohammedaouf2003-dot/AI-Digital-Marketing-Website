"use client";

import { useRef, useState } from "react";
import { cta, services } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { ServiceFigure } from "./ServiceFigure";

/**
 * Services are channels rather than steps, so they are labelled with channel
 * codes (SEO, META, GADS…) instead of step numbers — the code says something
 * true about the item, which numbering here would not.
 *
 * Implemented as a real tablist: arrow keys move between channels, and the
 * panel is properly associated, so the whole section works without a mouse.
 */
export function Services() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = services.length - 1;
    let next: number | null = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const current = services[active];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="grain relative isolate scroll-mt-28 overflow-hidden bg-ink-900 py-section text-porcelain"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Services</Eyebrow>
          <h2
            id="services-heading"
            className="mt-6 font-display text-display-lg font-semibold"
          >
            Digital Marketing Solutions Built Around Your Business
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-steel-500/20 bg-steel-500/20 lg:mt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* ---- Channel list ---- */}
          <div
            role="tablist"
            aria-label="Marketing services"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            // Mobile gets a horizontal channel strip — six stacked rows plus
            // a panel is far too tall on a phone. The strip scrolls inside
            // itself, so the page never scrolls sideways.
            className="flex snap-x snap-mandatory overflow-x-auto bg-ink-900 lg:flex-col lg:overflow-x-visible"
          >
            {services.map((service, i) => {
              const selected = i === active;
              return (
                <button
                  key={service.code}
                  ref={(node) => {
                    tabRefs.current[i] = node;
                  }}
                  role="tab"
                  id={`service-tab-${service.code}`}
                  aria-selected={selected}
                  aria-controls="service-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    // On large screens flex-1 lets the six channels share the
                    // panel's full height, so the column reads as a console
                    // rather than a short list with dead space beneath it.
                    "group flex shrink-0 snap-start flex-col items-start gap-1.5 border-r border-steel-500/15 px-5 py-4 text-left transition-colors duration-fast",
                    "lg:w-auto lg:flex-1 lg:shrink lg:flex-row lg:items-center lg:gap-6 lg:border-r-0 lg:border-b lg:px-7 lg:py-5 lg:last:border-b-0",
                    selected ? "bg-ink-700" : "hover:bg-ink-800",
                  )}
                >
                  <span
                    className={cn(
                      "shrink-0 font-mono text-[0.6875rem] tracking-[0.14em] transition-colors duration-fast lg:w-14",
                      selected ? "text-phosphor" : "text-steel-300",
                    )}
                  >
                    {service.code}
                  </span>
                  <span
                    className={cn(
                      "font-display font-semibold whitespace-nowrap transition-colors duration-fast lg:text-display-sm lg:whitespace-normal",
                      selected ? "text-porcelain" : "text-steel-300",
                    )}
                  >
                    {service.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "hidden h-px w-6 shrink-0 transition-all duration-base ease-out-quint lg:ml-auto lg:block",
                      selected ? "lg:w-10 bg-phosphor" : "bg-steel-500/40",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* ---- Panel ---- */}
          <div
            role="tabpanel"
            id="service-panel"
            aria-labelledby={`service-tab-${current.code}`}
            tabIndex={0}
            className="flex flex-col justify-between gap-8 bg-ink-800 p-7 sm:p-10"
          >
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-phosphor uppercase">
                {current.code}
              </p>
              {/* Keyed so the copy re-mounts and re-runs its fade on change. */}
              <div key={current.code} data-reveal="in" className="mt-5">
                <h3 className="font-display text-display-md font-semibold">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-md text-lead text-steel-300">
                  {current.body}
                </p>
                <p className="mt-6 border-l border-phosphor/50 pl-4 font-display text-lg text-porcelain italic">
                  {current.concept}
                </p>
              </div>
            </div>

            <div
              key={`fig-${current.code}`}
              data-reveal="in"
              className="mx-auto aspect-16/11 w-full max-w-md"
            >
              <ServiceFigure code={current.code} />
            </div>

            <ButtonLink href="#contact" variant="outline-light" className="self-start" arrow>
              {cta.primary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
