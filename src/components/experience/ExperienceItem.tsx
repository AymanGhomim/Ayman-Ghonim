import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ExperienceItem as ExperienceItemData } from "@/types/portfolio";

interface ExperienceItemProps {
  item: ExperienceItemData;
  index: number;
}

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  const reducedMotion = useReducedMotion();
  const isCurrent = item.period?.toLowerCase().includes("present") ?? false;

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reducedMotion ? 0 : 0.08 },
    },
  };

  const reveal: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.article
      className="experience-entry"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <span className="experience-node" aria-hidden />

      <motion.div className="experience-meta" variants={reveal}>
        {item.period && (
          <div className="experience-date-row">
            <time>{item.period}</time>
            {isCurrent && <span className="experience-current">Current</span>}
          </div>
        )}
        {(item.employmentType || item.location) && (
          <p className="experience-work-meta">
            {[item.employmentType, item.location].filter(Boolean).join(" · ")}
          </p>
        )}
      </motion.div>

      <div className="experience-content">
        <motion.h3 className="experience-company" variants={reveal}>
          {item.company}
        </motion.h3>
        <motion.p className="experience-role" variants={reveal}>
          {item.role}
        </motion.p>
        {item.description && (
          <motion.p className="experience-description" variants={reveal}>
            {item.description}
          </motion.p>
        )}
        {!!item.technologies?.length && (
          <motion.ul className="experience-skills" aria-label="Contextual skills" variants={reveal}>
            {item.technologies.slice(0, 4).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </motion.ul>
        )}
      </div>

      <motion.span className="experience-index" variants={reveal} aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <motion.span
        className="experience-divider"
        aria-hidden
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.article>
  );
}
