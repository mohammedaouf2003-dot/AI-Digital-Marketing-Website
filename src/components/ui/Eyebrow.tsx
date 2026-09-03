import { cn } from "@/lib/utils";

/**
 * Section marker. The three bars are the site's recurring motif — a small
 * echo of the hero signal instrument — so section labels read as readouts
 * rather than decoration.
 */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-label uppercase",
        tone === "dark" ? "text-steel-500" : "text-steel-300",
        className,
      )}
    >
      <span aria-hidden="true" className="flex items-end gap-[3px]">
        <span className="block w-[3px] bg-phosphor" style={{ height: 5 }} />
        <span className="block w-[3px] bg-phosphor" style={{ height: 9 }} />
        <span className="block w-[3px] bg-phosphor/45" style={{ height: 6 }} />
      </span>
      {children}
    </p>
  );
}
