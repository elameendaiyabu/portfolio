import type { Experience } from "./types";

// Newest first.
export const experience: Experience[] = [
  {
    start: "Jul 2025",
    end: "Present",
    role: "Full-Stack Developer",
    company: "LightGate Solutions",
    location: "Abuja, Nigeria",
    bullets: [
      "Built and maintained modules of a web-based ERP system used by organisations to manage day-to-day operations across finance, inventory, HR, and procurement.",
      "Developed responsive front-end interfaces and integrated them with backend REST APIs for real-time record management and reporting.",
      "Designed and optimised relational database schemas and queries, improving the performance of reporting and data-heavy screens.",
      "Implemented role-based access control so each department only saw and edited the records relevant to it.",
      "Work with the product and QA teams through code reviews, testing, and deployment to ship features on schedule.",
    ],
    tags: ["Next.js", "React", "REST APIs", "PostgreSQL", "RBAC"],
  },
  {
    start: "Jan 2025",
    end: "Dec 2025",
    role: "Audit Intern",
    company: "Nigerian Midstream and Downstream Petroleum Regulatory Authority",
    location: "Abuja, Nigeria",
    bullets: [
      "Assisted in managing, dispatching, and tracking audit files across departments.",
      "Reviewed and verified paper records and supporting documents for accuracy.",
      "Organized and maintained audit documentation for easy retrieval.",
    ],
  },
  {
    start: "Jun 2023",
    end: "Oct 2023",
    role: "User Support Intern",
    company: "Securities & Exchange Commission",
    location: "Abuja, Nigeria",
    bullets: [
      "Provided first-line IT support, resolving basic technical issues for staff.",
      "Assisted with account setup, password resets, and access requests.",
      "Installed and updated software, performing routine system checks.",
    ],
  },
  {
    start: "Jun 2022",
    end: "Oct 2022",
    role: "IT Support Intern",
    company: "Nigerian Communications Commission",
    location: "Abuja, Nigeria",
    bullets: [
      "Provided first-line technical support, troubleshooting hardware, software, and network issues.",
      "Assisted with LAN connectivity, IP configuration, and internet access problems.",
    ],
  },
];
