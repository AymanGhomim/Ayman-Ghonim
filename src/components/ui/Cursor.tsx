import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Minimal custom cursor — desktop (fine pointer) only.
 * Elements can set data-cursor="VIEW" | "OPEN" to morph the cursor.
 */
export function Cursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (!fine || reduced) return;
    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
      setHovering(
        Boolean((e.target as HTMLElement).closest("a, button, [role='button']")),
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
    };
  }, [fine, reduced, x, y]);

  if (!fine || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: label ? 74 : hovering ? 44 : 14,
          height: label ? 74 : hovering ? 44 : 14,
          backgroundColor: label
            ? "rgba(247,247,248,0.96)"
            : hovering
              ? "rgba(139,92,246,0.15)"
              : "rgba(247,247,248,0.9)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ mixBlendMode: label ? "normal" : "difference" }}
      >
        {label && (
          <span
            className="font-mono text-[10px] font-medium tracking-[0.18em]"
            style={{ color: "#050505" }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
