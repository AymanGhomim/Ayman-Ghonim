import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroLaptop } from "@/components/hero/HeroLaptop";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero-premium relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="hero-backdrop" aria-hidden />
      <div className="hero-laptop-glow" aria-hidden />

      <div className="container-x relative z-10 grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[0.94fr_1.06fr] lg:gap-6 lg:pb-16 lg:pt-24">
        <HeroContent />
        <HeroLaptop />
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="hero-scroll-hint"
        aria-label="Scroll to the about section"
      >
        <span>Scroll</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.span>
      </motion.a>
    </section>
  );
}
