import { useMemo, useState } from "react";
import { Reveal } from "@/components/animation/Reveal";
import { DisciplineColumn, type Discipline } from "@/components/expertise/DisciplineColumn";
import { ExpertiseIntro } from "@/components/expertise/ExpertiseIntro";
import { ExpertiseWorkflow } from "@/components/expertise/ExpertiseWorkflow";
import { skillGroups } from "@/data/skills";

const primaryDesign = [
  "UI Design",
  "UX Principles",
  "Wireframing",
  "Prototyping",
  "Responsive Design",
  "Figma",
] as const;

const primaryDevelopment = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "REST APIs",
  "Redux / Redux Toolkit",
] as const;

/** Expertise — two disciplines presented as one connected workflow. */
export function Expertise() {
  const [active, setActive] = useState<Discipline | null>(null);

  const supportingStack = useMemo(() => {
    const primary = new Set<string>([...primaryDesign, ...primaryDevelopment]);
    return skillGroups.flatMap((group) => group.skills).filter((skill) => !primary.has(skill));
  }, []);

  if (!skillGroups.length) return null;

  return (
    <section id="expertise" className="expertise-editorial section-y relative overflow-hidden">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="label-mono flex items-center gap-3">
            <span className="text-[#60a5fa]">02</span>
            <span aria-hidden className="h-px w-10 bg-[var(--border-hover)]" />
            <span>Expertise</span>
          </p>
        </Reveal>

        <ExpertiseIntro />

        <div className="expertise-columns mt-16" data-active={active ?? "none"}>
          <DisciplineColumn
            side="design"
            index="01"
            label="Design"
            title="I shape the experience."
            description="I understand the problem, organize the journey and turn ideas into clear, responsive interfaces."
            capabilities={primaryDesign}
            onActivate={setActive}
          />
          <DisciplineColumn
            side="development"
            index="02"
            label="Development"
            title="I bring it to life."
            description="I translate the design into maintainable frontend code with reliable state, APIs and responsive behavior."
            capabilities={primaryDevelopment}
            onActivate={setActive}
            delay={0.1}
          />
        </div>

        <ExpertiseWorkflow />

        <Reveal delay={0.12} className="mt-16 sm:mt-20">
          <div className="border-t border-[var(--border)] pt-7">
            <p className="label-mono mb-5">Supporting stack</p>
            <ul className="expertise-stack" aria-label="Supporting skills and tools">
              {supportingStack.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
