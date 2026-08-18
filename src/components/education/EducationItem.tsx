import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { EducationItem as EducationItemData } from "@/types/portfolio";

interface EducationItemProps {
  item: EducationItemData;
  index: number;
}

export function EducationItem({ item, index }: EducationItemProps) {
  const reducedMotion = useReducedMotion();
  const [program, ...programContext] = item.title.split(" — ");
  const metadata = item.details
    ?.map((detail) => detail.match(/^([^:]+):\s*(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match));

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reducedMotion ? 0 : 0.07 },
    },
  };

  const reveal: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.article
      className="education-record"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
    >
      <motion.span className="education-index" variants={reveal} aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className="education-record-content">
        <motion.p className="education-institution" variants={reveal}>
          {item.institution}
        </motion.p>
        <motion.h3 className="education-program" variants={reveal}>
          {program}
        </motion.h3>
        {!!programContext.length && (
          <motion.p className="education-program-context" variants={reveal}>
            {programContext.join(" — ")}
          </motion.p>
        )}

        {item.description && (
          <motion.p className="education-description" variants={reveal}>
            {item.description}
          </motion.p>
        )}

        {!!metadata?.length && (
          <motion.dl className="education-metadata" variants={reveal}>
            {metadata.map((detail) => (
              <div key={detail[0]}>
                <dt>{detail[1]}</dt>
                <dd>{detail[2]}</dd>
              </div>
            ))}
          </motion.dl>
        )}

        {!!item.topics?.length && (
          <motion.ul className="education-topics" aria-label="Key learning topics" variants={reveal}>
            {item.topics.slice(0, 5).map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </motion.ul>
        )}
      </div>

      {item.period && (
        <motion.time className="education-period" variants={reveal}>
          {item.period}
        </motion.time>
      )}

      <motion.span
        className="education-divider"
        aria-hidden
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: reducedMotion ? 0 : 0.75, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.article>
  );
}
