import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { personal } from "@/data/personal";
import { Magnetic } from "@/components/animation/Magnetic";
import { applyLocalLanguage, type SiteLanguage } from "@/i18n/localTranslation";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Minimal navbar — transparent at top, blurred with hairline on scroll. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<SiteLanguage>("en");

  const toggleLanguage = () => {
    const nextLanguage: SiteLanguage = language === "ar" ? "en" : "ar";
    setLanguage(nextLanguage);
    applyLocalLanguage(nextLanguage);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: scrolled ? "rgba(5,5,5,0.72)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
            aria-label={`${personal.name} — home`}
          >
            {personal.initials}
            <span className="text-gradient">.</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn-ghost inline-flex items-center gap-2 !px-4 !py-2.5 text-sm"
              aria-label="Translate website to Arabic"
            >
              <Languages size={15} />
              {language === "ar" ? "English" : "عربي"}
            </button>
            <Magnetic strength={0.2}>
              <a href="#contact" className="btn-ghost !px-5 !py-2.5 text-sm">
                Let’s Talk
              </a>
            </Magnetic>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-hover)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[rgba(5,5,5,0.96)] px-8 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3"
                  >
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-[var(--accent-from)]">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="label-mono mt-12"
            >
              {personal.title}
            </motion.p>
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="btn-ghost mt-6 inline-flex w-fit items-center gap-2 !px-5 !py-3"
            >
              <Languages size={16} />
              {language === "ar" ? "Switch to English" : "ترجمة الموقع للعربية"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
