export const profile = {
  name: "Abhishek Rajput",
  role: "Full Stack Developer",
  location: "Agra, India",
  email: "rajputabhishek12357@gmail.com",
  resume: "/abhishek-rajput-resume.pdf",
  resumeFileName: "Abhishek-Rajput-Resume.pdf",
  summary:
    "Frontend / full-stack developer with 4.5 years of experience building responsive, high-performance web applications using React, Next.js and TypeScript. Skilled in developing API-driven frontends over GraphQL and REST, reusable component libraries, and MERN-stack applications.",
  longSummary:
    "Comfortable owning features end to end — component architecture, state management, API integration and performance tuning — and debugging tricky UI and data-flow issues across the stack.",
  stats: [
    { value: "4.5", label: "Years of experience" },
    { value: "50K+", label: "Users served" },
    { value: "05", label: "Shipped projects" },
    { value: "10+", label: "Technologies" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  /** "personal" = personal / freelance builds, shown in their own section. Defaults to client work. */
  category?: "client" | "personal";
  problem?: string;
  outcome?: string;
  liveUrl?: string;
  /** Screenshot under /public, shown on the card cover and project page. */
  image?: string;
  /** Extra grouped detail shown on the project page (e.g. admin panel, security). */
  sections?: { title: string; items: string[] }[];
};

export const isPersonal = (project: Project) => project.category === "personal";

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}

export const projects: Project[] = [
  {
    slug: "interior-design-hub",
    title: "Aluminium & glass business website",
    client: "Personal · Freelance",
    category: "personal",
    year: "2026",
    role: "Full stack design, development and testing",
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Zod",
      "JWT (jose)",
      "Playwright",
      "Vitest",
      "axe-core",
      "Docker",
      "Vercel",
    ],
    summary:
      "A glassmorphism website with a full admin panel, letting an aluminium and glass business show its work, collect quote requests and manage everything on its own.",
    problem:
      "The client sells aluminium and glass products and services but had no way to show their work online or collect enquiries. They needed a modern site they could update themselves.",
    outcome:
      "A fast, accessible and secure website that the client can run on their own, ready to hand over and move to their own server.",
    liveUrl: "https://interior-design-hub-taupe.vercel.app/",
    image: "/projects/interior-design-hub.jpg",
    highlights: [
      "Server rendering with cached catalogue data that refreshes as soon as the admin saves a change.",
      "102 end-to-end tests (Playwright) and 68 unit tests (Vitest), written from a QA and business-analyst point of view, covering every page, admin workflow and mobile layout.",
      "WCAG 2.1 AA checks with axe-core, keyboard navigation, skip links, focus trapping in dialogs, readable colour contrast and a pausable ticker.",
      "A demo mode lets the site run on Vercel before the client's database exists; going live only needs environment variables, no code changes.",
    ],
    sections: [
      {
        title: "Public website",
        items: [
          "Home, Services, Products, Projects and Contact pages, each service and product with its own page.",
          "Quote forms throughout the site, including product-specific enquiries with size options.",
          "Glassmorphism design system, scroll animations, smooth scrolling and a branded loader.",
          "Fully responsive, with a dedicated mobile menu and mobile-friendly layouts.",
        ],
      },
      {
        title: "Admin panel",
        items: [
          "Secure sign-in.",
          "Add, edit and delete services, products and projects, with image upload.",
          "Lead management with status tracking and CSV export.",
          "Business settings (contact details, WhatsApp, stats) that update across the whole site.",
        ],
      },
      {
        title: "Design process",
        items: [
          "Explored several visual directions (dark, modern, four colour themes, light, glassmorphism) as clickable prototypes before choosing the final glass style with the client.",
        ],
      },
      {
        title: "Security",
        items: [
          "Sign-in lockout after repeated failures, and rate-limited quote forms with a hidden anti-spam field.",
          "Protection against cross-site request forgery.",
          "Content-Security-Policy and HSTS headers.",
          "Checks on uploaded file types, and admin checks on every page and API.",
        ],
      },
    ],
  },
  {
    slug: "haldirams",
    title: "Shopify headless storefront",
    client: "Haldiram's India",
    year: "2025",
    role: "Frontend architecture and development",
    stack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    summary:
      "Architected a headless storefront on the Shopify Storefront API — homepage, PLP, PDP and cart, end to end.",
    highlights: [
      "Built the PLP with dynamic filtering, sorting and a variant-aware price range slider.",
      "Managed cart and checkout state via Redux with consistent tax and line-item totals.",
      "Integrated custom authentication and newsletter flows using the Shopify Admin API and Metaobjects.",
      "Built reusable, responsive UI components (modals, drawers) optimized for mobile and performance.",
    ],
  },
  {
    slug: "aditya-birla-capital",
    title: "CMS-based platform",
    client: "Aditya Birla Capital",
    year: "2024",
    role: "Frontend lead, mentoring junior developers",
    stack: ["Next.js", "TypeScript", "Strapi", "GraphQL", "Tailwind CSS"],
    summary:
      "Frontend development of a CMS-based platform serving 50K+ users, from architecture to delivery, while mentoring a team of junior developers.",
    highlights: [
      "Built scalable, reusable modules with a maintainable component architecture.",
      "Translated Strapi-driven content models into dynamic, editable UI sections alongside content and design teams.",
      "Optimized page-load performance and SEO via SSR and static generation in Next.js.",
    ],
  },
  {
    slug: "medica",
    title: "Insurance platform",
    client: "Medica",
    year: "2026",
    role: "Frontend developer",
    stack: ["React", "TypeScript", "Jahia CMS", "Tailwind CSS"],
    summary:
      "Developed frontend UI for an insurance platform built on Jahia CMS, creating reusable React components integrated with Jahia's module system and design tokens.",
    highlights: [
      "Built a sign-in dropdown and drawer component system with cross-island state communication via a browser event bus.",
      "Used CSS-toggled visibility for Island compatibility.",
      "Delivered responsive, token-based styling, translating design specs into consistent, maintainable UI.",
    ],
  },
  {
    slug: "ems",
    title: "Employee management system",
    client: "Internal product",
    year: "2023",
    role: "UI developer",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST"],
    summary:
      "Built UI components for an internal EMS covering timesheet entry, task tracking and approval workflows.",
    highlights: [
      "Integrated REST APIs for data fetching and form submissions with client-side validation and error handling.",
      "Delivered responsive, accessible, performance-optimized layouts.",
      "Handled data-heavy views like timesheet tables and dashboards.",
    ],
  },
];

export const skillGroups = [
  { title: "Core", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Redux"] },
  { title: "Backend", items: ["Node.js", "Express", "MongoDB", "GraphQL"] },
  { title: "Platforms", items: ["Shopify", "Strapi", "Jahia (basic)", "REST APIs"] },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Agra University, Agra",
};

export const languages = ["Hindi", "English"];

export const linkedinUrl = "https://www.linkedin.com/in/abhishek-r-7b0937241/";

export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: linkedinUrl },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Frontend architecture",
    description:
      "Component libraries and app structure that stay maintainable as the product and the team grow.",
    points: ["Design systems", "Reusable components", "State management"],
  },
  {
    title: "API-driven interfaces",
    description:
      "Frontends wired to GraphQL and REST backends, with careful attention to loading, error and empty states.",
    points: ["GraphQL", "REST", "Data flow debugging"],
  },
  {
    title: "Headless commerce and CMS",
    description:
      "Storefronts and content platforms on Shopify, Strapi and Jahia, built so editors can work without a developer.",
    points: ["Shopify Storefront API", "Strapi", "Jahia modules"],
  },
  {
    title: "Performance and SEO",
    description:
      "SSR and static generation in Next.js, plus the profiling work that turns a slow page into a fast one.",
    points: ["SSR / SSG", "Core Web Vitals", "Accessibility"],
  },
];

export const timeline = [
  {
    period: "2026 — present",
    role: "Full stack developer",
    org: "Medica insurance platform",
    detail:
      "Building frontend UI on Jahia CMS with reusable React components, design tokens and cross-island state.",
  },
  {
    period: "2024 — 2025",
    role: "Frontend lead",
    org: "Aditya Birla Capital · Haldiram's India",
    detail:
      "Owned CMS and commerce frontends serving 50K+ users, from architecture to delivery, while mentoring juniors.",
  },
  {
    period: "2022 — 2023",
    role: "UI developer",
    org: "Internal products",
    detail:
      "Built data-heavy dashboards, timesheet tables and approval workflows against REST APIs.",
  },
];

export const approach = [
  {
    title: "Own it end to end",
    body: "Component architecture, state, API integration and performance tuning — not just the markup.",
  },
  {
    title: "Build for the next developer",
    body: "Predictable structure and reusable pieces, so features stay cheap to add six months from now.",
  },
  {
    title: "Debug what others avoid",
    body: "Tricky UI and data-flow issues across the stack are the part of the job I actually enjoy.",
  },
];
