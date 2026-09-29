import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/site/ServiceCard";
import { GrowthFlow } from "@/components/site/GrowthFlow";
import {
  aiAdvantage,
  catalog,
  coreExpertise,
  outcomes,
  selectedServiceSlugs,
  whyWork,
} from "@/lib/catalog";

function SectionHead({
  eyebrow,
  id,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  id: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <Eyebrow tone={dark ? "light" : "dark"}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={
          "mt-4 font-display text-display-lg font-bold tracking-tight " +
          (dark ? "text-porcelain" : "text-ink-950")
        }
      >
        {title}
      </h2>
      {lead && (
        <p className={"mt-3 text-lead " + (dark ? "text-steel-300" : "text-steel-700")}>{lead}</p>
      )}
    </div>
  );
}

export function CoreExpertise() {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="border-b border-black/[0.08] bg-porcelain-raised py-16 sm:py-20"
    >
      <Container>
        <SectionHead eyebrow="Core expertise" id="expertise-heading" title="Ten capabilities, one growth system" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {coreExpertise.map((e) => (
            <li
              key={e.label}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-porcelain px-4 py-3.5"
            >
              <Icon name={e.icon} className="h-5 w-5 text-alert" />
              <span className="text-sm font-semibold leading-tight text-ink-900">{e.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WhyWork() {
  return (
    <section aria-labelledby="why-heading" className="border-b border-black/[0.08] bg-porcelain py-16 sm:py-24">
      <Container>
        <SectionHead
          eyebrow="Why businesses work with me"
          id="why-heading"
          title="Strategy, AI and accountability in one place"
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyWork.map((w, i) => (
            <div key={w.title} className="bg-porcelain-raised p-6 sm:p-8">
              <span className="font-mono text-xs font-bold text-alert">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-950">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">{w.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SelectedServices() {
  const items = selectedServiceSlugs
    .map((slug) => catalog.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <section
      id="services"
      aria-labelledby="selected-heading"
      className="border-b border-black/[0.08] bg-porcelain-raised py-16 sm:py-24"
    >
      <Container>
        <SectionHead
          eyebrow="Selected services"
          id="selected-heading"
          title="Where I can help most"
          lead="Six core services. The full list of fifteen is on the services page."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.slug} service={s} compact />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="primary" size="lg" arrow>
            View All 15 Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function AiAdvantage() {
  return (
    <section aria-labelledby="ai-heading" className="bg-ink-900 py-16 text-porcelain sm:py-24">
      <Container>
        <SectionHead
          dark
          eyebrow="The AI marketing advantage"
          id="ai-heading"
          title="AI across the whole growth cycle"
          lead="Used where it saves time or sharpens a decision, and reviewed by a person before it reaches a customer."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aiAdvantage.map((a) => (
            <li key={a.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-display text-base font-bold text-porcelain">{a.label}</p>
              <p className="mt-1.5 text-sm text-steel-300">{a.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <GrowthFlow dark />
        </div>
        <div className="mt-10">
          <Link
            href="/ai-marketing"
            className="font-mono text-xs font-bold uppercase tracking-wider text-phosphor underline decoration-phosphor/60 underline-offset-4 hover:text-white"
          >
            Explore AI Marketing →
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function Outcomes() {
  return (
    <section aria-labelledby="outcomes-heading" className="border-b border-black/[0.08] bg-porcelain py-16 sm:py-24">
      <Container>
        <SectionHead
          eyebrow="Outcomes"
          id="outcomes-heading"
          title="What the work is aimed at"
          lead="Six outcome areas I plan, track and report on. No invented numbers."
        />
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {outcomes.map((o) => (
            <li key={o.label} className="rounded-2xl border border-black/10 bg-porcelain-raised p-5 sm:p-6">
              <p className="font-display text-lg font-bold text-ink-950 sm:text-xl">{o.label}</p>
              <p className="mt-1.5 text-sm text-steel-700">{o.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
