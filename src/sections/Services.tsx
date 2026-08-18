import { ArrowRight } from "lucide-react";
import { services, processSteps } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

/** Services — full-width interactive rows, not cards. */
export function Services() {
  if (!services.length) return null;

  return (
    <section id="services" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          index="06"
          label="Services"
          title="What I can do for your product."
        />

        <div className="mt-16">
          <Stagger stagger={0.07}>
            {services.map((service, i) => (
              <StaggerItem key={service.id} y={18}>
                <div className="service-row group">
                  <span className="label-mono !text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="service-title font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="service-arrow hidden sm:block" size={22} aria-hidden />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/** Process — generic design→code working method. */
export function Process() {
  if (!processSteps.length) return null;

  return (
    <section id="process" className="section-y relative pt-0">
      <div className="container-x">
        <SectionHeader
          index="07"
          label="Process"
          title="From idea to interface to code."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.05} y={16}>
              <div className="flex h-full flex-col gap-4 bg-[var(--bg-soft)] p-8 transition-colors duration-300 hover:bg-[var(--surface-hover)]">
                <span className="font-mono text-sm text-gradient">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
