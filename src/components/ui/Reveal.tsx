"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * One tiny IntersectionObserver per revealed block, instead of a motion
 * library, because entrance reveals are the only scroll animation the page
 * needs and this ships no extra JavaScript to the client bundle.
 *
 * The revealed state is the CSS default (see globals.css), so with motion
 * disabled or JS unavailable the content is simply visible.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "article" | "header" | "p" | "h2";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion is handled entirely in CSS (globals.css forces every
    // `[data-reveal]` visible under that media query), so the observer can
    // simply keep running here without special-casing it — no setState
    // needs to happen synchronously inside this effect.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — polymorphic ref across the allowed tag union
      ref={ref}
      data-reveal={shown ? "in" : ""}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
