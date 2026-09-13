// Every word on the site lives here. Edit this file, not the components.
// Source of truth: Ram_Panpalia_Resume_5.pdf

export const profile = {
  name: "Ram Panpalia",
  // Drop a photo at public/ram.jpg and it appears automatically.
  // Until then the header falls back to initials — nothing breaks.
  photo: "/ram.jpg",
  initials: "RP",
  role: "Software Engineer",
  location: "Bangalore, India",
  tagline: "I build things end to end — and ship them.",
  intro: [
    "I'm a software engineer in Bangalore. What I enjoy is taking something from an empty repo to a thing people use: the schema, the API, the queue consumer, the screen it renders on, the pipeline that deploys it.",
    "So far that's meant Django and payments infrastructure at work, a PDF service that quietly runs behind several others, and a resume platform I've been building on my own.",
  ],
  // The résumé PDF is deliberately kept out of the repo (it has a phone number
  // in it). Put a redacted copy in public/ and set this to its path to turn the
  // "Résumé" links back on — they're hidden while this is null.
  resume: null,
};

export const links = {
  email: "panpaliaram@gmail.com",
  github: "https://github.com/RamPanpalia",
  linkedin: "https://www.linkedin.com/in/ram-panpalia/",
};

// Short, honest, easy to update. Change the date when you change the text.
export const now = {
  updated: "September 2026",
  items: [
    "Writing backend for the Collect app at Jodo — Python and Django.",
    "Building Cviere on the side: an AI resume builder that generates, renders and hosts your resume on your own subdomain.",
    "Reading my way into LLM agents, RAG, and how AI infrastructure actually gets put together.",
  ],
};

export const experience = [
  {
    company: "Jodo",
    role: "SDE",
    period: "Apr 2026 — Present",
    place: "Bangalore",
    current: true,
    summary: "Writing the backend for the Collect mobile app.",
    tech: ["Python", "Django"],
    // Nothing to add yet — an empty list hides the disclosure entirely.
    bullets: [],
  },
  {
    company: "Zaggle",
    role: "Software Engineer",
    period: "May 2025 — Apr 2026",
    place: "Pune",
    summary:
      "Built the PDF service the rest of the platform renders through, and the event pipeline around it.",
    tech: [
      "Java",
      "Spring Boot",
      "Vert.x",
      "Node.js",
      "Kafka",
      "AWS SQS",
      "S3",
      "Puppeteer",
      "React",
    ],
    bullets: [
      "Designed a reusable Node.js PDF-generation microservice (HTML to PDF via Puppeteer), consumed by multiple backend services.",
      "Built the event-driven flow around it: consume SQS events carrying dynamic data and S3 pre-signed template URLs, generate the PDF, publish results to Kafka.",
      "Evaluated an AWS Lambda approach and migrated to a long-running service instead, taking cold-start latency off the critical path.",
      "Implemented role-based access control across several modules to secure APIs and workflows.",
      "Delivered client-specific customisations (AWL, Trident, Bajel, DTDC) without forking the core product.",
      "Translated Figma designs into pixel-perfect HTML templates for hotel and flight tickets.",
    ],
  },
  {
    company: "Happay",
    parent: "CRED",
    role: "SDE Intern",
    period: "Jul 2024 — Dec 2024",
    place: "Bangalore",
    summary: "Access-management APIs for HDFC Bank, plus the unglamorous reliability work.",
    tech: ["Python", "Django", "Redis", "Celery"],
    bullets: [
      "Redesigned the User Access Management APIs for HDFC Bank and added re-captcha to the operations login portal.",
      "Killed a race condition in model creation with Redis locks, preventing duplicate records.",
      "Wrote multithreaded Python scripts for task automation and cut runtime on existing APIs.",
      "Built cron-scheduled Celery tasks for purchase-order expiry reminders and status updates.",
      "Added alerting for critical events and automated developer email notifications.",
    ],
  },
  {
    company: "Seller Setu",
    role: "ReactJS Developer Intern",
    period: "Apr 2023 — Sep 2023",
    place: "Remote",
    summary: "First job. Shipped the entire front end of an early-stage ONDC startup, solo.",
    tech: ["React", "JavaScript"],
    bullets: [
      "Single-handedly built the company's landing page, live at sellersetu.in.",
      "Built a dashboard for managing shops and selling on the ONDC network — products, inventory, shop details.",
      "Built billing software with sales dashboards, charts and purchase history.",
      "Built a college-side dashboard tracking food given to students on credit.",
    ],
  },
];

export const projects = [
  {
    name: "Cviere",
    status: "In development",
    href: null,
    description:
      "A resume platform, end to end. You give it your history; LangChain and the OpenAI/Gemini APIs tailor the content to a role, Typst renders it to a PDF, and the result is hosted at your own subdomain. Auth, pipeline, CI and infrastructure are all mine.",
    highlights: [
      "RAG-personalised content from your own data",
      "Automated Typst to PDF render pipeline",
      "Hosted on per-user subdomains (user.cviere.com)",
      "Dockerised, deployed via GitHub Actions behind nginx",
    ],
    tech: ["Next.js", "MongoDB", "LangChain", "Typst", "Docker", "GitHub Actions", "AWS", "nginx"],
  },
  {
    name: "PDF generation service",
    status: "In production at Zaggle",
    href: null,
    description:
      "An HTML-to-PDF microservice several backend services depend on. Events arrive over SQS with data and a pre-signed S3 template URL, Puppeteer renders, results go out on Kafka. Prototyped on Lambda first, then moved to a long-running service to get rid of cold starts.",
    highlights: [
      "Consumed by multiple services as shared infrastructure",
      "Event-driven: SQS in, Kafka out",
      "Cold starts removed by a design change, not tuning",
    ],
    tech: ["Node.js", "Puppeteer", "AWS SQS", "Kafka", "S3"],
  },
  {
    name: "This site",
    status: "Live",
    href: "https://github.com/RamPanpalia/rampanpalia.github.io",
    description:
      "Static, no backend, no tracking, no analytics. A single data file drives every section, so updating it takes a minute.",
    highlights: ["One file of content", "No tracking of any kind", "Deployed on GitHub Pages"],
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
];

export const toolkit = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "C++", "C"] },
  { label: "Backend", items: ["Django", "Spring Boot", "Vert.x", "Node.js", "Celery", "REST"] },
  { label: "Frontend", items: ["React", "Next.js", "React Native", "Tailwind"] },
  { label: "Data & messaging", items: ["SQL", "MongoDB", "Redis", "Kafka", "AWS SQS", "Firebase"] },
  {
    label: "Infra",
    items: ["AWS (EC2, Lambda, S3)", "Docker", "nginx", "Jenkins", "GitHub Actions", "Git"],
  },
];

export const education = {
  school: "Birla Institute of Technology and Science, Pilani",
  degree: "B.E.",
  period: "Nov 2021 — May 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Operating Systems",
    "Discrete Structures",
  ],
};

export const achievements = [
  { label: "LeetCode", value: "600+ solved", detail: "1800+ rating, 11 badges" },
  { label: "CodeChef", value: "4 star", detail: "1849 rating" },
  { label: "Codeforces", value: "Specialist", detail: "1530 rating" },
  { label: "JEE Mains", value: "Top 2%", detail: "of 8.5 lakh candidates" },
  { label: "MHT-CET", value: "Top 1%", detail: "of 5.5 lakh candidates" },
];

export const contact = {
  heading: "Say hello",
  body: "I'm always up for a conversation about backend work, distributed systems, or something you're building. Email is the fastest way to reach me, and I read everything.",
  openTo: ["Backend engineering", "Distributed systems", "AI infrastructure", "Early-stage teams"],
};
