import { trust } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * Trust built from stated working commitments — the things that are true
 * on day one of an engagement — rather than from results, logos or
 * testimonials that do not exist yet.
 *
 * The tools strip renders only when a real list is supplied in content.ts;
 * until then it shows an unmistakable placeholder.
 */
export function Trust() {
  return (
    <Section id="trust" labelledBy="trust-heading">
      <Container width="content">
        <Reveal className="max-w-2xl">
          <Eyebrow>Accountability</Eyebrow>
          <h2
            id="trust-heading"
            className="mt-6 font-display text-display-md font-semibold text-ink-900"
          >
            {trust.heading}
          </h2>
          <p className="mt-5 text-lead text-steel-700">{trust.lead}</p>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-ink-800/12 sm:grid-cols-2">
          {trust.commitments.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              className="bg-porcelain p-7"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-steel-700">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-500 uppercase">
            Tools &amp; platforms
          </p>
          {trust.tools.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {trust.tools.map((tool) => (
                <li
                  key={tool}
                  className="font-display text-base font-semibold text-ink-900"
                >
                  {tool}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-xl border border-dashed border-alert/40 bg-phosphor/8 p-4 font-mono text-[0.75rem] leading-relaxed text-steel-700">
              {trust.toolsPlaceholder}
            </p>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
