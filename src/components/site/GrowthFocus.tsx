import { growth } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * The five focus areas read as one connected system via a shared amplitude
 * scale — each column's bar cluster is taller than the last, so "this leads
 * to that" is visible at a glance — while every column stays top-aligned on
 * a common baseline. (An earlier version staggered each column's vertical
 * position to sell the same idea; it just looked misaligned, so the growth
 * story now lives entirely in the bars, not in broken alignment.)
 */
export function GrowthFocus() {
  return (
    <Section id="growth" labelledBy="growth-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <Eyebrow>The case</Eyebrow>
            <h2
              id="growth-heading"
              className="mt-6 font-display text-display-lg font-semibold text-ink-900"
            >
              {growth.heading}
            </h2>
          </Reveal>

          <Reveal delay={90} className="max-w-xl space-y-5 text-lead text-steel-700 lg:pt-16">
            <p>{growth.body[0]}</p>
            <p>
              It needs the{" "}
              <strong className="font-semibold text-ink-900">
                right audience, the right strategy and measurable results.
              </strong>
            </p>
            <p>{growth.body[2]}</p>
          </Reveal>
        </div>

        {/* ---- The system ---- */}
        <Reveal className="mt-20 lg:mt-28">
          <Eyebrow className="mb-10">{growth.eyebrow}</Eyebrow>

          <ol className="grid gap-8 border-t border-ink-800/12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-8">
            {growth.focus.map((item, i) => (
              <li
                key={item.title}
                // Vertical rules stand in for the staircase's old "one
                // continuous run" cue, without disturbing the shared
                // baseline: every rule sits flush against the divider,
                // dropped only on the first column of each row.
                className="group flex flex-col border-b border-ink-800/12 pt-8 pb-10 sm:border-b-0 sm:pl-8 sm:[&:nth-child(2n+1)]:border-l-0 sm:[&:nth-child(2n+1)]:pl-0 sm:border-l sm:border-ink-800/12 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(5n+1)]:border-l-0 lg:[&:nth-child(5n+1)]:pl-0"
              >
                {/* Amplitude marker — every column reads from the same
                    baseline; only the fill height changes, so the growth
                    across the five stages shows up as a clean rising
                    silhouette rather than shifted text blocks. */}
                <span
                  aria-hidden="true"
                  className="mb-6 flex h-10 items-end gap-[3px]"
                >
                  {[0, 1, 2, 3].map((bar) => (
                    <span
                      key={bar}
                      className={
                        bar <= i
                          ? "block w-[3px] bg-phosphor transition-colors duration-base group-hover:bg-phosphor-deep"
                          : "block w-[3px] bg-ink-800/15"
                      }
                      style={{ height: `${30 + bar * 22}%` }}
                    />
                  ))}
                </span>

                <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-500">
                  {item.code}
                </p>
                <h3 className="mt-2 font-display text-display-sm font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-steel-700">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
