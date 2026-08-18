/**
 * Portfolio data models.
 * Every section renders from these types — add content in src/data/*
 * and the UI updates automatically. Empty arrays hide their section.
 */

export type ProjectRole = "UI/UX Design" | "Front-End Development";
export type ProjectCategory = "UI/UX Design" | "Front-End Dev" | "Full Stack";

export interface PortfolioProject {
  id: string;
  title: string;
  slug?: string;
  summary?: string;
  description?: string;
  roles?: ProjectRole[];
  tags?: ProjectCategory[];
  technologies?: string[];
  categories?: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
  /* Future case-study fields — render only when provided */
  challenge?: string;
  solution?: string;
  designProcess?: string;
  developmentProcess?: string;
  results?: string;
  gallery?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  period?: string;
  description?: string;
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  title: string;
  period?: string;
  description?: string;
  details?: string[];
  topics?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  side: "design" | "development" | "tools";
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  details?: string[];
  preview?: "design" | "development" | "design-code" | "integration" | "refinement";
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  handle?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  id: string;
  title: string;
  stepIds: string[];
  statement: string;
  railLabel: string;
}
