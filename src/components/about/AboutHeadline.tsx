import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
      className="font-display min-w-0 text-[clamp(2.55rem,4.6vw,4.65rem)] font-semibold leading-[1.01] tracking-[-0.045em]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.span variants={line} className="block">I care about the</motion.span>
      <motion.span variants={line} className="block">
        <em className="not-italic text-[#818cf8]">details</em> between
      </motion.span>
      <motion.span variants={line} className="block">idea and execution.</motion.span>
    </motion.h2>
  );
}
