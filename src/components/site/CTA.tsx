import { closing, cta, site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The closing statement. It reuses the hero's instrument-room ground so the
 * page ends where it began — the argument has come full circle rather than
 * escalating into a sales pitch.
 */
export function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="grain measure-grid relative isolate overflow-hidden bg-ink-800 py-section text-porcelain"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-iris) 60%, transparent), transparent 70%)",
        }}
      />

      <Container width="content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="font-display text-display-lg font-semibold"
          >
            {closing.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-steel-300">
            {closing.lead}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="#contact" size="lg" arrow>
              {cta.primary}
            </ButtonLink>
            <ButtonLink
              href={`mailto:${site.email}`}
              variant="outline-light"
              size="lg"
            >
              {cta.secondary}
            </ButtonLink>
          </div>

          <p className="mt-8 font-mono text-[0.75rem] tracking-[0.1em] text-steel-300">
            {site.email}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
