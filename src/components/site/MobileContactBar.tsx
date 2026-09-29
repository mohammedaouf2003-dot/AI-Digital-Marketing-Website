"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/**
 * Mobile contact bar.
 *
 * On a phone the visitor is often deciding between calling and typing, and
 * both should be one tap away. It stays hidden until the page has been read
 * far enough that the hero CTA is no longer on screen, so it never competes
 * with the primary call to action.
 *
 * `env(safe-area-inset-bottom)` keeps it clear of the iOS home indicator, and
 * the body gets matching bottom padding so the bar can never sit on top of
 * content at the end of a page.
 */
export function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Roughly one viewport down: past the hero, before the footer.
      const past = window.scrollY > window.innerHeight * 0.85;
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.offsetHeight - 220;
      setVisible(past && !nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const item =
    "flex flex-1 items-center justify-center gap-1.5 py-3 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em] transition-colors";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 xl:hidden">
      <div
        className="flex border-t border-white/10 bg-ink-950/97 backdrop-blur-md"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-porcelain hover:bg-ink-800`}
        >
          WhatsApp
        </a>
        <a href={site.tel} className={`${item} border-x border-white/10 text-porcelain hover:bg-ink-800`}>
          Call
        </a>
        <a
          href="/contact"
          className={`${item} bg-phosphor text-ink-900 hover:bg-phosphor-deep`}
        >
          Let&apos;s Talk
        </a>
      </div>
    </div>
  );
}
