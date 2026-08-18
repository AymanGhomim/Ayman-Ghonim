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
    company: "Penta-K · Full-time · Kafr El Sheikh, Egypt",
    role: "Frontend Developer & UI/UX Designer",
    period: "Jun 2026 — Present",
    description:
      "Developing modern, responsive web applications using React.js and related front-end technologies. Collaborating with designers and back-end developers to deliver clean, scalable and user-focused solutions with strong performance and an exceptional experience across devices.",
    technologies: ["React.js", "HTML5", "UI/UX Design"],
  },
  {
    id: "frontend-developer",
    company: "Independent / Freelance",
    role: "Front-End Developer & UI/UX Designer",
    period: "2022 — Present",
    description:
      "Designing user-centered digital experiences from research, wireframes and interactive prototypes through to polished, responsive front-end implementation. Building modern web applications with React and clean, scalable code while maintaining strong usability and visual consistency.",
    technologies: ["UI/UX Design", "Figma", "React", "JavaScript (ES6+)", "HTML", "CSS"],
  },
];
