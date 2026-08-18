import { Reveal } from "@/components/animation/Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** Consistent section header: 01 / LABEL + display title. */
export function SectionHeader({ index, label, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="label-mono mb-5 flex items-center gap-3" style={align === "center" ? { justifyContent: "center" } : undefined}>
        <span className="text-gradient">{index}</span>
        <span aria-hidden className="inline-block h-px w-10 bg-[var(--border-hover)]" />
        <span>{label}</span>
      </p>
      <h2 className="display-section max-w-3xl" style={align === "center" ? { marginInline: "auto" } : undefined}>
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]" style={align === "center" ? { marginInline: "auto" } : undefined}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
