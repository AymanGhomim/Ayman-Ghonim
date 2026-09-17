import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animation/Reveal";

const certificates = [
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.26 PM.jpeg",
    alt: "Certificate 1",
    orientation: "landscape",
  },
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.26 PM (1).jpeg",
    alt: "Certificate 2",
    orientation: "portrait",
  },
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.27 PM.jpeg",
    alt: "Certificate 3",
    orientation: "portrait",
  },
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.27 PM (1).jpeg",
    alt: "Certificate 4",
    orientation: "portrait",
  },
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.27 PM (2).jpeg",
    alt: "Certificate 5",
    orientation: "portrait",
  },
  {
    src: "/certificate/WhatsApp Image 2026-09-17 at 6.15.27 PM (3).jpeg",
    alt: "Certificate 6",
    orientation: "portrait",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="certificates-section section-y relative pt-0">
      <div className="container-x">
        <SectionHeader
          index="06"
          label="Certificates"
          title="Proof of the work behind the work."
          description="A selection of certificates and training achievements collected along the way."
        />

        <div className="certificates-grid" aria-label="Certificates gallery">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.src} delay={index * 0.05}>
              <motion.a
                href={certificate.src}
                target="_blank"
                rel="noreferrer"
                className={`certificate-card certificate-card-${certificate.orientation}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                aria-label={`Open ${certificate.alt}`}
              >
                <img src={certificate.src} alt={certificate.alt} loading="lazy" />
                <span className="certificate-card-overlay" aria-hidden>
                  <ExternalLink size={17} />
                  <span>View certificate</span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
