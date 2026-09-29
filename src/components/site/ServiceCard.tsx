import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { serviceHref, type CatalogService } from "@/lib/catalog";

/** One service tile: number, icon, name, one-line promise, capabilities, CTA. */
export function ServiceCard({
  service,
  compact = false,
}: {
  service: CatalogService;
  compact?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-black/10 bg-porcelain-raised p-6 transition-shadow hover:shadow-md sm:p-7">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-phosphor">
          <Icon name={service.icon} />
        </span>
        <span className="font-mono text-xs font-bold text-steel-400">{service.n}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-ink-950">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-700">{service.blurb}</p>

      {!compact && (
        <ul className="mt-4 space-y-1.5 text-sm text-ink-800">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <Icon name="check" className="mt-0.5 h-4 w-4 text-alert" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={serviceHref(service)}
        className="mt-6 inline-flex items-center gap-2 pt-1 font-mono text-xs font-bold uppercase tracking-wider text-alert underline decoration-alert/50 underline-offset-4 hover:text-ink-950 after:absolute after:inset-0 after:content-['']"
      >
        View Service
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </article>
  );
}
