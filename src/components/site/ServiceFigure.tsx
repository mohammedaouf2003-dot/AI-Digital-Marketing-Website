/**
 * One abstract figure per service channel, drawn in the same fine-line
 * language: iris strokes for structure, a single phosphor element for the
 * thing that actually matters in that channel. No stock illustration, no
 * robots — each figure is a diagram of the channel's idea.
 */

const stroke = {
  fill: "none",
  stroke: "var(--color-iris-soft)",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke",
} as const;

const faint = { ...stroke, opacity: 0.35 } as const;
const signal = {
  fill: "none",
  stroke: "var(--color-phosphor)",
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke",
} as const;

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function ServiceFigure({ code }: { code: string }) {
  switch (code) {
    // Search demand found, then climbed.
    case "SEO":
      return (
        <Frame label="Diagram: search results rising in rank position">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} {...faint} x1="40" y1={190 - i * 34} x2="280" y2={190 - i * 34} />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              {...stroke}
              x={60 + i * 56}
              y={190 - (i + 1) * 30}
              width="40"
              height={(i + 1) * 30}
            />
          ))}
          <circle {...signal} cx="248" cy="62" r="18" />
          <line {...signal} x1="261" y1="75" x2="276" y2="90" />
        </Frame>
      );

    // Attention that connects into an audience.
    case "SMM":
      return (
        <Frame label="Diagram: a network of connected audience nodes">
          {[
            [160, 110],
            [80, 62],
            [242, 58],
            [64, 158],
            [252, 152],
            [160, 34],
            [160, 186],
          ].map(([cx, cy], i) => (
            <circle key={i} {...(i === 0 ? signal : stroke)} cx={cx} cy={cy} r={i === 0 ? 14 : 8} />
          ))}
          {[
            [80, 62],
            [242, 58],
            [64, 158],
            [252, 152],
            [160, 34],
            [160, 186],
          ].map(([x, y], i) => (
            <line key={i} {...faint} x1="160" y1="110" x2={x} y2={y} />
          ))}
          <circle {...faint} cx="160" cy="110" r="62" />
        </Frame>
      );

    // Volume produced fast, one piece chosen deliberately.
    case "AIC":
      return (
        <Frame label="Diagram: content pieces generated, with one selected">
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <rect
                key={`${col}-${row}`}
                {...(col === 2 && row === 1 ? signal : faint)}
                x={54 + col * 56}
                y={44 + row * 36}
                width="44"
                height="24"
              />
            )),
          )}
          <line {...signal} x1="166" y1="104" x2="166" y2="168" strokeDasharray="3 4" />
          <line {...signal} x1="140" y1="168" x2="192" y2="168" />
        </Frame>
      );

    // Overlapping audiences, narrowed to the one worth paying for.
    case "META":
      return (
        <Frame label="Diagram: overlapping audience segments narrowed to a target">
          <circle {...stroke} cx="126" cy="110" r="62" />
          <circle {...stroke} cx="194" cy="110" r="62" />
          <circle {...faint} cx="160" cy="72" r="62" />
          <circle {...signal} cx="160" cy="104" r="16" />
          <circle {...signal} cx="160" cy="104" r="3.5" />
        </Frame>
      );

    // A query arriving at the exact moment of intent.
    case "GADS":
      return (
        <Frame label="Diagram: a search query arriving at a target">
          <line {...faint} x1="28" y1="110" x2="230" y2="110" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} {...faint} x1={52 + i * 34} y1="98" x2={52 + i * 34} y2="122" />
          ))}
          <circle {...stroke} cx="248" cy="110" r="46" />
          <circle {...stroke} cx="248" cy="110" r="28" />
          <circle {...signal} cx="248" cy="110" r="10" />
          <line {...signal} x1="150" y1="110" x2="234" y2="110" />
          <path {...signal} d="M226 102 L236 110 L226 118" />
        </Frame>
      );

    // Many possible routes, one plan chosen and committed to.
    case "STRAT":
      return (
        <Frame label="Diagram: one chosen route through a field of options">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => (
              <circle
                key={`${row}-${col}`}
                {...faint}
                cx={48 + col * 45}
                cy={44 + row * 33}
                r="2.5"
              />
            )),
          )}
          <path
            {...signal}
            d="M48 176 L93 176 L93 143 L183 143 L183 110 L228 110 L228 77 L273 77 L273 44"
          />
          <circle {...signal} cx="48" cy="176" r="4" />
          <circle {...signal} cx="273" cy="44" r="6" />
        </Frame>
      );

    default:
      return null;
  }
}
