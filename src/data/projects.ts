import type { PortfolioProject } from "@/types/portfolio";

/**
 * Selected work — real projects with real screenshots and links.
 * To add a project: append an object here. Missing links simply
 * don't render a button. `roles` stays empty until confirmed.
 */
export const projects: PortfolioProject[] = [
  {
    id: "eltamalawy",
    title: "Eltamalawy Learning Platform",
    categories: ["Web Application", "E-Learning"],
    technologies: ["Next.js", "React"],
    description:
      "End-to-end design and front-end development of an Arabic e-learning platform for courses, training and assessments, bringing students, teachers and administrators together in one organized experience.",
    image: "/projects/eltamalawy-fullpage.png",
    liveUrl: "https://eltamalawy.penta-k.com/",
    behanceUrl: "https://www.behance.net/gallery/254001581/ElTamalawy-UIUX-Frontend-Case-Study",
    roles: ["UI/UX Design", "Front-End Development"],
    featured: true,
  },
  {
    id: "penta-k",
    title: "PENTA-K Digital Product Studio",
    categories: ["Corporate Website", "Digital Product Studio"],
    technologies: ["Next.js", "React"],
    description:
      "Digital product studio website presenting PENTA-K's work across mobile apps, websites, dashboards and management systems for startups and growing businesses.",
    image: "/projects/penta-k-homepage.png",
    liveUrl: "https://penta-k.com/en",
    behanceUrl: "https://www.behance.net/gallery/253954651/PENTA-K-Digital-Product-Studio-UIUX-Case-Study",
    roles: ["UI/UX Design", "Front-End Development"],
    featured: true,
  },
  {
    id: "exmpex-academy",
    title: "Exmpex Academy",
    categories: ["Web Application"],
    technologies: ["React"],
    description:
      "Responsive academy platform with a clear, structured interface for discovering learning content and navigating educational resources across devices.",
    image: "/projects/exmpex-academy.png",
    liveUrl: "https://exmpex-academy.vercel.app/",
    roles: [],
    featured: true,
  },
  {
    id: "one-smash",
    title: "One Smash",
    categories: ["Web Design"],
    technologies: ["React"],
    description:
      "Energetic sports-focused website combining bold visual direction with responsive React components and a streamlined browsing experience.",
    image: "/projects/one-smash.png",
    liveUrl: "https://one-smash.vercel.app/",
    roles: [],
    featured: true,
  },
  {
    id: "movie-app",
    title: "Movie App",
    categories: ["Web Application"],
    technologies: ["React", "REST API"],
    description:
      "Responsive movie application that integrates a movie REST API to display trending and popular titles, with dynamic routing for detail pages and reusable components following clean code practices.",
    image: "/projects/movie-app.png",
    liveUrl: "https://aymanghomim.github.io/Movie-App/",
    roles: [],
    featured: true,
  },
  {
    id: "bakery-website",
    title: "Bakery Website",
    categories: ["Web Design"],
    technologies: ["React"],
    description:
      "Modern, fully responsive bakery website built with reusable React components for layout and product sections, applying accessibility and performance best practices.",
    image: "/projects/bakery-website.png",
    liveUrl: "https://bakery-website-lovat.vercel.app/",
    roles: [],
    featured: true,
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    categories: ["Web Application"],
    technologies: ["React"],
    description:
      "Responsive e-commerce experience designed around clear product discovery, intuitive navigation and reusable React components.",
    image: "/projects/ecommerce-website.png",
    liveUrl: "https://bakery-website-lovat.vercel.app/",
    roles: [],
  },
  {
    id: "car-shop",
    title: "Car-Shop",
    categories: ["Web Design"],
    technologies: ["React"],
    description:
      "Premium automotive storefront with an immersive dark interface, responsive vehicle showcases and focused shopping journeys.",
    image: "/projects/car-shop.png",
    liveUrl: "https://aymanghomim.github.io/Car-Shop/",
    roles: [],
  },
  {
    id: "phalastine-website",
    title: "Phalastine Website",
    categories: ["Web Design"],
    description:
      "Editorial-style cultural website that uses expressive imagery, strong typography and responsive layouts to tell a focused visual story.",
    image: "/projects/phalastine-website.png",
    liveUrl: "https://aymanghomim.github.io/Phalastine/",
    roles: [],
  },
  {
    id: "al-thawra-website",
    title: "Al-Thawra Website",
    categories: ["Web Design"],
    description:
      "Luxury motorcycle showcase with a cinematic visual direction, bold product presentation and a responsive browsing experience.",
    image: "/projects/al-thawra-website.png",
    liveUrl: "https://aymanghomim.github.io/Al-Thawra-Luxury-Motocycles/",
    roles: [],
  },
];
