import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProcessRailProps {
  labels: string[];
  activeIndex: number | null;
}

export function ProcessRail({ labels, activeIndex }: ProcessRailProps) {
  const reducedMotion = useReducedMotion();
  const progress = activeIndex === null ? 100 : ((activeIndex + 1) / labels.length) * 100;

  return (
    <div className="process-rail" aria-hidden>
      <div className="process-rail-track">
        <motion.span
          className="process-rail-progress"
          style={{ width: `${progress}%` }}
          initial={{ scaleX: reducedMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {labels.map((label, index) => (
          <span
            key={label}
            className={`process-rail-node${activeIndex === index ? " is-active" : ""}`}
            style={{ left: `${(index / (labels.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      <div className="process-rail-labels">
        {labels.map((label, index) => (
          <span key={label} className={activeIndex === index ? "is-active" : ""}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
