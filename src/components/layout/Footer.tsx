import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Reveal } from "@/components/animation/Reveal";

/** Minimal footer — identity, real links, dynamic year. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-x py-16">
        <Reveal>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight">
                {personal.name}
              </p>
              <p className="label-mono mt-4 leading-loose">
                UI/UX Designer
                <span className="text-gradient mx-2">×</span>
                Front-End Developer
              </p>
            </div>

            <nav aria-label="Social links">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group link-underline inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="link-underline font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Reveal>

        <hr className="divider my-10" />

        <div className="flex flex-col gap-3 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase">
            Designed <span className="text-gradient">×</span> Built by {personal.firstName}
          </p>
        </div>
      </div>
    </footer>
  );
}
