import { faqs } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FAQSection() {
  return (
    <section id="faq" className="bg-porcelain py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mb-10">
          <Eyebrow tone="dark">Direct Knowledge</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-bold tracking-tight text-ink-950">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lead text-steel-700">
            Straight answers on AI marketing, SEO and how we would work together.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-black/10 bg-porcelain-raised p-6 sm:p-8 shadow-xs"
            >
              <span className="font-mono text-xs font-bold text-alert uppercase tracking-wider block mb-2">
                {faq.category}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                {faq.q}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-700">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
