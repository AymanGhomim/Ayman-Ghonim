import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";
import type { ExperienceItem, EducationItem } from "@/types/portfolio";

/** Experience — premium timeline, fully data-driven. */
export function Experience() {
  if (!experience.length) return null;

  return (
    <section id="experience" className="section-y relative">
      <div className="container-x">
        <SectionHeader index="04" label="Experience" title="Where I’ve been building." />

        <div className="mt-16 max-w-3xl">
          <Stagger>
            {experience.map((item: ExperienceItem) => (
              <StaggerItem key={item.id}>
                <article className="relative flex gap-6 pb-14 last:pb-0 sm:gap-10">
                  {/* Rail */}
                  <div className="flex flex-col items-center" aria-hidden>
                    <span className="timeline-dot mt-2" />
                    <span className="mt-3 w-px flex-1 bg-[var(--border)]" />
                  </div>
                  <div className="pb-2">
                    {item.period && <p className="label-mono">{item.period}</p>}
                    <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-[var(--text-secondary)]">
                      {item.company}
                    </p>
                    {item.description && (
                      <p className="mt-4 max-w-xl leading-relaxed text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    )}
                    {!!item.technologies?.length && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <li key={tech} className="chip">{tech}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/** Education & training — alternating chronological flow map. */
export function Education() {
  if (!education.length) return null;

  return (
    <section id="education" className="section-y relative pt-0">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Education & Training"
          title="Learning, structured and continuous."
        />

        <div className="education-flow mt-20">
          {education.map((item: EducationItem, i) => {
            const side = i % 2 === 0 ? "is-left" : "is-right";

            return (
              <Reveal key={item.id} delay={0.06} y={18}>
                <div className={`education-flow-row ${side}`}>
                  <div className="education-flow-date" aria-label={`Date: ${item.period ?? "Certificate"}`}>
                    <span className="label-mono">{item.period ?? "Certificate"}</span>
                  </div>

                  <div className="education-flow-node" aria-hidden>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <article className="education-flow-card">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {item.institution}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    )}
                    {!!item.details?.length && (
                      <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2.5 leading-relaxed">
                            <span className="education-flow-bullet" aria-hidden />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
