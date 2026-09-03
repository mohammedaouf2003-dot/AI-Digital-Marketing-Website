import { contact, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "./EnquiryForm";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2
              id="contact-heading"
              className="mt-6 font-display text-display-lg font-semibold text-ink-900"
            >
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-lead text-steel-700">
              {contact.lead}
            </p>

            <dl className="mt-12 space-y-6 border-t border-ink-800/12 pt-8">
              <div>
                <dt className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-500 uppercase">
                  Who you&apos;re talking to
                </dt>
                <dd className="mt-2">
                  <p className="font-display text-display-sm font-semibold text-ink-900">
                    {site.name}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-steel-700">
                    {site.role}
                  </p>
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[0.6875rem] tracking-[0.18em] text-steel-500 uppercase">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-2 text-[1.0625rem] font-medium text-ink-900 underline decoration-phosphor decoration-2 underline-offset-4 transition-colors duration-fast hover:text-alert"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
