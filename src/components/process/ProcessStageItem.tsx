import { ArrowRight } from "lucide-react";
import { StaggerItem } from "@/components/animation/Reveal";
import type { ProcessStage, ProcessStep } from "@/types/portfolio";

interface ProcessStageItemProps {
  stage: ProcessStage & { steps: ProcessStep[] };
  index: number;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function ProcessStageItem({
  stage,
  index,
  active,
  onActivate,
  onDeactivate,
}: ProcessStageItemProps) {
  return (
    <StaggerItem y={18}>
      <article
        className={`process-stage${active ? " is-active" : ""}`}
        tabIndex={0}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
      >
        <span className="process-stage-number" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{stage.title}</h3>

        {!!stage.steps.length && (
          <p className="process-stage-steps">
            {stage.steps.map((step, stepIndex) => (
              <span key={step.id}>
                {step.title}
                {stepIndex < stage.steps.length - 1 && <ArrowRight size={14} aria-hidden />}
              </span>
            ))}
          </p>
        )}

        <p className="process-stage-statement">{stage.statement}</p>
      </article>
    </StaggerItem>
  );
}
