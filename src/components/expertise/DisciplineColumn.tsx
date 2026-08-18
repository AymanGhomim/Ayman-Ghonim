import { Reveal } from "@/components/animation/Reveal";

export type Discipline = "design" | "development";

interface DisciplineColumnProps {
  side: Discipline;
  index: string;
  label: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  onActivate: (side: Discipline | null) => void;
  delay?: number;
}

export function DisciplineColumn({
  side,
  index,
  label,
  title,
  description,
  capabilities,
  onActivate,
  delay = 0,
}: DisciplineColumnProps) {
  return (
    <Reveal delay={delay} className={`expertise-discipline expertise-discipline-${side}`}>
      <article
        tabIndex={0}
        onPointerEnter={() => onActivate(side)}
        onPointerLeave={() => onActivate(null)}
        onFocus={() => onActivate(side)}
        onBlur={() => onActivate(null)}
      >
        <p className="label-mono flex items-center gap-3">
          <span className="text-[#818cf8]">{index}</span>
          <span>/</span>
          <span>{label}</span>
        </p>
        <h3 className="font-display mt-7 max-w-md text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.035em]">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)] sm:text-[0.98rem]">
          {description}
        </p>

        <ol className="mt-10 border-t border-[var(--border)]">
          {capabilities.map((capability, capabilityIndex) => (
            <li key={capability} className="expertise-capability">
              <span>{String(capabilityIndex + 1).padStart(2, "0")}</span>
              <strong>{capability}</strong>
            </li>
          ))}
        </ol>
      </article>
    </Reveal>
  );
}
