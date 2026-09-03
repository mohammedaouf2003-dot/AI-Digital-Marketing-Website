import { signalChain } from "@/lib/content";

/**
 * The site's signature element.
 *
 * A five-stage readout of the chain a business actually moves through:
 * Audience → Strategy → AI → Campaigns → Growth. A sweep passes across the
 * bands; as it arrives, each stage's bars rise and its label lights.
 * Amplitude grows along the chain, so the shape itself says "growth".
 *
 * Deliberately built as a pure-CSS-animated SVG: no canvas, no animation
 * library, no client JavaScript, and a defined static state under
 * `prefers-reduced-motion` (see the `.sig-*` rules in globals.css).
 */

// Per-stage bar amplitudes (0–1). Amplitude climbs along the chain.
const AMPLITUDES: readonly number[][] = [
  [0.24, 0.34, 0.28, 0.4, 0.31, 0.37],
  [0.36, 0.3, 0.47, 0.4, 0.52, 0.44],
  [0.5, 0.62, 0.44, 0.68, 0.57, 0.72],
  [0.66, 0.78, 0.6, 0.84, 0.73, 0.9],
  [0.82, 0.94, 0.76, 1, 0.88, 0.97],
];

const BAND_W = 100;
const BAND_GAP = 12;
const BAR_W = 8;
const BAR_GAP = 6;
const BAR_INSET = 11;
const BASELINE = 236;
const MAX_BAR_H = 168;
const CYCLE = 6.6; // seconds for one full sweep

export function SignalInstrument() {
  const bands = signalChain.map((stage, i) => ({
    ...stage,
    x: 6 + i * (BAND_W + BAND_GAP),
    bars: AMPLITUDES[i],
  }));

  const totalW = 6 * 2 + signalChain.length * BAND_W + (signalChain.length - 1) * BAND_GAP;

  return (
    <figure className="sig m-0">
      <svg
        viewBox={`0 0 ${totalW} 300`}
        className="h-auto w-full"
        role="img"
        aria-label="A readout of the five stages of the growth process: audience, strategy, AI, campaigns and growth, with signal strength increasing across the stages."
      >
        <defs>
          <linearGradient id="sig-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--color-iris)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-iris-soft)" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="sig-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-phosphor)" stopOpacity="0" />
            <stop offset="60%" stopColor="var(--color-phosphor)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--color-phosphor)" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Measurement gridlines — the instrument's frame of reference. */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.1">
          {[0, 1, 2, 3].map((i) => {
            const y = BASELINE - (MAX_BAR_H / 3) * i;
            return <line key={i} x1="6" y1={y} x2={totalW - 6} y2={y} />;
          })}
        </g>

        {/* Baseline, drawn solid: the one line the reading sits on. */}
        <line
          x1="6"
          y1={BASELINE}
          x2={totalW - 6}
          y2={BASELINE}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* The sweep. */}
        <g className="sig-sweep">
          <rect x="-64" y={BASELINE - MAX_BAR_H - 12} width="64" height={MAX_BAR_H + 12} fill="url(#sig-sweep)" />
          <line
            x1="0"
            y1={BASELINE - MAX_BAR_H - 12}
            x2="0"
            y2={BASELINE + 8}
            stroke="var(--color-phosphor)"
            strokeWidth="1.5"
          />
        </g>

        {bands.map((band, bandIndex) => (
          <g
            key={band.code}
            className="sig-band"
            style={{ "--band-delay": `${(bandIndex * CYCLE) / bands.length}s` } as React.CSSProperties}
          >
            {/* Bars */}
            {band.bars.map((amp, barIndex) => {
              const h = Math.max(4, amp * MAX_BAR_H);
              return (
                <rect
                  key={barIndex}
                  className="sig-bar"
                  x={band.x + BAR_INSET + barIndex * (BAR_W + BAR_GAP)}
                  y={BASELINE - h}
                  width={BAR_W}
                  height={h}
                  rx="1"
                  fill="url(#sig-bar)"
                  style={{ "--bar-delay": `${barIndex * 55}ms` } as React.CSSProperties}
                />
              );
            })}

            {/* Stage tick */}
            <line
              className="sig-tick"
              x1={band.x + BAND_W / 2}
              y1={BASELINE + 2}
              x2={band.x + BAND_W / 2}
              y2={BASELINE + 10}
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Stage labels */}
            <text
              className="sig-code"
              x={band.x + BAND_W / 2}
              y={BASELINE + 30}
              textAnchor="middle"
              fill="currentColor"
              fontSize="11"
              letterSpacing="1.6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {band.code}
            </text>
            <text
              className="sig-label"
              x={band.x + BAND_W / 2}
              y={BASELINE + 50}
              textAnchor="middle"
              fill="currentColor"
              fontSize="14"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {band.label}
            </text>
          </g>
        ))}
      </svg>

      <figcaption className="mt-5 border-t border-steel-500/20 pt-4 font-mono text-[0.6875rem] leading-relaxed tracking-[0.14em] text-steel-300 uppercase">
        Signal chain — strength grows as the work moves along it
      </figcaption>
    </figure>
  );
}
