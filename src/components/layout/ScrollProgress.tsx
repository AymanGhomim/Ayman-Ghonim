import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Thin gradient progress bar at the very top of the page. */
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        transform: `scaleX(${progress})`,
        background: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
      }}
    />
  );
}
