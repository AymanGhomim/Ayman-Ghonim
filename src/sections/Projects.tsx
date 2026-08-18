import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ProjectTimelineItem } from "@/components/projects/ProjectTimelineItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { PortfolioProject } from "@/types/portfolio";

/** Selected Work — a sequential visual journey around one scroll-driven timeline. */
export function Projects({ projects }: { projects: PortfolioProject[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 38%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.45,
  });

  if (!projects.length) return null;

  return (
    <section id="work" className="projects-journey section-y relative overflow-hidden">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Selected Work"
          title="Projects, from pixels to products."
          description="A selection of real shipped work — designed, built and deployed."
        />

        <div className="projects-timeline-intro mt-16 sm:mt-20">
          <span className="label-mono">Selected projects</span>
          <span aria-hidden />
        </div>

        <div ref={timelineRef} className="projects-timeline relative mt-10 sm:mt-14">
          <div className="projects-timeline-rail" aria-hidden>
            <motion.span
              className="projects-timeline-progress"
              style={{ scaleY: reducedMotion ? 1 : smoothProgress }}
            />
          </div>

          {projects.map((project, index) => (
            <ProjectTimelineItem
              key={project.id}
              project={project}
              index={index}
              priority={index < 2}
            />
          ))}
        </div>

        <div className="projects-timeline-end">
          <span aria-hidden />
          <p className="label-mono">End / Selected work</p>
        </div>
      </div>
    </section>
  );
}
