import type { ServiceItem, ProcessStage, ProcessStep } from "@/types/portfolio";

/**
 * Services — real capabilities across both disciplines.
 */
export const services: ServiceItem[] = [
  {
    id: "uiux-design",
    title: "Product UI/UX",
    description:
      "Clear, thoughtful interfaces designed around real user journeys and product goals.",
    details: ["User Flows", "UI Design", "Interactive Prototypes"],
    preview: "design",
  },
  {
    id: "react-development",
    title: "Frontend Development",
    description:
      "Production-ready web interfaces built to be responsive, scalable and easy to use.",
    details: ["React", "Reusable Components", "Responsive Frontend"],
    preview: "development",
  },
  {
    id: "design-to-code",
    title: "Design to Code",
    description:
      "Turning approved designs into accurate, responsive and polished frontend experiences.",
    details: ["Design Fidelity", "Responsive Implementation", "UI Consistency"],
    preview: "design-code",
  },
  {
    id: "api-integration",
    title: "Product Integration",
    description:
      "Connecting interfaces with REST APIs, application state and real backend data flows.",
    details: ["REST APIs", "State Management", "Frontend–Backend Flow"],
    preview: "integration",
  },
  {
    id: "frontend-refinement",
    title: "Frontend Refinement",
    description:
      "Improving performance, responsiveness, interface consistency and frontend stability.",
    details: ["Performance", "Responsive UI", "Maintenance"],
    preview: "refinement",
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

/** Three editorial phases composed from the six real process steps above. */
export const processStages: ProcessStage[] = [
  {
    id: "understand",
    title: "Understand",
    stepIds: ["discover", "define"],
    statement: "Understand the product, users and constraints before shaping the solution.",
    railLabel: "Idea",
  },
  {
    id: "shape",
    title: "Shape",
    stepIds: ["design", "prototype"],
    statement: "Turn product direction into a clear interface and test the experience early.",
    railLabel: "Interface",
  },
  {
    id: "build",
    title: "Build",
    stepIds: ["develop", "ship"],
    statement: "Build the frontend, integrate real workflows and refine the final experience.",
    railLabel: "Product",
  },
];
