import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { processStages, processSteps, services } from "@/data/services";
import { ProcessRail } from "@/components/process/ProcessRail";
import { ProcessStageItem } from "@/components/process/ProcessStageItem";
import { ServicePreview } from "@/components/services/ServicePreview";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger } from "@/components/animation/Reveal";

/** Services — full-width interactive rows, not cards. */
export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  if (!services.length) return null;

  return (
    <section id="services" className="services-section section-y relative">
      <div className="container-x">
        <SectionHeader
          index="06"
          label="Services"
          title="How I help build better digital products."
          align="center"
          description="From early product thinking to production-ready frontend — design, development and the details connecting both."
        />

        <div className="services-index-layout">
          <Stagger className="services-index" stagger={0.055}>
            {services.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                active={activeService === index}
                onActivate={() => setActiveService(index)}
                onDeactivate={() => setActiveService(null)}
              />
            ))}
          </Stagger>

          <ServicePreview service={activeService === null ? null : services[activeService]} />
        </div>

        <Reveal className="services-cta" y={14}>
          <p>Have a product in mind?</p>
          <a href="#contact" aria-label="Go to contact section to discuss your product">
            <span>Let’s build it together.</span>
            <ArrowUpRight aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Process — generic design→code working method. */
export function Process() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  if (!processStages.length) return null;

  const stages = processStages.map((stage) => ({
    ...stage,
    steps: stage.stepIds
      .map((stepId) => processSteps.find((step) => step.id === stepId))
      .filter((step): step is (typeof processSteps)[number] => Boolean(step)),
  }));

  return (
    <section id="process" className="section-y relative pt-0">
      <div className="container-x">
        <SectionHeader
          index="07"
          label="Process"
          title="From idea to interface to code."
          description="A focused workflow that keeps product thinking, interface design and frontend development aligned."
        />

        <div className="process-workflow" onMouseLeave={() => setActiveStage(null)}>
          <Stagger
            className={`process-stages${activeStage === null ? "" : " has-active"}`}
            stagger={0.09}
          >
            {stages.map((stage, index) => (
              <ProcessStageItem
                key={stage.id}
                stage={stage}
                index={index}
                active={activeStage === index}
                onActivate={() => setActiveStage(index)}
                onDeactivate={() => setActiveStage(null)}
              />
            ))}
          </Stagger>

          <ProcessRail
            labels={stages.map((stage) => stage.railLabel)}
            activeIndex={activeStage}
          />
        </div>
      </div>
    </section>
  );
}
