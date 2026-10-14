import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { PortfolioProject } from "@/types/portfolio";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type DragOrigin = {
  pointerId: number;
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
};

interface ProjectVisual3DProps {
  project: PortfolioProject;
  priority?: boolean;
  initialDirection: number;
  interactive?: boolean;
}

export function ProjectVisual3D({ project, priority, initialDirection, interactive = true }: ProjectVisual3DProps) {
  const reducedMotion = useReducedMotion();
  const [dragging, setDragging] = useState(false);
  const origin = useRef<DragOrigin | null>(null);
  const dragged = useRef(false);
  const rawRotateX = useMotionValue(reducedMotion || !interactive ? 0 : -2.5);
  const rawRotateY = useMotionValue(reducedMotion || !interactive ? 0 : initialDirection * 3.5);
  const rotateX = useSpring(rawRotateX, { stiffness: 170, damping: 24, mass: 0.5 });
  const rotateY = useSpring(rawRotateY, { stiffness: 170, damping: 24, mass: 0.5 });
  const visualUrl = project.liveUrl ?? project.behanceUrl;

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === "touch" || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    origin.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      rotateX: rawRotateX.get(),
      rotateY: rawRotateY.get(),
    };
    dragged.current = false;
    setDragging(true);
  };

  const moveVisual = (event: PointerEvent<HTMLDivElement>) => {
    if (!origin.current || origin.current.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - origin.current.x;
    const deltaY = event.clientY - origin.current.y;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 5) dragged.current = true;
    rawRotateY.set(clamp(origin.current.rotateY + deltaX * 0.12, -20, 20));
    rawRotateX.set(clamp(origin.current.rotateX - deltaY * 0.1, -13, 13));
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (origin.current?.pointerId !== event.pointerId) return;
    origin.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const rotateWithKeyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const step = 4;
    if (event.key === "ArrowLeft") rawRotateY.set(clamp(rawRotateY.get() - step, -20, 20));
    else if (event.key === "ArrowRight") rawRotateY.set(clamp(rawRotateY.get() + step, -20, 20));
    else if (event.key === "ArrowUp") rawRotateX.set(clamp(rawRotateX.get() - step, -13, 13));
    else if (event.key === "ArrowDown") rawRotateX.set(clamp(rawRotateX.get() + step, -13, 13));
    else return;
    event.preventDefault();
  };

  const preventOpenAfterDrag = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!dragged.current) return;
    event.preventDefault();
    dragged.current = false;
  };

  const visual = (
    <motion.div
      className="project-showcase-3d"
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={reducedMotion ? undefined : { scale: 1.012, y: -3 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      data-dragging={dragging}
      data-interactive={interactive}
      data-cursor={!interactive ? undefined : reducedMotion ? (visualUrl ? "VIEW" : undefined) : "DRAG"}
      onPointerDown={interactive ? startDrag : undefined}
      onPointerMove={interactive ? moveVisual : undefined}
      onPointerUp={interactive ? stopDrag : undefined}
      onPointerCancel={interactive ? stopDrag : undefined}
    >
      <div className="project-showcase-visual">
        <img
          src={project.image}
          alt={`${project.title} — project screenshot`}
          loading={priority ? "eager" : "lazy"}
          draggable={false}
          className={
            project.id === "call99" || project.id === "engaz-dashboard" || project.id === "kfs-higher-education" || project.id === "genzo-education-platform" || project.id === "royal-motors-3d"
              ? "project-image-contain"
              : project.id === "eltamalawy"
                ? "object-top"
                : "object-center"
          }
        />
      </div>
    </motion.div>
  );

  if (!visualUrl) {
    return (
      <div
        className="project-visual-link"
        role="img"
        tabIndex={interactive ? 0 : undefined}
        aria-label={interactive ? `Interactive 3D preview of ${project.title}. Drag with the mouse or use the arrow keys to rotate it.` : `Preview of ${project.title}`}
        onKeyDown={interactive ? rotateWithKeyboard : undefined}
      >
        {visual}
      </div>
    );
  }

  return (
    <a
      href={visualUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-visual-link"
      aria-label={interactive ? `Open ${project.title}. Drag with the mouse or use the arrow keys to rotate the preview.` : `Open ${project.title}`}
      onKeyDown={interactive ? rotateWithKeyboard : undefined}
      onClick={interactive ? preventOpenAfterDrag : undefined}
    >
      {visual}
    </a>
  );
}
