import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** The one closing call-to-action reused across pages. */
export function FinalCTA({
  title = "Ready to Build a Smarter Growth Engine?",
  lead = "Tell me where you are today. I will reply with an honest view of what is worth doing first.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-ink-800 py-16 text-porcelain sm:py-24"
    >
      <Container width="content">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="final-cta-heading"
            className="font-display text-display-lg font-bold tracking-tight text-porcelain"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-steel-300">{lead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" variant="phosphor" arrow>
              Book a Strategy Call
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline-light">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
