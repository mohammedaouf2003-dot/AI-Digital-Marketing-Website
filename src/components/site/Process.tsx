import { process } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * This section is numbered because it genuinely is a sequence — the order
 * carries information the reader needs.
 *
 * The connecting rail fills as each step scrolls into view, which gives the
 * progression without any scroll-position maths: the reveal state the rest
 * of the page already uses drives the rail segment too (see `.rail-fill`).
 */
export function Process() {
  return (
    <Section id="process" labelledBy="process-heading">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Process</Eyebrow>
          <h2
            id="process-heading"
            className="mt-6 font-display text-display-lg font-semibold text-ink-900"
          >
            {process.heading}
          </h2>
          <p className="mt-6 text-lead text-steel-700">{process.lead}</p>
        </Reveal>

        <ol className="mt-16 lg:mt-20">
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.code}
              className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 sm:gap-x-10 lg:grid-cols-[auto_minmax(0,0.5fr)_minmax(0,1fr)]"
            >
              {/* Rail column: dot + connector that fills on reveal. */}
              <div className="relative flex w-8 flex-col items-center sm:w-10">
                <span className="relative z-10 mt-1.5 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-ink-800/25 bg-porcelain" />
                  <span className="rail-dot absolute inset-[3px] rounded-full bg-phosphor" />
                </span>
                {i < process.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="relative mt-1 w-px flex-1 bg-ink-800/12"
                  >
                    <span className="rail-fill absolute inset-0 bg-phosphor/60" />
                  </span>
                ) : null}
              </div>

              <div className="pb-12 lg:flex lg:items-baseline lg:gap-6">
                <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-500">
                  {step.code}
                </p>
                <h3 className="mt-1.5 font-display text-display-md font-semibold text-ink-900 lg:mt-0">
                  {step.title}
                </h3>
              </div>

              <p className="col-start-2 -mt-8 max-w-md pb-12 text-[1.0625rem] leading-relaxed text-steel-700 lg:col-start-3 lg:mt-0 lg:pt-1">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
