import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectVisual3D } from "@/components/projects/ProjectVisual3D";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { PortfolioProject } from "@/types/portfolio";

interface ProjectTimelineItemProps {
  project: PortfolioProject;
  index: number;
  priority?: boolean;
}

export function ProjectTimelineItem({ project, index, priority }: ProjectTimelineItemProps) {
  const reducedMotion = useReducedMotion();
  const isLeft = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className={`project-timeline-row ${isLeft ? "is-left" : "is-right"}`}>
      <motion.article
        className="project-showcase"
        initial={{ opacity: 0, x: reducedMotion ? 0 : isLeft ? -40 : 40, y: reducedMotion ? 0 : 20, scale: reducedMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reducedMotion ? 0.2 : 0.78, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="project-showcase-heading">
          <p className="label-mono">Project {projectNumber}</p>
          {!!project.categories?.length && (
            <p className="project-showcase-categories">{project.categories.join(" / ")}</p>
          )}
        </div>

        <ProjectVisual3D
          project={project}
          priority={priority}
          initialDirection={isLeft ? -1 : 1}
        />

        <div className="project-showcase-content">
          <h3>{project.title}</h3>

          {!!project.roles?.length && (
            <p className="project-showcase-role">{project.roles.join(" × ")}</p>
          )}

          {project.description && <p className="project-showcase-description">{project.description}</p>}

          {!!project.technologies?.length && (
            <p className="project-showcase-stack">{project.technologies.slice(0, 4).join(" · ")}</p>
          )}

          <div className="project-showcase-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Site <ArrowUpRight size={14} />
              </a>
            )}
            {project.behanceUrl && (
              <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                View Case Study <ArrowUpRight size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} /> Source
              </a>
            )}
            {project.figmaUrl && (
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                View Figma <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <motion.div
        className="project-timeline-node"
        initial={{ scale: 0.82, borderColor: "rgba(255,255,255,0.12)" }}
        whileInView={{
          scale: 1.08,
          borderColor: "rgba(96,165,250,0.85)",
          backgroundColor: "#0b1b36",
          color: "#bfdbfe",
          boxShadow: "0 0 0 7px rgba(7,10,16,0.86), 0 0 22px rgba(37,99,235,0.2)",
        }}
        viewport={{ once: false, amount: 0.65, margin: "-22% 0px -22% 0px" }}
        transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        {projectNumber}
      </motion.div>
    </div>
  );
}
