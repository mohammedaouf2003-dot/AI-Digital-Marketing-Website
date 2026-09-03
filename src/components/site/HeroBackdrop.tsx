/**
 * The hero's background visual: an abstract audience network resolving into
 * a rising growth line, rendered as hand-built SVG rather than a stock or
 * generated photograph.
 *
 * Three reasons this beats a photo here: it costs nothing to load (no image
 * request, no LCP risk), it never risks presenting a fabricated person as
 * Mohammed or a client, and it can actually depict the idea — audience data
 * resolving into a growth curve — in a way a stock photo of "a marketer at
 * a laptop" cannot.
 *
 * Deliberately weighted to the right two-thirds of the frame: the left
 * third, where the headline sits, stays clear so text contrast never
 * depends on where the composition happens to fall.
 */

const NODES: readonly [number, number, number][] = [
  // [x%, y%, radius] — a loose field, denser toward the growth line.
  [58, 18, 2.2],
  [66, 30, 1.6],
  [74, 14, 1.8],
  [82, 26, 2.4],
  [90, 12, 1.6],
  [62, 46, 1.8],
  [70, 58, 2.2],
  [78, 44, 1.6],
  [86, 52, 2],
  [94, 34, 1.8],
  [60, 72, 1.6],
  [68, 82, 2],
  [76, 68, 1.8],
  [84, 78, 2.4],
  [92, 64, 1.6],
];

const LINKS: readonly [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [5, 2], [6, 10], [10, 11], [11, 12], [12, 13], [13, 14], [8, 13], [3, 8],
];

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Ambient glows: sapphire behind the network, gold near the growth
          line's peak — the same two accent colours the rest of the page
          uses, just at low opacity here. */}
      <div
        className="absolute top-[-12%] right-[-8%] h-[46rem] w-[46rem] rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-iris) 65%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[6%] right-[6%] h-[22rem] w-[22rem] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-phosphor) 55%, transparent), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMaxYMid slice"
        className="hero-backdrop-svg h-full w-full"
      >
        <defs>
          <linearGradient id="hb-growth" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-iris-soft)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-phosphor)" stopOpacity="0.95" />
          </linearGradient>
          <filter id="hb-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The link lattice, faint. */}
        <g stroke="var(--color-iris-soft)" strokeWidth="0.12" opacity="0.35">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
            />
          ))}
        </g>

        {/* The nodes — a couple pulse gently to read as "live" data. */}
        <g fill="var(--color-iris-soft)">
          {NODES.map(([x, y, r], i) => (
            <circle
              key={i}
              className={i % 4 === 0 ? "hb-node-pulse" : undefined}
              cx={x}
              cy={y}
              r={r * 0.32}
              style={{ animationDelay: `${(i % 5) * 0.6}s` }}
            />
          ))}
        </g>

        {/* The growth line: the composition's single deliberate accent,
            rising left to right through the node field. */}
        <path
          d="M 54 84 C 66 78, 70 62, 78 52 C 84 44, 82 30, 90 16"
          fill="none"
          stroke="url(#hb-growth)"
          strokeWidth="0.55"
          strokeLinecap="round"
          filter="url(#hb-glow)"
          className="hb-growth-line"
        />
        <circle cx="90" cy="16" r="1.1" fill="var(--color-phosphor)" filter="url(#hb-glow)" />
      </svg>

      {/* A left-to-right scrim keeps the headline column clear regardless
          of viewport width, and darkens the whole thing back toward the
          section's own ink ground so it reads as depth, not decoration. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-ink-800) 0%, color-mix(in oklab, var(--color-ink-800) 55%, transparent) 42%, transparent 68%)",
        }}
      />
    </div>
  );
}
