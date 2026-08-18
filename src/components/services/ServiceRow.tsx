import { ArrowRight } from "lucide-react";
import { StaggerItem } from "@/components/animation/Reveal";
import type { ServiceItem } from "@/types/portfolio";

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function ServiceRow({
  service,
  index,
  active,
  onActivate,
  onDeactivate,
}: ServiceRowProps) {
  return (
    <StaggerItem y={18}>
      <article
        className={`service-index-row${active ? " is-active" : ""}`}
        tabIndex={0}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
      >
        <span className="service-index-number" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="service-index-content">
          <h3>{service.title}</h3>
          {service.description && <p>{service.description}</p>}
          {!!service.details?.length && (
            <ul aria-label="What this service includes">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>

        <ArrowRight className="service-index-arrow" size={22} aria-hidden />
      </article>
    </StaggerItem>
  );
}
