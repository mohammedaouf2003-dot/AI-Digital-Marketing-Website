import { growthFlow } from "@/lib/catalog";

/** Data → AI insights → strategy → automation → acquisition → growth. */
export function GrowthFlow({ dark = false }: { dark?: boolean }) {
  return (
    <ol
      aria-label="AI-driven growth flow"
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0"
    >
      {growthFlow.map((step, i) => (
        <li key={step} className="relative flex lg:flex-col lg:items-stretch">
          <div
            className={
              "flex flex-1 items-center gap-3 rounded-xl border px-4 py-4 lg:mx-1.5 lg:flex-col lg:justify-center lg:gap-2 lg:text-center " +
              (dark
                ? "border-white/15 bg-white/5 text-porcelain"
                : "border-black/10 bg-porcelain-raised text-ink-950")
            }
          >
            <span className="font-mono text-xs font-bold text-phosphor">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-base font-bold">{step}</span>
          </div>
          {i < growthFlow.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-phosphor lg:block"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
