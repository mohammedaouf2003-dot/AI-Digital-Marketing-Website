import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { GrowthFocus } from "@/components/site/GrowthFocus";
import { Services } from "@/components/site/Services";
import { WhyWorkWithMe } from "@/components/site/WhyWorkWithMe";
import { BusinessProblems } from "@/components/site/BusinessProblems";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

/**
 * Section order follows the argument the page is making:
 * problem → focus → what I do → how I think → what I can solve for you →
 * how the work runs → who I am → how I stay accountable → let's talk.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GrowthFocus />
        <Services />
        <WhyWorkWithMe />
        <BusinessProblems />
        <Process />
        <About />
        <Trust />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
