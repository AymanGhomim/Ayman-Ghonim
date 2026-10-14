import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router";
import { ProjectVisual3D } from "@/components/projects/ProjectVisual3D";
import type { PortfolioProject } from "@/types/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  priority?: boolean;
}

export function ProjectCard({ project, index, priority }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="project-showcase project-carousel-card">
      <div className="project-showcase-heading">
        <p className="label-mono">Project {projectNumber}</p>
        {!!project.categories?.length && (
          <p className="project-showcase-categories">{project.categories.join(" / ")}</p>
        )}
      </div>

      <ProjectVisual3D
        project={project}
        priority={priority}
        initialDirection={0}
        interactive={false}
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
          <Link to={`/projects/${project.id}`}>
            View Project Details <ArrowUpRight size={14} />
          </Link>
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
          {project.secondaryBehanceUrl && (
            <a href={project.secondaryBehanceUrl} target="_blank" rel="noopener noreferrer">
              {project.secondaryBehanceLabel ?? "View Web Case Study"} <ArrowUpRight size={14} />
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
    </article>
  );
}
