import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { DragIndicator } from "./DragIndicator";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type DragOrigin = {
  pointerId: number;
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
};

export function HeroLaptop() {
  const reducedMotion = useReducedMotion();
  const [dragging, setDragging] = useState(false);
  const origin = useRef<DragOrigin | null>(null);
  const rawRotateX = useMotionValue(-5);
  const rawRotateY = useMotionValue(-8);
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 22, mass: 0.55 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 22, mass: 0.55 });

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    origin.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      rotateX: rawRotateX.get(),
      rotateY: rawRotateY.get(),
    };
    setDragging(true);
  };

  const moveLaptop = (event: PointerEvent<HTMLDivElement>) => {
    if (!origin.current || origin.current.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - origin.current.x;
    const deltaY = event.clientY - origin.current.y;
    rawRotateY.set(clamp(origin.current.rotateY + deltaX * 0.2, -42, 42));
    rawRotateX.set(clamp(origin.current.rotateX - deltaY * 0.16, -22, 20));
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (origin.current?.pointerId !== event.pointerId) return;
    origin.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const rotateWithKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = 5;
    if (event.key === "ArrowLeft") rawRotateY.set(clamp(rawRotateY.get() - step, -42, 42));
    else if (event.key === "ArrowRight") rawRotateY.set(clamp(rawRotateY.get() + step, -42, 42));
    else if (event.key === "ArrowUp") rawRotateX.set(clamp(rawRotateX.get() - step, -22, 20));
    else if (event.key === "ArrowDown") rawRotateX.set(clamp(rawRotateX.get() + step, -22, 20));
    else return;
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95, y: reducedMotion ? 0 : 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 1, delay: reducedMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="hero-laptop-wrap relative z-10"
    >
      <div className="hero-orbit" aria-hidden />
      <motion.div
        animate={
          reducedMotion || dragging
            ? undefined
            : {
                y: [0, -5, -2, -7, 0],
                rotateZ: [0, -0.35, 0.25, -0.18, 0],
              }
        }
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.5, 0.72, 1] }}
        className="hero-laptop-stage"
      >
        <motion.div
          className="hero-laptop-3d"
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          data-dragging={dragging}
          data-cursor="DRAG"
          role="img"
          tabIndex={0}
          aria-label="Interactive laptop showing the Eltamalawy project. Drag in any direction or use the arrow keys to rotate it."
          onPointerDown={startDrag}
          onPointerMove={moveLaptop}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onKeyDown={rotateWithKeyboard}
        >
          <div className="hero-laptop-display">
            <span className="hero-laptop-camera" aria-hidden />
            <div className="hero-laptop-screen">
              <img
                src="/projects/eltamalawy-fullscreen.png"
                alt="Eltamalawy learning platform homepage"
                draggable={false}
              />
            </div>
            <span className="hero-laptop-brand" aria-hidden>AG</span>
          </div>
        </motion.div>
      </motion.div>
      <DragIndicator />
    </motion.div>
  );
}
