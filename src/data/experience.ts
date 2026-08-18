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
      "Building responsive digital products across front-end development and interface design, while collaborating with design and back-end teams to deliver clear, user-focused experiences.",
    technologies: ["React.js", "HTML5", "UI/UX Design"],
  },
  {
    id: "frontend-developer",
    company: "Independent / Freelance",
    role: "Front-End Developer & UI/UX Designer",
    period: "2022 — Present",
    description:
      "Designing user-centered web experiences from research and wireframes through polished, responsive front-end implementation with strong usability and visual consistency.",
    technologies: ["UI/UX Design", "Figma", "React"],
  },
];
