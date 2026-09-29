import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/** Dark page banner shared by the top-level pages: one message, one action. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-b border-steel-500/20 bg-ink-900 py-14 text-porcelain sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 font-mono text-xs uppercase text-phosphor">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-porcelain">
            {title}
          </h1>
          <p className="mt-4 text-lead text-steel-300">{lead}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <ButtonLink href={primary.href} size="lg" variant="phosphor" arrow>
                  {primary.label}
                </ButtonLink>
              )}
              {secondary && (
                <ButtonLink href={secondary.href} size="lg" variant="outline-light">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
