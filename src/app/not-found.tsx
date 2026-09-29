import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-porcelain pt-36 pb-28 flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-alert/30 bg-alert/10 px-3.5 py-1 font-mono text-xs text-alert uppercase">
              404 · Page Not Found
            </div>

            <h1 className="mt-6 font-display text-display-lg font-bold text-ink-900">
              Looks Like This Page Took a Different Route
            </h1>

            <p className="mt-4 text-lead text-steel-700">
              The page or resource you are looking for may have moved, been renamed, or does not exist. Let&apos;s get you back on track.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink href="/" size="lg" variant="primary" arrow>
                Back to Home
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="outline-dark">
                Explore Services
              </ButtonLink>
              <ButtonLink href="/digital-marketing-ambur" size="lg" variant="outline-dark">
                Ambur Local SEO Hub
              </ButtonLink>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
