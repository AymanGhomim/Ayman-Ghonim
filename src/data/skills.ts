import type { SkillGroup } from "@/types/portfolio";

/**
 * Skills grouped by discipline — the Expertise section splits
 * DESIGN × DEVELOPMENT automatically from this data.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "design",
    title: "Design",
    side: "design",
    skills: [
      "UI Design",
      "UX Principles",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
      "User Research",
      "Usability Testing",
      "Visual Design",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    id: "development-core",
    title: "Development — Core",
    side: "development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "jQuery",
    ],
  },
  {
    id: "development-ecosystem",
    title: "Development — Ecosystem",
    side: "development",
    skills: [
      "Redux / Redux Toolkit",
      "Context API",
      "Zustand",
      "React Router",
      "Custom Hooks",
      "REST APIs",
      "Axios / Fetch",
      "JWT Authentication",
    ],
  },
  {
    id: "styling",
    title: "Development — Styling & UI",
    side: "development",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "CSS Modules",
      "Styled Components",
      "Flexbox / Grid",
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Quality",
    side: "tools",
    skills: [
      "Git & GitHub",
      "Vite",
      "Webpack",
      "npm / yarn",
      "Jest",
      "React Testing Library",
      "Code Splitting",
      "Lazy Loading",
      "Accessibility (A11y)",
      "Agile / Scrum",
    ],
  },
];
