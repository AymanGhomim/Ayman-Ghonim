import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { Magnetic } from "@/components/animation/Magnetic";
import { TypewriterTitle } from "./TypewriterTitle";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { SocialIcon } from "@/components/social/SocialIcon";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroContent() {
  return (
    <div className="hero-content relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease }}
        className="hero-status"
      >
        <span className="hero-status-dot" aria-hidden />
        Available for freelance
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease }}
        className="hero-name mt-7"
      >
        {personal.name}
      </motion.p>

      <TypewriterTitle />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.48, ease }}
        className="hero-description mt-7"
      >
        {personal.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.58, ease }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <Magnetic strength={0.18}>
          <a href="#work" className="hero-btn-primary group">
            View Projects
            <ArrowDownRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </Magnetic>
        <Magnetic strength={0.18}>
          <a href="#contact" className="hero-btn-secondary group">
            Contact Me
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.72 }}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <ul className="hero-social-icons flex flex-wrap items-center gap-2" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${link.label} profile`}
                className="hero-social-icon"
              >
                <SocialIcon id={link.id} />
                <span className="sr-only">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />
        <a href={personal.cvUrl} download className="hero-social-link inline-flex items-center gap-2">
          <Download size={13} />
          Résumé
        </a>
      </motion.div>
    </div>
  );
}
