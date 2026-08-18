import { MousePointer2 } from "lucide-react";

export function DragIndicator() {
  return (
    <div className="hero-drag-indicator" aria-hidden>
      <MousePointer2 size={14} />
      <span>Drag in any direction</span>
    </div>
  );
}
