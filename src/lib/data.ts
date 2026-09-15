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
    { value: "08", label: "Shipped projects" },
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
  /** Tall phone screenshot under /public, shown in a phone frame on the project page. */
  mobileImage?: string;
  /** Short line shown under the title on the project page. */
  tagline?: string;
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
    slug: "aureus-glass-aluminium",
    title: "Aureus Glass & Aluminium",
    client: "Personal · Freelance",
    category: "personal",
    year: "2026",
    role: "Design and full stack development",
    tagline: "A premium, conversion-focused website for an architectural glass and aluminium company.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Lucide React",
      "Vercel",
    ],
    summary:
      "A glassmorphism-inspired website with a searchable product catalogue, filterable project gallery and a WhatsApp enquiry flow for an architectural glass and aluminium company.",
    problem:
      "Aureus Glass & Aluminium specialises in architectural glass, aluminium façades, windows, doors, partitions, cladding and bespoke interiors. As a traditional business, it needed a digital presence that could showcase its work, explain technical offerings clearly and turn visitors into qualified enquiries.",
    outcome:
      "A polished website that lets visitors explore specifications, applications, benefits and project images, then enquire through a fast, familiar WhatsApp workflow.",
    highlights: [
      "Conversion: a WhatsApp enquiry flow with validated customer details, so leads arrive in a channel the business already uses.",
      "SEO: sitemap, robots.txt, Open Graph, Twitter cards, JSON-LD structured data and per-product metadata.",
      "Accessibility: keyboard navigation, visible focus states, ARIA labels, an accessible lightbox and reduced-motion support.",
      "Resilience: loading states, error boundaries, a custom 404 page and responsive layouts throughout.",
    ],
    sections: [
      {
        title: "Public website",
        items: [
          "Responsive marketing site with dedicated pages for products, projects, gallery, testimonials and contact.",
          "Glassmorphism-inspired visual identity, with Framer Motion animations.",
          "Contact form with React Hook Form and Zod validation.",
        ],
      },
      {
        title: "Product catalogue",
        items: [
          "Searchable and filterable product catalogue.",
          "Dynamic product detail pages with specifications, benefits, applications, project images and SEO metadata.",
          "Print-optimised catalogue for PDF export.",
        ],
      },
      {
        title: "Projects & enquiries",
        items: [
          "Filterable project gallery with an accessible lightbox.",
          "Testimonials to build trust before enquiry.",
          "WhatsApp enquiry flow with validated customer details.",
        ],
      },
      {
        title: "Tech stack",
        items: [
          "Frontend — Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS.",
          "Motion & icons — Framer Motion, Lucide React.",
          "Forms — React Hook Form, Zod.",
          "Hosting — Vercel.",
        ],
      },
    ],
  },
  {
    slug: "isha-photography",
    title: "Isha Photography",
    client: "Personal · Freelance",
    category: "personal",
    year: "2026",
    role: "Design direction, full stack development and CMS",
    tagline: "A wedding photography studio site and a studio admin the photographer can run.",
    stack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Server Actions",
      "Edge middleware",
      "sharp",
      "next/image",
      "Playwright",
    ],
    summary:
      "A glassmorphism marketing site and custom studio admin for a wedding photographer — six service landing pages, a films page, and an enquiry inbox, gallery manager and pricing editor.",
    problem:
      "The photographer had good work but a single-page starter-template site: stock headings, a gallery of watermarked promo posters, and a contact section that was three social icons and no form. Enquiries arrived through Instagram DMs and got lost. They needed a site a couple could find in search, understand in thirty seconds and enquire through — and a way to keep it up to date without touching code.",
    outcome:
      "16 public routes and 8 admin screens: a lead-capture site the photographer can manage on their own, with the database seam ready to connect.",
    highlights: [
      "Performance: uploads are validated, EXIF-rotated, resized to 2000px and re-encoded — a 12MB frame off a card becomes about 1MB — and served through next/image.",
      "Architecture: content lives in one editable module and the data layer sits behind a single interface, so a database drops in without touching a page.",
      "Quality: every route driven in a real browser at 1440px and 390px, which surfaced four bugs no diff review would have caught.",
      "Accessibility: skip link, visible focus states and a keyboard-operable admin.",
      "Security: upgraded Next.js from 15.1.3 to 15.5.25, closing published advisories including middleware authorization bypass, SSRF via redirect handling and cache poisoning.",
    ],
    sections: [
      {
        title: "Public website",
        items: [
          "Five marketing pages, plus six service pages — weddings, pre-wedding, haldi/mehndi/sangeet, birthdays, corporate and portraits — each with its own URL, headline, gallery, price and FAQs.",
          "Service pages cross-link to the two services clients ask about alongside them.",
          "A films page covering the three cuts of a wedding day, how they're made, and the same-day edit as an add-on.",
          "A six-field enquiry form with an event-type chooser that files each lead in the admin inbox.",
        ],
      },
      {
        title: "Studio admin",
        items: [
          "Enquiries with status tracking and one-tap reply.",
          "Galleries with drag-and-drop photo upload into named categories.",
          "A journal, plus editable prices and studio details.",
          "Sidebar on desktop and a bottom bar on a phone.",
        ],
      },
      {
        title: "Design process",
        items: [
          "Built ten theme directions and five interface-style studies (skeuomorphic, neobrutalist, claymorphic, minimal, glass) as complete home pages with the same copy and photographs.",
          "Chose frosted translucent panels over the photographs and blurred colour fields, so the photographs carry the page.",
          "Hierarchy runs on type weight rather than size — one family, Outfit, from 200 to 500.",
          "Every frosted surface has an @supports fallback to a solid panel, so the design degrades instead of turning invisible.",
        ],
      },
      {
        title: "Engineering notes",
        items: [
          "Uploads 404'd — Next indexes public/ at startup, so uploads are now served through an API route that reads per request.",
          "The public portfolio read the seed file directly, so admin changes never appeared; both now read the same store.",
          "A slug pattern attribute that newer Chrome rejects left fields with no validation at all.",
          "An email field holding a placeholder silently blocked the whole settings form from saving.",
        ],
      },
      {
        title: "Tech stack",
        items: [
          "Frontend — Next.js 15 (App Router), React 19, Tailwind CSS, next/image.",
          "Backend — Server Actions, API routes, Edge middleware.",
          "Images — sharp for resizing, EXIF rotation and re-encoding.",
          "Testing — Playwright.",
        ],
      },
    ],
  },
  {
    slug: "learnverse",
    title: "Learnverse",
    client: "Personal project",
    category: "personal",
    year: "2026",
    role: "Full stack design and development",
    tagline: "Learn the concept. Then answer the interview question.",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "MongoDB Atlas",
      "Mongoose 9",
      "Auth.js",
      "Claude · OpenAI · Gemini",
      "Vercel",
    ],
    summary:
      "A bilingual (English / Hinglish) learning platform where every concept comes with a daily-life analogy, runnable code, a quiz and the interview question it turns into.",
    problem:
      "Most programming material is written in English, but many developers in India understand ideas faster in Hinglish. Tutorials also tend to stop at theory — they rarely connect a concept to real life, to working code, or to how it's asked in an interview.",
    liveUrl: "https://learnverse-one.vercel.app/",
    image: "/projects/learnverse-home.png",
    mobileImage: "/projects/learnverse-mobile-swipe.png",
    highlights: [
      "Provider-agnostic AI layer — one interface over Claude, OpenAI and Gemini, with a demo mode when no key is configured. Resolution order: user's key → server key → demo.",
      "Encrypted secret storage — API keys encrypted at rest and exposed only as masked hints.",
      "Bilingual data model — content fields migrated from plain strings to { english, hinglish } with a backward-compatible fallback, so the migration shipped without downtime.",
      "AI-assisted content backfill — a resumable script that translated 1,000+ legacy fields, rotating across models as each free-tier daily quota ran out.",
      "Performance — ISR with hourly revalidation on content pages; the feed orders over IDs and hydrates only the visible page instead of loading every concept.",
      "Accessibility — WCAG-audited with axe in light and dark mode, visible focus states, 44px touch targets and reduced-motion support.",
      "Mobile QA — overflow audited at 320px and 375px on a production build; fixed a React Suspense boundary that left the navigation invisible on dynamically rendered pages.",
    ],
    sections: [
      {
        title: "Every concept page, five parts",
        items: [
          "A plain-language explanation, switchable between English and Hinglish.",
          "A daily-life analogy — caching as dal cooked in advance at a dhaba, a content repository as your phone's file manager.",
          "An interactive code playground.",
          "A quiz.",
          "The interview question the concept turns into.",
        ],
      },
      {
        title: "Features",
        items: [
          "Bilingual content — a global EN / Hinglish toggle across the UI and course content.",
          "46 courses, from JavaScript and React to System Design, DBMS, Docker and MLOps.",
          "2,402 interview questions, filterable by course and difficulty, plus mock interviews.",
          "Code challenges with test cases that run in a sandboxed Web Worker in the browser — no code is sent to a server.",
          "7 career roadmaps — Frontend, Backend, Full Stack, MERN, PERN, DevOps, AI Engineer.",
          "Swipeable learning cards and a feed built for phones, with a bottom tab bar.",
          "AI tools — explain a topic, generate a learning plan, compare courses. Users bring their own API key, encrypted with AES-256-GCM and never returned to the browser.",
          "Gamification — XP, streaks, weekly leaderboard and certificates.",
          "Personal analytics, a prompt library, share cards and dark mode.",
        ],
      },
      {
        title: "Tech stack",
        items: [
          "Frontend — Next.js 16 (App Router), React 19, Tailwind CSS v4, Font Awesome.",
          "Backend — Next.js Route Handlers, Mongoose 9, MongoDB Atlas.",
          "Auth — Auth.js (NextAuth v5), JWT sessions.",
          "AI — Claude, OpenAI and Gemini APIs.",
          "Hosting — Vercel (ISR, cron jobs).",
        ],
      },
    ],
  },
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
