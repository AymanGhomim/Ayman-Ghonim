# Ayman Ghonim — Portfolio

Personal portfolio for **Ayman Ghonim**, a UI/UX Designer and Front-End Developer based in Cairo, Egypt.

The site presents the work, capabilities and working approach behind each product — from early interface thinking to polished, production-ready frontend experiences.

## Highlights

- Editorial dark-theme portfolio with responsive layouts.
- Interactive hero with a draggable 3D project screen.
- 3D project previews with mouse drag, keyboard arrows and accessible focus states.
- Client-focused Services index with progressive hover previews.
- Process workflow organized as **Understand → Shape → Build**.
- Structured Education archive and editorial Experience section.
- Live product links and Behance case studies for selected work.
- Formspree-powered contact form with direct contact channels.
- Reduced-motion support for visitors who prefer minimal animation.

## Selected work

- **Eltamalawy** — Arabic e-learning platform; UI/UX design and front-end development.
- **PENTA-K Portfolio** — digital product studio website.
- **CALL99 Automotive Services** — multi-role platform for Admin, Customer Service, User, Provider and Ground Team experiences.
- Exmpex Academy, One Smash, Movie App, Bakery Website and other front-end projects.

Project content, images and links are maintained in `src/data/projects.ts`.

## Tech stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lenis for smooth scrolling
- Lucide React icons
- Formspree for contact form delivery

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

### Production build

```bash
npm run build
npm run preview
```

Vite generates the production output in `dist`. The included `vercel.json` configures Vercel to use that directory automatically.

### Lint

```bash
npm run lint
```

## Project structure

```text
src/
├── components/       Reusable UI, animation and section components
├── data/              Portfolio content and personal information
├── hooks/             Shared React hooks
├── sections/          Main portfolio sections
├── types/             Shared TypeScript data models
└── index.css          Global theme, responsive styles and motion details

public/
├── projects/          Project preview images
├── cv/                Ayman's CV
└── ...                Static portfolio assets
```

## Content updates

Most portfolio content is data-driven. Update the relevant file in `src/data/`:

- `projects.ts` — projects, roles, links and images.
- `experience.ts` — work history.
- `education.ts` — university and training history.
- `services.ts` — client-focused offerings and process stages.
- `personal.ts` — contact details, summary and CV path.
- `social.ts` — verified social profiles.

Keep images inside `public/` and reference them with root-relative paths such as `/projects/project-name.png`.

## Contact

- Email: [aghonim133@gmail.com](mailto:aghonim133@gmail.com)
- LinkedIn: [aymanghonim200](https://www.linkedin.com/in/aymanghonim200/)
- GitHub: [AymanGhomim](https://github.com/AymanGhomim)
- Location: Cairo, Egypt

## License

This repository contains Ayman Ghonim's personal portfolio and project assets. Please contact Ayman before reusing personal content, images or case-study material.
