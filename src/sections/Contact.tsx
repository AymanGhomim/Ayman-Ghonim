import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animation/Reveal";
import { Magnetic } from "@/components/animation/Magnetic";

type FormStatus = "idle" | "sending" | "sent" | "error";

/**
 * Contact — wired to the real Formspree endpoint from the original site.
 * Real states only: sending / sent / error. No fake success.
 */
export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(personal.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div
        className="glow-spot left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2"
        style={{ background: "rgba(139,92,246,0.09)" }}
      />
      <div className="container-x relative z-10">
        <SectionHeader index="08" label="Contact" title="Have an idea? Let’s design it — then build it." />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Direct channels */}
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-12">
              <div className="space-y-8">
                <a
                  href={`mailto:${personal.email}`}
                  className="group block"
                  data-cursor="OPEN"
                >
                  <p className="label-mono mb-2 flex items-center gap-2">
                    <Mail size={13} /> Email
                  </p>
                  <p className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-[var(--accent-from)] sm:text-2xl">
                    {personal.email}
                  </p>
                </a>

                <div>
                  <p className="label-mono mb-2 flex items-center gap-2">
                    <Phone size={13} /> Phone / WhatsApp
                  </p>
                  <div className="flex flex-col gap-1">
                    {personal.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="link-underline w-fit font-display text-lg text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="label-mono mb-2 flex items-center gap-2">
                    <MapPin size={13} /> Location
                  </p>
                  <p className="font-display text-lg text-[var(--text-secondary)]">
                    {personal.location}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Social profiles">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group link-underline inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Real form → Formspree */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="card-surface space-y-5 p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="label-mono mb-2.5 block">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-from)]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="label-mono mb-2.5 block">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-from)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="label-mono mb-2.5 block">Project type</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="UI/UX design, front-end build, or both"
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-from)]"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="label-mono mb-2.5 block">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea…"
                  className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-from)]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Magnetic strength={0.15}>
                  <button type="submit" className="btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        Sending <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>
                </Magnetic>

                {status === "sent" && (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-400" role="status">
                    <CheckCircle2 size={15} /> Message sent — I’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400" role="alert">
                    Something went wrong — email me directly at{" "}
                    <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
