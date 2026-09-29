import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Selected Work & Growth Frameworks",
  description:
    "Practice projects and growth frameworks by Mohammed Aouf: local SEO, AI content and topical authority, and Google and Meta Ads funnels. Methods, not invented client results.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects & Frameworks", url: "/projects" },
  ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Header Banner */}
        <section className="border-b border-steel-500/20 bg-ink-900 py-16 text-porcelain sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 font-mono text-xs text-phosphor uppercase">
                Projects
              </div>
              <h1 className="mt-5 font-display text-display-xl font-bold tracking-tight text-porcelain">
                Selected Work &amp; Growth Frameworks
              </h1>
              <p className="mt-4 text-lead text-steel-300">
                Practice projects and frameworks that show how I approach local search, AI content and paid acquisition. They are shown as methods, not client results, and no figures are invented.
              </p>
            </div>
          </Container>
        </section>

        {/* Project Cards */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="space-y-12 max-w-4xl">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-2xl border border-steel-300/60 bg-porcelain-raised p-8 sm:p-10 shadow-xs"
                >
                  {/* Badge & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <span className="rounded bg-alert/10 border border-alert/25 px-2.5 py-1 font-bold text-alert uppercase">
                      {project.type}
                    </span>
                    <span className="text-steel-500">{project.tag}</span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink-900">
                    {project.title}
                  </h2>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-steel-300/50 bg-porcelain p-5">
                      <p className="font-mono text-xs font-bold text-steel-500 uppercase mb-2">
                        Objective
                      </p>
                      <p className="text-sm text-steel-700 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="rounded-xl border border-steel-300/50 bg-porcelain p-5">
                      <p className="font-mono text-xs font-bold text-steel-500 uppercase mb-2">
                        Strategy
                      </p>
                      <p className="text-sm text-steel-700 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="rounded-xl border border-steel-300/50 bg-porcelain p-5">
                      <p className="font-mono text-xs font-bold text-alert uppercase mb-2">
                        Execution
                      </p>
                      <p className="text-sm text-steel-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-steel-300/40">
                    <p className="font-mono text-xs font-bold text-ink-900 uppercase mb-3">
                      Outcome (design intent, not a client result):
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-3 font-mono text-xs text-ink-800">
                      {project.keyResults.map((res) => (
                        <li key={res} className="flex items-start gap-2 rounded bg-porcelain p-2.5 border border-steel-300/40">
                          <span className="text-alert font-bold">✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-16 text-porcelain">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-display-md font-bold text-porcelain">
                Have a Project You&apos;d Like to Discuss?
              </h2>
              <p className="mt-4 text-steel-300">
                Whether you need a local SEO audit, a Google Ads review or an end-to-end AI marketing strategy, let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" size="lg" variant="phosphor" arrow>
                  Book a Strategy Call
                </ButtonLink>
                <ButtonLink href="/services" size="lg" variant="outline-light">
                  Explore Services
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
