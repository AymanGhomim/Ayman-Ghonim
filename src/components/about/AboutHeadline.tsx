import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const headline = ["I design it.", "I build it.", "I ship it."] as const;

export function AboutHeadline() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const line: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.h2
      className="font-display min-w-0 text-[clamp(2.75rem,5.4vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {headline.map((text, index) => (
        <motion.span key={text} variants={line} className={`block ${index === 1 ? "text-[#818cf8]" : ""}`}>
          {text}
        </motion.span>
      ))}
    </motion.h2>
  );
}
