import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ServiceItem } from "@/types/portfolio";

function PreviewGraphic({ type }: { type: ServiceItem["preview"] }) {
  if (type === "design") {
    return (
      <div className="service-preview-wireframe">
        <span className="is-wide" />
        <span />
        <span />
        <span className="is-wide" />
      </div>
    );
  }

  if (type === "development") {
    return (
      <div className="service-preview-browser">
        <i /><i /><i />
        <span className="is-sidebar" />
        <span className="is-content" />
      </div>
    );
  }

  if (type === "design-code") {
    return (
      <div className="service-preview-flow">
        <span>Wireframe</span><i />
        <span>UI</span><i />
        <span>Code</span>
      </div>
    );
  }

  if (type === "integration") {
    return (
      <div className="service-preview-flow is-integration">
        <span>UI</span><i />
        <span>API</span><i />
        <span>Data</span>
      </div>
    );
  }

  return (
    <div className="service-preview-refinement">
      {["Performance", "Accessibility", "Responsive"].map((label) => (
        <div key={label}><span>{label}</span><i /></div>
      ))}
    </div>
  );
}

export function ServicePreview({ service }: { service: ServiceItem | null }) {
  const reducedMotion = useReducedMotion();

  return (
    <aside className="service-preview" aria-hidden>
      <AnimatePresence mode="wait">
        {service ? (
          <motion.div
            key={service.id}
            className="service-preview-inner"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>Service preview</p>
            <PreviewGraphic type={service.preview} />
          </motion.div>
        ) : (
          <motion.div key="idle" className="service-preview-idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span />
            <p>Explore the service index</p>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
