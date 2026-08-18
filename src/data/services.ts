import type { ServiceItem, ProcessStep } from "@/types/portfolio";

/**
 * Services — real capabilities across both disciplines.
 */
export const services: ServiceItem[] = [
  {
    id: "uiux-design",
    title: "UI/UX Design & Prototyping",
    description:
      "User-friendly designs, wireframes and interactive prototypes using Figma while applying best UI/UX principles.",
  },
  {
    id: "react-development",
    title: "React Web Application Development",
    description:
      "Fast, scalable and interactive web applications using React.js, Hooks, reusable components and modern UI architecture.",
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description:
      "Clean, fully responsive user interfaces using HTML, CSS, Flexbox, Grid and modern design techniques across all screen sizes.",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "RESTful API integration using Axios and Fetch — data flow, state management and seamless communication between frontend and backend.",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Lazy loading, code splitting, memoization and optimized rendering for smooth user experiences.",
  },
  {
    id: "maintenance",
    title: "Frontend Maintenance & Bug Fixing",
    description:
      "Fixing UI issues, improving responsiveness, updating components and maintaining clean, stable, optimized frontend code.",
  },
];

/**
 * Process — generic working method from idea to shipped product.
 * Describes how work gets done, not invented achievements.
 */
export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    description: "Understand the goal, the users and the constraints before any pixel or line of code.",
  },
  {
    id: "define",
    title: "Define",
    description: "Structure the problem — user flows, content hierarchy and a clear scope.",
  },
  {
    id: "design",
    title: "Design",
    description: "Wireframes evolve into a polished interface with a consistent visual language.",
  },
  {
    id: "prototype",
    title: "Prototype",
    description: "Interactive prototypes in Figma to validate the experience early.",
  },
  {
    id: "develop",
    title: "Develop",
    description: "The design becomes a responsive, accessible front-end with React and clean architecture.",
  },
  {
    id: "ship",
    title: "Ship",
    description: "Optimize performance, integrate APIs and deliver a final digital experience.",
  },
];
