/**
 * Topic visuals.
 *
 * Every service and every article needs a visual that actually explains its
 * subject — not one photograph reused everywhere. These are drawn rather than
 * photographed, deliberately: each diagram is a picture of the *mechanism* of
 * the channel (crawl → index → answer, audience → creative → test, and so on),
 * so the reader understands the topic before reading a word.
 *
 * Drawn in one house style — fine iris strokes for structure, a single
 * phosphor element for the thing that matters — so the set reads as one
 * art-directed system while each diagram is individually specific.
 *
 * No robots, no glowing brains, no floating dashboards.
 */

/**
 * Caption labels are the one part of a diagram that does not survive a
 * background flip: `--color-steel-500` is tuned for paper and all but vanishes
 * on ink. Rather than thread a `tone` prop through every figure, the label
 * reads a CSS custom property that the wrapper sets from the `tone` prop. A
 * custom property is used deliberately here — this module is rendered by server
 * components, where React context is not available.
 */

export type TopicKey =
  | "ai"
  | "seo"
  | "local-seo"
  | "google-ads"
  | "meta-ads"
  | "performance"
  | "aeo"
  | "geo"
  | "content"
  | "analytics"
  | "social"
  | "website"
  | "compare";

type Props = {
  topic: TopicKey;
  /** Describes the diagram for screen readers, in plain language. */
  label: string;
  className?: string;
  /** `light` on porcelain surfaces, `dark` on ink surfaces. */
  tone?: "light" | "dark";
};

const structure = {
  fill: "none",
  stroke: "var(--color-iris-soft)",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke",
} as const;

const ghost = { ...structure, opacity: 0.4 } as const;

const accent = {
  fill: "none",
  stroke: "var(--color-phosphor)",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  vectorEffect: "non-scaling-stroke",
} as const;

/** Small caption block used under most diagrams. */
function Tag({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="var(--topic-label, var(--color-steel-500))"
      style={{
        font: "500 9px var(--font-plex-mono), monospace",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {text}
    </text>
  );
}

/** SEO — crawl, then index, then surface. */
function Seo() {
  return (
    <>
      <path
        {...ghost}
        strokeDasharray="3 5"
        d="M40 34 C40 96 92 96 92 154 C92 200 150 186 178 186"
      />
      <circle {...accent} cx="40" cy="34" r="5" />
      <Tag x={26} y={22} text="Crawl" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            {...structure}
            x={178 + i * 44}
            y={54 + i * 18}
            width="34"
            height="8"
            rx="1"
          />
          <rect
            {...ghost}
            x={178 + i * 44}
            y={70 + i * 18}
            width="22"
            height="5"
            rx="1"
          />
        </g>
      ))}
      <Tag x={176} y={44} text="Index" />

      {/* The one result that earns the click. */}
      <rect {...accent} x="150" y="166" width="160" height="40" rx="2" />
      <rect {...accent} x="158" y="176" width="72" height="6" rx="1" />
      <rect {...ghost} x="158" y="188" width="112" height="4" rx="1" />
      <Tag x={150} y={158} text="Rank" />
    </>
  );
}

/** AEO — a question, answered directly above the list of links. */
function Aeo() {
  return (
    <>
      <Tag x={30} y={30} text="Question" />
      <rect {...structure} x="30" y="40" width="180" height="26" rx="2" />
      <rect {...ghost} x="40" y="50" width="120" height="6" rx="1" />
      <circle {...ghost} cx="222" cy="53" r="7" />

      {/* The answer box — what AEO is actually competing for. */}
      <rect {...accent} x="30" y="86" width="260" height="60" rx="2" />
      <rect {...accent} x="42" y="100" width="18" height="4" rx="1" />
      <rect {...ghost} x="42" y="114" width="220" height="4" rx="1" />
      <rect {...ghost} x="42" y="126" width="170" height="4" rx="1" />
      <Tag x={30} y={82} text="Direct answer" />

      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          {...ghost}
          x="46"
          y={170 + i * 20}
          width={230 - i * 46}
          height="7"
          rx="1"
        />
      ))}
      <Tag x={30} y={166} text="Context" />
    </>
  );
}

/** GEO — scattered entities converging into one synthesised answer. */
function Geo() {
  const sources = [
    [30, 40],
    [30, 78],
    [30, 116],
    [30, 154],
  ];

  return (
    <>
      {sources.map(([x, y], i) => (
        <g key={i}>
          <rect {...structure} x={x} y={y} width="74" height="22" rx="2" />
          <rect {...ghost} x={x + 8} y={y + 9} width="44" height="4" rx="1" />
          <path {...ghost} d={`M${x + 74} ${y + 11} C140 ${y + 11}, 168 108, 194 108`} />
        </g>
      ))}

      {/* The synthesis point. */}
      <circle {...accent} cx="214" cy="108" r="28" />
      <circle {...accent} cx="214" cy="108" r="8" />
      <Tag x={30} y={30} text="Entities" />

      <path {...accent} d="M242 108 L282 108" />
      <path {...accent} d="M274 102 L284 108 L274 114" />
      <rect {...accent} x="288" y="90" width="26" height="36" rx="2" />
      <Tag x={258} y={148} text="AI answer" />
    </>
  );
}

/** Google Ads — intent, an ad that answers it, and the page it lands on. */
function GoogleAds() {
  return (
    <>
      <Tag x={30} y={30} text="Intent" />
      <rect {...structure} x="30" y="40" width="200" height="30" rx="15" />
      <rect {...ghost} x="46" y="52" width="96" height="6" rx="1" />
      <circle {...ghost} cx="212" cy="55" r="6" />
      <path {...accent} d="M38 96 L300 96" />

      {/* The paid result, set apart from the organic ones beneath it. */}
      <rect {...accent} x="30" y="106" width="270" height="30" rx="2" />
      <rect {...accent} x="40" y="118" width="84" height="6" rx="1" />
      <rect {...ghost} x="134" y="118" width="120" height="6" rx="1" />
      <rect {...ghost} x="40" y="128" width="180" height="3" rx="1" />
      <Tag x={30} y={102} text="Ad" />

      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          {...ghost}
          x="30"
          y={154 + i * 18}
          width={268 - i * 54}
          height="7"
          rx="1"
        />
      ))}

      <rect {...accent} x="30" y="216" width="270" height="24" rx="2" />
      <Tag x={40} y={232} text="Landing page → conversion" />
    </>
  );
}

/** Meta Ads — audience narrowed by creative testing. */
function MetaAds() {
  return (
    <>
      <circle {...ghost} cx="70" cy="110" r="52" />
      <circle {...ghost} cx="112" cy="110" r="52" />
      <circle {...structure} cx="91" cy="110" r="52" />
      <Tag x={40} y={30} text="Audience" />

      <path {...accent} d="M150 110 L192 110" />
      <path {...accent} d="M184 104 L194 110 L184 116" />

      <rect {...accent} x="200" y="54" width="120" height="34" rx="2" />
      <rect {...ghost} x="200" y="96" width="120" height="34" rx="2" />
      <rect {...ghost} x="200" y="138" width="120" height="34" rx="2" />
      <Tag x={200} y={46} text="Creative test" />

      <path {...accent} d="M260 185 L260 206" />
      <circle {...accent} cx="260" cy="216" r="9" />
      <Tag x={196} y={200} text="Optimize" />
    </>
  );
}

/** Local SEO — a map grid with one business surfaced on it. */
function LocalSeo() {
  return (
    <>
      <path {...ghost} d="M40 60 L280 60 M40 108 L280 108 M40 156 L280 156" />
      <path {...ghost} d="M96 40 L96 196 M164 40 L164 196 M232 40 L232 196" />
      <Tag x={30} y={30} text="Local search" />

      {/* The surfaced pin. */}
      <path
        {...accent}
        d="M160 96 C160 96 140 122 140 138 a20 20 0 0 0 40 0 c0-16-20-42-20-42Z"
      />
      <circle {...accent} cx="160" cy="138" r="7" />
      <circle {...accent} cx="160" cy="138" r="24" opacity="0.35" />

      <rect {...structure} x="30" y="212" width="72" height="22" rx="2" />
      <rect {...accent} x="122" y="212" width="72" height="22" rx="2" />
      <rect {...structure} x="214" y="212" width="72" height="22" rx="2" />
      <path {...ghost} d="M104 223 L118 223" />
      <path {...ghost} d="M196 223 L210 223" />
      <Tag x={30} y={208} text="Discover" />
      <Tag x={122} y={208} text="Business" />
      <Tag x={214} y={208} text="Customer" />
    </>
  );
}

/** Performance — measurement read into a decision, then fed back. */
function Performance() {
  const points = "34,168 78,140 122,148 166,104 210,116 254,66 296,44";

  return (
    <>
      <polyline {...ghost} points={points} opacity="0.45" />
      <polyline {...accent} points={points} />

      {points.split(" ").map((p, i) => {
        const [x, y] = p.split(",");
        return <circle key={i} {...structure} cx={x} cy={y} r="3" />;
      })}

      {/* The loop closing back to the start. */}
      <path {...accent} strokeDasharray="3 5" d="M300 44 C322 44 322 168 300 168" />
      <path {...accent} d="M304 160 L300 170 L308 166" />

      <Tag x={30} y={30} text="Data" />
      <Tag x={112} y={196} text="Insight" />
      <Tag x={214} y={196} text="Decision" />
      <Tag x={244} y={30} text="Growth" />

      {/* Axes, so the curve reads as a measurement rather than decoration. */}
      <path {...ghost} d="M34 200 L34 40" />
      <path {...ghost} d="M30 202 L300 202" />
    </>
  );
}

/** AI marketing — many inputs reduced to one prioritised decision. */
function Ai() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect {...ghost} x="28" y={36 + i * 32} width="86" height="20" rx="2" />
          <path {...ghost} d={`M114 ${46 + i * 32} C160 ${46 + i * 32}, 168 108, 198 108`} />
        </g>
      ))}
      <Tag x={28} y={26} text="Signals" />

      <circle {...accent} cx="216" cy="108" r="30" />
      <circle {...accent} cx="216" cy="108" r="9" />
      <Tag x={186} y={26} text="Synthesis" />

      <path {...accent} d="M246 108 L282 108" />
      <path {...accent} d="M274 102 L284 108 L274 114" />

      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          {...(i === 0 ? accent : ghost)}
          x="290"
          y={62 + i * 34}
          width="34"
          height="18"
          rx="2"
        />
      ))}
      <Tag x={250} y={200} text="Prioritised action" />
    </>
  );
}

/** Content — many drafts, one edited and published. */
function Content() {
  return (
    <>
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2].map((row) => (
          <rect
            key={`${col}-${row}`}
            {...ghost}
            x={28 + col * 52}
            y={40 + row * 34}
            width="42"
            height="24"
            rx="2"
          />
        )),
      )}
      <Tag x={28} y={30} text="Drafts" />

      <path {...accent} d="M240 90 L272 90" />
      <path {...accent} d="M264 84 L274 90 L264 96" />

      <rect {...accent} x="280" y="48" width="42" height="88" rx="2" />
      <rect {...accent} x="288" y="62" width="26" height="5" rx="1" />
      <rect {...ghost} x="288" y="76" width="26" height="3" rx="1" />
      <rect {...ghost} x="288" y="86" width="20" height="3" rx="1" />
      <Tag x={252} y={40} text="Edited" />

      <Tag x={28} y={180} text="Reviewed" />
      <Tag x={252} y={180} text="Published" />
    </>
  );
}

/** Analytics — two measurement sources answering one question. */
function Analytics() {
  return (
    <>
      <rect {...structure} x="30" y="44" width="110" height="60" rx="2" />
      <polyline {...ghost} points="42,92 62,76 82,84 102,62 128,54" />
      <Tag x={30} y={36} text="Behaviour" />

      <rect {...structure} x="30" y="140" width="110" height="60" rx="2" />
      <path {...ghost} d="M42 186 L62 178 L82 180 L102 166 L128 156" />
      <Tag x={30} y={132} text="Search" />

      <path {...ghost} d="M144 74 C186 74 186 122 216 122" />
      <path {...ghost} d="M144 170 C186 170 186 122 216 122" />

      <rect {...accent} x="220" y="94" width="96" height="56" rx="2" />
      <rect {...accent} x="232" y="110" width="42" height="6" rx="1" />
      <rect {...ghost} x="232" y="126" width="64" height="4" rx="1" />
      <Tag x={220} y={86} text="One answer" />

      <path {...accent} d="M268 154 L268 196" />
      <path {...accent} d="M262 188 L268 198 L274 188" />
      <Tag x={212} y={216} text="Decision" />
    </>
  );
}

/** Social — one message adapted per channel. */
function Social() {
  return (
    <>
      <rect {...accent} x="30" y="70" width="96" height="72" rx="2" />
      <rect {...accent} x="42" y="88" width="56" height="5" rx="1" />
      <rect {...ghost} x="42" y="102" width="72" height="3" rx="1" />
      <rect {...ghost} x="42" y="112" width="48" height="3" rx="1" />
      <Tag x={30} y={62} text="Message" />

      <path {...accent} d="M130 106 L172 106" />
      <path {...accent} d="M164 100 L174 106 L164 112" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            {...(i === 0 ? accent : ghost)}
            x="182"
            y={40 + i * 56}
            width="130"
            height="42"
            rx="2"
          />
          <rect
            {...ghost}
            x="194"
            y={56 + i * 56}
            width={i === 0 ? 70 : 50}
            height="4"
            rx="1"
          />
        </g>
      ))}
      <Tag x={182} y={32} text="Per channel" />
    </>
  );
}

/** Website — a page that has to earn the visit, then load fast. */
function Website() {
  return (
    <>
      <rect {...structure} x="30" y="34" width="280" height="150" rx="2" />
      <rect {...ghost} x="30" y="34" width="280" height="18" rx="2" />

      <rect {...accent} x="48" y="68" width="150" height="8" rx="1" />
      <rect {...ghost} x="48" y="86" width="210" height="5" rx="1" />
      <rect {...ghost} x="48" y="98" width="170" height="5" rx="1" />

      <rect {...accent} x="48" y="120" width="72" height="26" rx="2" />
      <rect {...ghost} x="132" y="120" width="72" height="26" rx="2" />

      {/* Load time decides whether any of it is ever seen. */}
      <path {...accent} d="M30 206 L110 206" />
      <rect {...ghost} x="110" y="200" width="200" height="12" rx="6" />
      <rect {...accent} x="110" y="200" width="152" height="12" rx="6" />
      <Tag x={30} y={228} text="Load" />
    </>
  );
}

/**
 * Channel comparison — two distinct routes, each with its own logic, resolving
 * into the same destination. Used for "Google Ads vs Meta Ads", where the
 * point is precisely that the two are not interchangeable.
 */
function Compare() {
  return (
    <>
      {/* Upper route: someone already searching. */}
      <rect {...structure} x="28" y="40" width="96" height="30" rx="15" />
      <rect {...ghost} x="40" y="52" width="52" height="5" rx="1" />
      <path {...accent} d="M128 55 L176 55" />
      <path {...accent} d="M168 49 L178 55 L168 61" />
      <Tag x={28} y={32} text="Search intent" />

      {/* Lower route: someone interrupted while scrolling. */}
      <rect {...structure} x="28" y="150" width="96" height="42" rx="2" />
      <rect {...ghost} x="40" y="162" width="52" height="4" rx="1" />
      <rect {...ghost} x="40" y="174" width="40" height="4" rx="1" />
      <path {...accent} d="M128 171 L176 171" />
      <path {...accent} d="M168 165 L178 171 L168 177" />
      <Tag x={28} y={142} text="Discovery" />

      {/* Both arrive at the same decision, which is the article's argument. */}
      <path {...ghost} d="M186 55 C232 55 216 118 250 118" />
      <path {...ghost} d="M186 171 C232 171 216 118 250 118" />
      <rect {...accent} x="252" y="96" width="80" height="44" rx="2" />
      <rect {...accent} x="264" y="112" width="42" height="5" rx="1" />
      <rect {...ghost} x="264" y="124" width="48" height="3" rx="1" />
      <Tag x={244} y={86} text="Right channel" />
    </>
  );
}

const diagrams: Record<TopicKey, () => React.JSX.Element> = {
  ai: Ai,
  seo: Seo,
  "local-seo": LocalSeo,
  "google-ads": GoogleAds,
  "meta-ads": MetaAds,
  performance: Performance,
  aeo: Aeo,
  geo: Geo,
  content: Content,
  analytics: Analytics,
  social: Social,
  website: Website,
  compare: Compare,
};

export function TopicVisual({ topic, label, className, tone = "light" }: Props) {
  const Diagram = diagrams[topic];

  return (
    <svg
      viewBox="0 0 340 250"
      className={className}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
      style={
        tone === "dark"
          ? ({ "--topic-label": "var(--color-steel-400)" } as React.CSSProperties)
          : undefined
      }
    >
      <Diagram />
    </svg>
  );
}



