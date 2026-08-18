import { motion } from "framer-motion";
import { Reveal } from "@/components/animation/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stages = ["Design", "Code", "Product"] as const;

export function DesignCodeFlow() {
  const reducedMotion = useReducedMotion();

  return (
    <Reveal delay={0.15} className="mt-20 sm:mt-24 lg:mt-32">
      <p className="label-mono mb-5">Design + Development</p>
      <div
        className="about-flow"
        role="img"
        aria-label="Design leads to code, then to a finished product"
      >
        <span
          className="about-flow-progress"
          aria-hidden
        />

        <span
          className="about-flow-indicator"
          aria-hidden
        />

        <div className="about-flow-stages">
          {stages.map((stage, index) => (
            <motion.span
              key={stage}
              className="about-flow-stage"
              initial={{ color: "#6e6e77", opacity: 0.55, y: reducedMotion ? 0 : 8 }}
              whileInView={{ color: "#f7f7f8", opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.45,
                delay: reducedMotion ? 0 : 0.3 + index * 0.82,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <i aria-hidden />
              {stage}
            </motion.span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
