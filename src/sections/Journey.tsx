import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { EducationItem } from "@/components/education/EducationItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Experience — editorial career history, fully data-driven. */
export function Experience() {
  if (!experience.length) return null;

  return (
    <section id="experience" className="section-y relative">
      <div className="container-x">
        <SectionHeader index="04" label="Experience" title="Where I’ve been building." />

        <div className="experience-editorial">
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Education & training — structured editorial learning archive. */
export function Education() {
  if (!education.length) return null;

  return (
    <section id="education" className="education-section section-y relative pt-0">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Education & Training"
          title="Learning, structured and continuous."
        />

        <div className="education-archive">
          {education.map((item, index) => (
            <EducationItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
