import Image from "next/image";
import { about, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * The portrait sits in a squared, offset frame with a monospace caption
 * plate — deliberately not a circular avatar. The frame is sized and
 * positioned independently of the image itself, so dropping in the real
 * photograph is a one-line change and needs no redesign.
 */
export function About() {
  const { photo } = about;

  return (
    <Section id="about" ground="room-deep" labelledBy="about-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          {/* ---- Portrait ---- */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              {/* Offset rule frame — the plate the portrait sits against. */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-full w-full border border-phosphor/30"
              />

              <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-700">
                {photo.placeholder ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-steel-500/25 px-6 text-center">
                    <span className="font-mono text-[0.625rem] tracking-[0.18em] text-phosphor uppercase">
                      Photo pending
                    </span>
                    <p className="font-mono text-[0.6875rem] leading-relaxed text-steel-300">
                      Drop the portrait at
                      <br />
                      <span className="text-porcelain">public{photo.src}</span>
                      <br />
                      and set{" "}
                      <span className="text-porcelain">placeholder: false</span>
                    </p>
                  </div>
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 26rem"
                    className="object-cover"
                    priority={false}
                  />
                )}
              </div>

              {/* Caption plate */}
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-steel-500/25 pt-3">
                <p className="font-display text-base font-semibold text-porcelain">
                  {site.name}
                </p>
                <p className="font-mono text-[0.625rem] tracking-[0.16em] text-steel-300 uppercase">
                  Freelance
                </p>
              </div>
              <p className="mt-1 font-mono text-[0.6875rem] leading-relaxed tracking-[0.1em] text-steel-300 uppercase">
                {site.role}
              </p>
            </div>
          </Reveal>

          {/* ---- The writing ---- */}
          <div>
            <Reveal>
              <Eyebrow tone="light">{about.eyebrow}</Eyebrow>
              <h2
                id="about-heading"
                className="mt-6 font-display text-display-lg font-semibold"
              >
                {about.heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {about.body.map((paragraph, i) => (
                <Reveal
                  as="p"
                  key={i}
                  delay={i * 50}
                  className={
                    i === 0
                      ? "text-lead text-porcelain"
                      : "text-[1.0625rem] leading-relaxed text-steel-300"
                  }
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 border-l border-phosphor/45 pl-6">
              <p className="font-display text-display-sm font-semibold text-porcelain">
                &ldquo;Marketing should answer a business question, not just
                fill a content calendar.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
