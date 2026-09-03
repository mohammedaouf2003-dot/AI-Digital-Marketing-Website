import { problems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * Framed as an actual exchange rather than a feature list: the visitor's
 * question in display type, the reply beside it. The YOU / ME markers keep
 * the section pointed at the reader, which is the whole intent here.
 */
export function BusinessProblems() {
  return (
    <Section id="problems" ground="room" labelledBy="problems-heading">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">Where to start</Eyebrow>
          <h2
            id="problems-heading"
            className="mt-6 font-display text-display-lg font-semibold"
          >
            {problems.heading}
          </h2>
          <p className="mt-6 text-lead text-steel-300">{problems.lead}</p>
        </Reveal>

        <dl className="mt-16 border-t border-steel-500/20 lg:mt-20">
          {problems.items.map((item, i) => (
            <Reveal
              key={item.question}
              delay={i * 70}
              className="group grid gap-4 border-b border-steel-500/20 py-8 transition-colors duration-base hover:bg-ink-700/40 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:px-2"
            >
              <dt className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 shrink-0 font-mono text-[0.625rem] tracking-[0.16em] text-phosphor"
                >
                  YOU
                </span>
                <span className="font-display text-display-sm font-semibold text-porcelain">
                  {item.question}
                </span>
              </dt>
              <dd className="flex gap-4 lg:pt-1">
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-[0.625rem] tracking-[0.16em] text-steel-300"
                >
                  ME
                </span>
                <span className="text-[1.0625rem] leading-relaxed text-steel-300">
                  {item.answer}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
