import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["HTML5", "JavaScript", "TypeScript", "PHP", "Python"] },
  { label: "Frameworks", items: ["React", "Next.js", "Angular", "Vue.js", "TanStack Start"] },
  {
    label: "Backend",
    items: ["Node.js", "PHP", "Python", "REST APIs", "MySQL", "PostgreSQL", "Role-Based Access Control"],
  },
  {
    label: "Infrastructure",
    items: ["Git", "Linux", "Docker", "CI/CD", "Deployment", "Networking (LAN, IP)"],
  },
];
