import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { PortfolioProject } from "@/types/portfolio";

const projectFilters = ["All", "UI/UX Design", "Front-End Dev", "Full-Stack Dev"] as const;
type ProjectFilter = (typeof projectFilters)[number];

function ProjectCarousel({ projects }: { projects: PortfolioProject[] }) {
  const reducedMotion = useReducedMotion();
  const loop = projects.length > 2;
  const [viewportRef, api] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop,
    watchFocus: false,
    duration: reducedMotion ? 0 : 28,
  });
  const [navigation, setNavigation] = useState({
    selected: 0, total: projects.length, previous: false,
    next: projects.length > 1,
  });

  useEffect(() => {
    if (!api) return;
    const update = () => setNavigation({
      selected: api.selectedScrollSnap(),
      total: api.scrollSnapList().length,
      previous: api.canScrollPrev(),
      next: api.canScrollNext(),
    });
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft") api?.scrollPrev(reducedMotion);
    else if (event.key === "ArrowRight") api?.scrollNext(reducedMotion);
    else if (event.key === "Home") api?.scrollTo(0, reducedMotion);
    else if (event.key === "End") api?.scrollTo(api.scrollSnapList().length - 1, reducedMotion);
    else return;
    event.preventDefault();
  }, [api, reducedMotion]);

  return (
    <div className="projects-carousel" role="region" aria-roledescription="carousel"
      aria-label="Selected projects" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="projects-carousel-toolbar">
        <p className="label-mono">Selected projects <span className="projects-carousel-total">/ {projects.length}</span></p>
        <div className="projects-carousel-navigation">
          <button type="button" className="projects-carousel-arrow" aria-label="Previous projects"
            aria-controls="projects-carousel-track" disabled={!navigation.previous}
            onClick={() => api?.scrollPrev(reducedMotion)}>
            <ArrowLeft size={20} aria-hidden />
          </button>
          <button type="button" className="projects-carousel-arrow" aria-label="Next projects"
            aria-controls="projects-carousel-track" disabled={!navigation.next}
            onClick={() => api?.scrollNext(reducedMotion)}>
            <ArrowRight size={20} aria-hidden />
          </button>
        </div>
      </div>
      <div className="projects-carousel-viewport" ref={viewportRef} dir="ltr">
        <div className="projects-carousel-track" id="projects-carousel-track">
          {projects.map((project, index) => {
            const active = index === navigation.selected;
            const previous = (loop || navigation.selected > 0)
              && index === (navigation.selected - 1 + projects.length) % projects.length;
            const next = (loop || navigation.selected < projects.length - 1)
              && index === (navigation.selected + 1) % projects.length;
            const position = active ? "is-active" : previous ? "is-previous" : next ? "is-next" : "";
            return (
              <div className={`projects-carousel-slide ${position}`} key={project.id} role="group"
                aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
                inert={!active && !previous && !next}>
                <div className="projects-carousel-card-layer" inert={!active}>
                  <ProjectCard project={project} index={index} priority={index < 2 || index === projects.length - 1} />
                </div>
                {!active && (previous || next) && (
                  <button type="button" className="projects-carousel-preview-control"
                    aria-label={`Show project: ${project.title}`}
                    onClick={() => api?.scrollTo(index, reducedMotion)} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="projects-carousel-footer">
        <span className="label-mono" aria-live="polite" aria-atomic="true">
          Position {String(navigation.selected + 1).padStart(2, "0")} / {String(navigation.total).padStart(2, "0")}
        </span>
        <div className="projects-carousel-progress" aria-hidden>
          <span style={{ width: `${((navigation.selected + 1) / navigation.total) * 100}%` }} />
        </div>
        <span className="label-mono projects-carousel-hint">Swipe or use arrows</span>
      </div>
    </div>
  );
}

/** Selected Work — a responsive, manually controlled project carousel. */
export function Projects({ projects }: { projects: PortfolioProject[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.tags?.includes(activeFilter)),
    [activeFilter, projects],
  );
  if (!projects.length) return null;

  return (
    <section id="work" className="projects-journey section-y relative overflow-hidden">
      <div className="container-x">
        <SectionHeader index="03" label="Selected Work" title="Projects, from pixels to products."
          description="A selection of real shipped work — designed, built and deployed." />
        <div className="projects-filter-bar mt-12 sm:mt-16" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button key={filter} type="button"
              className={`projects-filter-pill${activeFilter === filter ? " is-active" : ""}`}
              aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
        {filteredProjects.length ? <ProjectCarousel key={activeFilter} projects={filteredProjects} />
          : <p className="projects-filter-empty" role="status">No projects match this filter yet.</p>}
      </div>
    </section>
  );
}
