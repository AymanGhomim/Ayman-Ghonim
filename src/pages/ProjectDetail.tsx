import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const reducedMotion = useReducedMotion();
  const projectIndex = projects.findIndex((item) => item.id === projectId || item.slug === projectId);
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [projectId]);

  if (!project) return <Navigate to="/#work" replace />;

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const gallery = project.gallery?.length ? project.gallery : project.images?.length ? project.images : [];
  const projectNumber = String(projectIndex + 1).padStart(2, "0");

  return (
    <article className="project-detail-page">
      <div className="container-x">
        <Link to="/#work" className="project-detail-back">
          <ArrowLeft size={15} />
          Back to selected work
        </Link>

        <motion.header
          className="project-detail-header"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="project-detail-kicker">
            <span className="label-mono">Project {projectNumber}</span>
            {!!project.categories?.length && <span>{project.categories.join(" / ")}</span>}
          </div>
          <h1>{project.title}</h1>
          {!!project.roles?.length && <p className="project-detail-role">{project.roles.join(" × ")}</p>}
          {project.description && <p className="project-detail-lead">{project.description}</p>}

          <div className="project-detail-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="is-primary">
                View Live Site <ArrowUpRight size={15} />
              </a>
            )}
            {project.behanceUrl && (
              <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                View Case Study <ArrowUpRight size={15} />
              </a>
            )}
            {project.secondaryBehanceUrl && (
              <a href={project.secondaryBehanceUrl} target="_blank" rel="noopener noreferrer">
                {project.secondaryBehanceLabel ?? "View Web Case Study"} <ArrowUpRight size={15} />
              </a>
            )}
            {project.figmaUrl && (
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                View Figma <ArrowUpRight size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={15} /> Source
              </a>
            )}
          </div>
        </motion.header>

        <motion.figure
          className="project-detail-hero"
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={project.image} alt={`${project.title} — project overview`} />
        </motion.figure>

        <div className="project-detail-layout">
          <aside className="project-detail-aside">
            <div className="project-detail-meta-block">
              <span className="label-mono">Role</span>
              <strong>{project.roles?.length ? project.roles.join(" × ") : "Front-End Development"}</strong>
            </div>
            {!!project.technologies?.length && (
              <div className="project-detail-meta-block">
                <span className="label-mono">Stack</span>
                <ul className="project-detail-chips">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            )}
            {!!project.categories?.length && (
              <div className="project-detail-meta-block">
                <span className="label-mono">Categories</span>
                <strong>{project.categories.join(" / ")}</strong>
              </div>
            )}
          </aside>

          <div className="project-detail-body">
            <section>
              <span className="label-mono">01 / Overview</span>
              <h2>From product direction to a clear digital experience.</h2>
              <p>{project.summary ?? project.description ?? "A focused digital product shaped around clear user journeys and thoughtful execution."}</p>
            </section>

            {(project.challenge || project.solution || project.designProcess || project.developmentProcess || project.results) && (
              <section className="project-detail-story">
                {project.challenge && <div><span className="label-mono">Challenge</span><p>{project.challenge}</p></div>}
                {project.solution && <div><span className="label-mono">Solution</span><p>{project.solution}</p></div>}
                {project.designProcess && <div><span className="label-mono">Design process</span><p>{project.designProcess}</p></div>}
                {project.developmentProcess && <div><span className="label-mono">Development process</span><p>{project.developmentProcess}</p></div>}
                {project.results && <div><span className="label-mono">Results</span><p>{project.results}</p></div>}
              </section>
            )}
          </div>
        </div>

        {!!gallery.length && (
          <section className="project-detail-gallery" aria-label={`${project.title} gallery`}>
            <div className="project-detail-section-heading">
              <span className="label-mono">02 / Interface views</span>
              <span aria-hidden />
            </div>
            <div className="project-detail-gallery-grid">
              {gallery.map((image, index) => (
                <figure key={image} className={index === 0 ? "is-wide" : ""}>
                  <img src={image} alt={`${project.title} interface view ${index + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="project-detail-pagination" aria-label="Project navigation">
          <Link to={`/projects/${previousProject.id}`}>
            <span className="label-mono"><ArrowLeft size={14} /> Previous project</span>
            <strong>{previousProject.title}</strong>
          </Link>
          <Link to={`/projects/${nextProject.id}`} className="is-next">
            <span className="label-mono">Next project <ArrowRight size={14} /></span>
            <strong>{nextProject.title}</strong>
          </Link>
        </nav>
      </div>
    </article>
  );
}
