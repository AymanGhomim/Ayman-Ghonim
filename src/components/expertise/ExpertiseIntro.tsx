import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ExpertiseIntro() {
  const reducedMotion = useReducedMotion();

  const heading: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reducedMotion ? 0 : 0.11 },
    },
  };

  const line: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.01 : 0.72, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="mt-10 max-w-4xl sm:mt-12">
      <motion.h2
        className="font-display text-[clamp(2.65rem,5.3vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span variants={line} className="block">Design thinking.</motion.span>
        <motion.span variants={line} className="block">
          Production <em className="not-italic text-[#818cf8]">code.</em>
        </motion.span>
      </motion.h2>
      <motion.p
        className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: reducedMotion ? 0.01 : 0.65, delay: reducedMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        I shape the interface, build the frontend and carry the same intent through to the finished product.
      </motion.p>
    </div>
  );
}
