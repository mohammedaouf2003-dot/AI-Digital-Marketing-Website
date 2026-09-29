import Image from "next/image";
import { about } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-porcelain py-16 sm:py-24 border-b border-black/[0.08]"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Left: Gallery Photograph with Minimalist Framing */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm rounded-2xl bg-porcelain-raised p-3.5 shadow-xl border border-black/10">
              <div className="relative aspect-[1121/1403] overflow-hidden rounded-xl bg-ink-900">
                <Image
                  src="/images/mohammed-aouf-strategy-desk.jpg"
                  alt="Mohammed Aouf at his desk with a laptop and digital marketing books, planning a campaign"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              {/* Verified Editorial Fact Tag */}
              <div className="mt-3 px-1.5 py-1 font-mono text-xs text-steel-700 flex justify-between items-center">
                <span>Mohammed Aouf</span>
                <span className="text-alert font-bold">Ambur, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div>
            <Eyebrow tone="dark">{about.eyebrow}</Eyebrow>
            <h2
              id="about-heading"
              className="mt-4 font-display text-display-xl font-bold tracking-tight text-ink-950"
            >
              Meet Mohammed Aouf
            </h2>
            <p className="mt-2 font-mono text-xs tracking-wider text-alert uppercase font-bold">
              {about.subheading}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-700">
              <p>{about.shortBio}</p>
              <p>
                AI supports research, content and reporting. Strategy, judgement and accountability
                stay human, with honest reporting and no inflated promises.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="font-mono text-xs tracking-wider text-steel-400 uppercase mb-3">
                Core Skill Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {about.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-black/10 bg-porcelain-raised px-3.5 py-1 text-xs font-mono text-ink-900"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/about-mohammed-aouf" size="lg" variant="primary" arrow>
                About Mohammed
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-dark" size="lg">
                Book a Strategy Call
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
