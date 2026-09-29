import Image from "next/image";
import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="editorial-grain relative isolate overflow-hidden bg-porcelain pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-12 min-h-[calc(100svh-4.5rem)] flex flex-col justify-center border-b border-black/[0.08]"
    >
      <Container>
        {/* Viewport-Aware Two-Column Hero Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* Left Column: Heading + Pitch + CTAs (Guaranteed Above the Fold) */}
          <div className="max-w-2xl">
            {/* Identity & Location Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-porcelain-raised px-3.5 py-1 text-xs font-mono text-ink-800 shadow-xs mb-3 sm:mb-4">
              <span className="h-2 w-2 rounded-full bg-alert animate-pulse" />
              <span className="font-semibold">AI Digital Marketing &amp; Growth Strategy</span>
              <span className="text-steel-300">|</span>
              <span className="text-steel-500 font-normal">Ambur, Tamil Nadu</span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-display-xl font-bold tracking-tight text-ink-950 leading-[1.06]"
            >
              AI-Powered Digital Marketing{" "}
              <span className="text-alert">Built for Measurable Growth</span>
            </h1>

            <p className="mt-3.5 sm:mt-4 max-w-xl text-[0.9375rem] sm:text-base leading-relaxed text-steel-700">
              I help businesses build search visibility, generate qualified demand and improve
              customer acquisition, using AI-driven marketing systems guided by human strategy.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg" variant="primary" arrow>
                Book a Strategy Call
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-dark" size="lg">
                Explore Services
              </ButtonLink>
            </div>

            {/* Concise Editorial Metadata Bar */}
            <div className="mt-7 sm:mt-8 grid grid-cols-3 gap-2 border-t border-black/10 pt-4 font-mono text-xs text-steel-700">
              <div>
                <span className="text-[0.625rem] text-steel-400 uppercase tracking-wider block">Specialty</span>
                <span className="font-semibold text-ink-900 text-xs">AI + Search + Growth</span>
              </div>
              <div>
                <span className="text-[0.625rem] text-steel-400 uppercase tracking-wider block">Local Focus</span>
                <span className="font-semibold text-ink-900 text-xs">Ambur & Tamil Nadu</span>
              </div>
              <div>
                <span className="text-[0.625rem] text-steel-400 uppercase tracking-wider block">Commitment</span>
                <span className="font-semibold text-alert text-xs">Measured, Not Promised</span>
              </div>
            </div>
          </div>

          {/* Right Column: Gallery Photographic Plate */}
          <div className="relative">
            <div className="relative mx-auto max-w-[340px] sm:max-w-sm lg:max-w-md">
              <div className="relative rounded-2xl bg-porcelain-raised p-3 shadow-xl border border-black/10">
                <div className="relative aspect-[1086/1448] overflow-hidden rounded-xl bg-ink-900">
                  <Image
                    src="/images/mohammed-aouf-ai-digital-marketer.jpg"
                    alt="Mohammed Aouf, AI digital marketer, seated at his desk in front of a digital marketing strategy wall"
                    fill
                    loading="eager"
                    fetchPriority="high"
                    className="object-contain object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-2.5 flex items-center justify-between px-1">
                  <div>
                    <p className="font-display text-xs sm:text-sm font-bold text-ink-950">
                      {site.name}
                    </p>
                    <p className="font-mono text-[0.625rem] text-steel-500">
                      AI Digital Marketer & Growth Strategist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
