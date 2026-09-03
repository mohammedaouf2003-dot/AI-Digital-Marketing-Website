import { principles } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * Six principles that belong to one methodology, so they share a single
 * hairline grid rather than sitting in six separate cards. The section is
 * deliberately quiet — the services section above it is the loud one.
 */
export function WhyWorkWithMe() {
  return (
    <Section id="approach" labelledBy="approach-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-20">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
            <h2
              id="approach-heading"
              className="mt-6 font-display text-display-lg font-semibold text-ink-900"
            >
              {principles.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-lead text-steel-700">
              These six things hold across every engagement. Together they are
              the method — not a menu to choose from.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid border-t border-ink-800/12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {principles.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              // Vertical rules sit between columns only, never on the outer
              // edges: dropped for the first item of each row, at both the
              // two-column and three-column arrangements.
              className={
                "group border-b border-ink-800/12 py-8 " +
                "sm:border-l sm:pr-6 sm:pl-6 sm:[&:nth-child(2n+1)]:border-l-0 sm:[&:nth-child(2n+1)]:pl-0 " +
                "lg:px-8 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(2n+1)]:pl-8 " +
                "lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0"
              }
            >
              <h3 className="flex items-baseline gap-3 font-display text-display-sm font-semibold text-ink-900">
                <span
                  aria-hidden="true"
                  className="mt-1 h-1.5 w-1.5 shrink-0 bg-phosphor transition-transform duration-base ease-out-quint group-hover:scale-150"
                />
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-700">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
