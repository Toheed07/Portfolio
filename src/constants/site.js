export const SITE_URL = "https://toheedjamaal.com";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const socials = {
  email: "toheedj@toheedjamaal.com",
  linkedin: "https://www.linkedin.com/in/toheedjamaal",
  github: "https://github.com/Toheed07",
  resume: "/resume.pdf",
};

export const experiences = [
  {
    title: "Backend Engineer",
    company: "BoardCerts",
    href: "https://www.boardcerts.com/",
    date: "Jan 2025 — Present",
    points: [
      "Build and maintain backend services and APIs for a U.S. nursing board certification exam preparation platform.",
      "Develop automation that streamlines content production and improves operational efficiency.",
      "Design and deliver backend functionality supporting core learning and assessment workflows.",
      "Improve platform performance, reliability, and scalability across production systems.",
      "Collaborate with product stakeholders to design and ship features for a growing education platform.",
    ],
  },
  {
    title: "Backend Developer",
    company: "PanduAI",
    href: "https://www.linkedin.com/company/pandu-ai",
    date: "Jun 2024 — Oct 2024",
    points: [
      "Shipped an AI video platform on Azure with OpenAI, Stability AI, and ElevenLabs, plus Celery queues and live progress.",
      "Automated lecture videos from Google Slides with recursive script generation for long-form content.",
    ],
  },
  {
    title: "Software Developer",
    company: "Dispatch For You",
    href: "https://dispatchforyou.com/",
    date: "Jun 2023 — Apr 2024",
    points: [
      "Cut server load 30-50% with server-side pagination.",
      "Reduced image sizes 80-90% and moved storage to AWS.",
      "Replaced Firebase auth with Cognito via AWS Amplify UI.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Woxsen University",
    href: "https://woxsen.edu.in/",
    date: "Dec 2023 — Feb 2024",
    points: [
      "Built APIs with user-defined filters and a notification system for university research projects.",
    ],
  },
];

export const projects = [
  {
    name: "E-commerce backend",
    description:
      "Microservices for catalog, cart, orders, payments, and notifications - Node.js, NGINX, Docker, MongoDB, GitHub Actions.",
    href: "https://github.com/Toheed07/Scalable-E-Commerce-Platform",
  },
  {
    name: "Database backup utility",
    description:
      "CLI for backup and restore of MongoDB and PostgreSQL, with compression, encryption, and logging.",
    href: "https://github.com/Toheed07/Database-Backup-Utility",
  },
];

export const skillGroups = [
  {
    heading: "GenAI",
    items: [
      "Generative AI",
      "RAG",
      "Agentic systems",
      "Prompt engineering",
      "Multi-LLM orchestration",
    ],
  },
  {
    heading: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"],
  },
  {
    heading: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    heading: "Cloud & infra",
    items: ["AWS", "Azure", "Docker", "GitHub Actions", "Celery", "NGINX"],
  },
];
