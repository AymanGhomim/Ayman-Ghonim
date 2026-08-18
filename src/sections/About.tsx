import { Reveal } from "@/components/animation/Reveal";
import { AboutDetails } from "@/components/about/AboutDetails";
import { AboutHeadline } from "@/components/about/AboutHeadline";
import { DesignCodeFlow } from "@/components/about/DesignCodeFlow";
import { personal } from "@/data/personal";

/** Editorial About section focused on the connection between design and code. */
export function About() {
  return (
    <section id="about" className="about-editorial section-y relative overflow-hidden">
      <div className="about-grid" aria-hidden />

      <div className="container-x relative z-10">
        <Reveal>
          <p className="label-mono flex items-center gap-3">
            <span className="text-[#818cf8]">01</span>
            <span aria-hidden className="h-px w-10 bg-[var(--border-hover)]" />
            <span>About</span>
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-14 lg:mt-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-[clamp(4rem,8vw,9rem)]">
          <AboutHeadline />

          <div className="min-w-0 lg:pt-1">
            <Reveal delay={0.12}>
              <p className="font-display max-w-2xl text-[clamp(1.45rem,2.6vw,2.45rem)] font-medium leading-[1.18] tracking-[-0.025em] text-[var(--text-primary)]">
                I turn ideas into interfaces, and interfaces into{" "}
                <span className="text-[#818cf8]">working products.</span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 max-w-2xl space-y-4 text-[0.98rem] leading-7 text-[var(--text-secondary)] sm:text-[1.02rem]">
                {personal.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <AboutDetails />
          </div>
        </div>

        <DesignCodeFlow />
      </div>
    </section>
  );
}
