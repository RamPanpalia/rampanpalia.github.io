// All site content lives here. Edit this file — not the components.
// Source of truth: Ram_Panpalia_Resume_5.pdf

export const links = {
  github: "https://github.com/RamPanpalia",
  linkedin: "https://www.linkedin.com/in/ram-panpalia/",
  email: "panpaliaram@gmail.com",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    year: "2023",
    company: "Seller Setu",
    role: "ReactJS Developer Intern",
    period: "Apr 2023 – Sep 2023 · Remote",
    tech: ["React"],
    bullets: [
      "Single-handedly built the startup's landing page, deployed at sellersetu.in.",
      "Built a dashboard to manage and analyze shops and sell products on the ONDC platform — add products, track inventory, edit shop details.",
      "Built billing software with sales dashboards, charts, and purchase history.",
      "Built a college-side dashboard to track food given on credit to students.",
    ],
  },
  {
    year: "2024",
    company: "Happay (CRED)",
    role: "SDE Intern (Django)",
    period: "Jul 2024 – Dec 2024 · Bangalore",
    tech: ["Python", "Django", "Redis", "Celery"],
    bullets: [
      "Redesigned User Access Management (UAM) APIs for HDFC Bank; added re-captcha to the operations login portal.",
      "Resolved race conditions during model creation using Redis locks to prevent duplicate records.",
      "Wrote multithreaded Python scripts for task automation; optimized existing APIs to cut runtime.",
      "Built Celery tasks on cron to automate workflows — purchase-order expiry reminders and status updates.",
      "Added notifications for critical events and automated developer email alerts.",
    ],
  },
  {
    year: "2025",
    company: "Zaggle",
    role: "Software Engineer",
    period: "May 2025 – Apr 2026 · Pune",
    tech: ["Java", "Spring Boot", "Vert.x", "Node.js", "AWS SQS", "Kafka", "S3", "Puppeteer", "React"],
    bullets: [
      "Designed a reusable Node.js PDF-generation microservice (HTML → PDF via Puppeteer) consumed by multiple backend services.",
      "Built event-driven flow: consumed SQS events with dynamic data and S3 pre-signed template URLs, generated PDFs, published results to Kafka.",
      "Evaluated an AWS Lambda approach; migrated to a long-running service to eliminate cold-start latency.",
      "Implemented role-based access control (RBAC) across multiple modules to secure APIs and workflows.",
      "Delivered client-specific customizations (AWL, Trident, Bajel, DTDC) while keeping the core product stable.",
      "Translated Figma designs into pixel-perfect HTML templates for hotel and flight tickets.",
    ],
  },
  {
    year: "2026",
    company: "Jodo",
    role: "SDE (Django)",
    period: "Apr 2026 – Present · Bangalore",
    tech: ["Python", "Django"],
    bullets: ["Working on the backend of the Collect mobile app."],
    current: true,
  },
];

export const projects = [
  {
    name: "cviere",
    status: "In Development",
    tech: ["MERN", "Next.js", "Typst", "LangChain", "RAG", "Docker", "GitHub Actions", "AWS", "nginx"],
    features: [
      "AI-personalized resume content (RAG)",
      "Automated Typst PDF pipeline",
      "Hosted at user.cviere.com subdomains",
      "Secure auth across the platform",
    ],
    description:
      "Full-stack resume builder — create, manage, and host resumes on personalized subdomains, with content generated from your own data via LangChain + OpenAI/Gemini APIs.",
  },
  {
    name: "this-website",
    status: "Live",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    features: [
      "One data file drives every section",
      "Zero backend, zero tracking",
      "Deployed on GitHub Pages",
    ],
    description: "The site you're looking at. Static files, nothing else.",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "C", "JavaScript"] },
  {
    label: "Frameworks",
    items: ["Django", "Spring Boot", "Vert.x", "Node.js", "React", "React Native"],
  },
  {
    label: "DevOps / Cloud",
    items: ["AWS EC2", "Lambda", "S3", "Docker", "Jenkins", "Git"],
  },
  { label: "Databases", items: ["MongoDB", "Firebase", "SQL", "Redis"] },
];

export const education = {
  degree: "B.E. — Birla Institute of Technology and Science, Pilani",
  period: "Nov 2021 – May 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Discrete Structures",
    "Operating Systems",
  ],
};

export const achievements = [
  { label: "Codeforces", value: "Specialist · 1530 rating" },
  { label: "CodeChef", value: "4★ · 1849 rating" },
  { label: "LeetCode", value: "600+ solved · 1800+ rating · 150-day streak · 11 badges" },
  { label: "JEE Mains", value: "Top 2% of 8.5 lakh students" },
  { label: "MHT-CET", value: "Top 1% of 5.5 lakh students" },
];

export const learning = ["Distributed Systems", "Kafka", "LLM Agents & RAG", "AI Infrastructure"];

export const thoughts = [
  "How can memory work inside LLMs?",
  "How would I build Gmail?",
  "Can Kafka replace REST here?",
  "Can this architecture survive 10M users?",
];

export const writing = [
  { title: "Killing race conditions with Redis locks", status: "draft" },
  { title: "Lambda vs long-running services: a cold-start story", status: "draft" },
  { title: "Shipping RAG in production — notes from Cviere", status: "draft" },
];

export const systemStatus = [
  { key: "Current Role", value: "SDE @ Jodo" },
  { key: "Side Project", value: "Cviere" },
  { key: "LeetCode Solved", value: "count:600", suffix: "+" },
  { key: "Codeforces", value: "Specialist · 1530" },
  { key: "CodeChef", value: "4★ · 1849" },
  { key: "Education", value: "BITS Pilani '25" },
  { key: "Learning", value: "LLM Agents & RAG" },
  { key: "Location", value: "Bangalore, IN" },
];

export const openTo = [
  "Backend Engineering",
  "Distributed Systems",
  "Startups",
  "Building products",
];
