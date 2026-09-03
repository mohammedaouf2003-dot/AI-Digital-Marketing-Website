import { cta, hero, site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SignalInstrument } from "./SignalInstrument";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      // Top/bottom padding is deliberately lighter at `lg` than at `sm`:
      // many "big screens" are actually wide 16:9 laptops with a short
      // browser viewport (1366×768 and similar), so the headline + CTA
      // need to clear the fixed nav and land above the fold there too,
      // not just on a tall external monitor.
      className="grain measure-grid relative isolate overflow-hidden bg-ink-800 pt-28 pb-16 text-porcelain sm:pt-32 sm:pb-20 lg:pt-24 lg:pb-20"
    >
      {/* The site's "AI digital marketing" visual: an audience network
          resolving into a rising growth line, not a stock photo — see
          HeroBackdrop for why. */}
      <HeroBackdrop />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
          {/* ---- The argument ---- */}
          <div>
            <Eyebrow tone="light">{site.role}</Eyebrow>

            <h1
              id="hero-heading"
              className="mt-5 font-display text-display-xl font-semibold lg:mt-6"
            >
              {hero.headline.map((line, i) => (
                <span key={line} className="block">
                  {/* The verb line carries the accent — the promise, not the label. */}
                  {i === 2 ? (
                    <span className="text-phosphor">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-lead text-steel-300">{hero.lead}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#contact" size="lg" arrow>
                {cta.primary}
              </ButtonLink>
              <ButtonLink href="#services" variant="outline-light" size="lg">
                See what I do
              </ButtonLink>
            </div>

            {/* Services as a readout strip, not chips. */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-steel-500/20 pt-6 font-mono text-[0.6875rem] tracking-[0.16em] text-steel-300 uppercase">
              {hero.services.map((service, i) => (
                <li key={service} className="flex items-center gap-5">
                  {service}
                  {i < hero.services.length - 1 ? (
                    <span aria-hidden="true" className="text-phosphor/60">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- The instrument ---- */}
          {/* A glass panel lifts the readout above the backdrop network
              rather than competing with it line-for-line — the backdrop
              stays visible at the edges, as depth, not as noise. */}
          <div className="lg:pl-4">
            <div className="rounded-md border border-steel-500/15 bg-ink-900/60 p-6 backdrop-blur-sm sm:p-8">
              <SignalInstrument />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
