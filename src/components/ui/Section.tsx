import { cn } from "@/lib/utils";

/**
 * Every section is one of two grounds. The alternation is the site's
 * structural argument: `room` (violet-ink) is where measurement happens,
 * `daylight` (porcelain) is where the human case is made.
 */
export function Section({
  id,
  ground = "daylight",
  children,
  className,
  labelledBy,
}: {
  id?: string;
  ground?: "daylight" | "room" | "room-deep";
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const grounds = {
    daylight: "bg-porcelain text-ink-800",
    room: "bg-ink-800 text-porcelain grain",
    "room-deep": "bg-ink-900 text-porcelain grain",
  } as const;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        // scroll-mt clears the fixed header when jumping to an anchor.
        "relative isolate scroll-mt-28 py-section",
        grounds[ground],
        className,
      )}
    >
      {children}
    </section>
  );
}
