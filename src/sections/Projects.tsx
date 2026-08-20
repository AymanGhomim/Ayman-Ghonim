import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ProjectTimelineItem } from "@/components/projects/ProjectTimelineItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { PortfolioProject } from "@/types/portfolio";

const projectFilters = ["All", "UI/UX Design", "Front-End Dev"] as const;
type ProjectFilter = (typeof projectFilters)[number];

/** Selected Work — a sequential visual journey around one scroll-driven timeline. */
export function Projects({ projects }: { projects: PortfolioProject[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 38%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.45,
  });

  const filteredProjects = useMemo(
    () => activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeFilter)),
    [activeFilter, projects],
  );

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

        <div className="projects-filter-bar mt-12 sm:mt-16" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`projects-filter-pill${activeFilter === filter ? " is-active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-timeline-intro mt-8 sm:mt-10">
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

          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -18 }}
                transition={{ duration: reducedMotion ? 0.16 : 0.38, ease: "easeOut" }}
              >
                <ProjectTimelineItem
                  project={project}
                  index={index}
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {!filteredProjects.length && (
            <p className="projects-filter-empty">No projects match this filter yet.</p>
          )}
        </div>

        <div className="projects-timeline-end">
          <span aria-hidden />
          <p className="label-mono">End / Selected work</p>
        </div>
      </div>
    </section>
  );
}
