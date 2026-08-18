import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cursor } from "@/components/ui/Cursor";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Expertise } from "@/sections/Expertise";
import { Projects } from "@/sections/Projects";
import { Experience, Education } from "@/sections/Journey";
import { Services, Process } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
import { projects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function App() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  // Lenis smooth scroll — skipped for reduced motion; lighter on mobile
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // Keep anchor navigation working with Lenis
    const onClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -70 });
    };
    document.addEventListener("click", onClick);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reduced, isMobile]);

  return (
    <div className="bg-noise relative min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects projects={projects} />
        <Experience />
        <Education />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
