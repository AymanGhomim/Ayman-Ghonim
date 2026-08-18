import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stages = ["Design", "Build", "Ship"] as const;

export function ExpertiseWorkflow() {
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 2.2;

  return (
    <div className="expertise-workflow mt-20 sm:mt-24" role="img" aria-label="Design flows to build, then to ship">
      <motion.span
        className="expertise-workflow-progress"
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration, delay: reducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="expertise-workflow-dot"
        aria-hidden
        initial={{ left: "0.3rem", opacity: 0 }}
        whileInView={{ left: "calc(100% - 0.75rem)", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration, delay: reducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="expertise-workflow-stages">
        {stages.map((stage, index) => (
          <motion.span
            key={stage}
            initial={{ opacity: 0.45 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.35, delay: reducedMotion ? 0 : 0.25 + index * 0.72 }}
          >
            {stage}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
