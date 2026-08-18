import { Stagger, StaggerItem } from "@/components/animation/Reveal";
import { personal } from "@/data/personal";

const details = [
  { label: "Focus", value: "Frontend Development / UI/UX Design" },
  { label: "Based in", value: personal.location },
  { label: "Stack", value: "React / Next.js / TypeScript / Figma" },
] as const;

export function AboutDetails() {
  return (
    <Stagger className="mt-10 border-y border-[var(--border)]" stagger={0.08} delay={0.25}>
      <dl>
        {details.map((detail, index) => (
          <StaggerItem key={detail.label} y={14}>
            <div
              className={`grid gap-2 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline ${
                index > 0 ? "border-t border-[var(--border)]" : ""
              }`}
            >
              <dt className="label-mono text-[0.64rem]">{detail.label}</dt>
              <dd className="font-display text-sm leading-6 text-[var(--text-primary)] sm:text-base">
                {detail.value}
              </dd>
            </div>
          </StaggerItem>
        ))}
      </dl>
    </Stagger>
  );
}
