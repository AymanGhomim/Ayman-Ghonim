import type { ExperienceItem } from "@/types/portfolio";

/**
 * Work experience — add new entries here and the timeline updates.
 * Example:
 * {
 *   id: "pentak",
 *   company: "Penta-K",
 *   role: "Front-End Developer",
 *   period: "2026 — Present",
 *   description: "...",
 *   technologies: ["React", "TypeScript"],
 * }
 */
export const experience: ExperienceItem[] = [
  {
    id: "penta-k",
    company: "Penta-K",
    role: "Frontend Developer & UI/UX Designer",
    employmentType: "Full-time",
    location: "Kafr El Sheikh, Egypt",
    period: "Jun 2026 — Present",
    description:
      "Building responsive React interfaces and shaping UI/UX for digital products, while collaborating with design and back-end teams to connect API-driven features into clear, user-focused experiences.",
    technologies: ["React.js", "HTML5", "UI/UX Design"],
  },
  {
    id: "frontend-developer",
    company: "Independent / Freelance",
    role: "Front-End Developer & UI/UX Designer",
    period: "2024 — Present",
    description:
      "Taking freelance products from user flows and UI/UX design through responsive React implementation, REST API integration and polished delivery; applying Node.js backend foundations where the project requires server-side work.",
    technologies: ["UI/UX Design", "Figma", "React"],
  },
];
