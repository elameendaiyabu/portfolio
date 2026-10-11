import type { Project } from "./types";

// Add a project: append an object here and drop its screenshot in public/projects/.
export const projects: Project[] = [
  {
    image: "/projects/cave-erp.png",
    name: "Cave ERP",
    href: "https://cave-erp.com/",
    description: "An ERP system for organizations and teams.",
    tags: ["Next.js", "Convex", "Paystack API", "Cloudflare R2", "AWS", "PostgreSQL", "Subscriptions"],
    featured: true,
  },
  {
    image: "/projects/rave-plug.png",
    name: "Rave Plug",
    href: "https://raveplugng.com/",
    description: "A real-time events ticket marketplace.",
    tags: ["Next.js", "Convex", "Paystack API"],
    featured: true,
  },
  {
    image: "/projects/myteachr.png",
    name: "My Teachr",
    href: "https://my-teachr.vercel.app/",
    description: "A real-time teaching platform, integrated with an AI vocal agent.",
    tags: ["Next.js", "Supabase", "Stripe", "Subscriptions", "Vapi AI"],
    featured: true,
  },
  {
    image: "/projects/hirrd.png",
    name: "HIRRD",
    href: "https://job-portal-ng.vercel.app/",
    description: "A modern job-matching platform.",
    tags: ["Next.js", "Supabase", "Clerk"],
    featured: true,
  },
  {
    image: "/projects/resorz.png",
    name: "Resorz.AI",
    href: "https://resorzai.vercel.app/",
    description:
      "A GPT learning recommendation system that suggests learning resources to users based on specific inputs.",
    tags: ["Next.js", "TypeScript", "Gemini API"],
  },
  {
    image: "/projects/caliphate.png",
    name: "Caliphate Makhtaba",
    href: "https://caliphate-makhtaba.vercel.app",
    description:
      "A book reading app with an admin dashboard that allows users to add, edit or delete books.",
    tags: ["Next.js", "Supabase", "UploadThing"],
  },
  {
    image: "/projects/go-pong.png",
    name: "Go Pong",
    href: "https://github.com/elameendaiyabu/go-pong",
    description: "A ping pong game built using the Ebitengine engine.",
    tags: ["Go", "Ebitengine"],
  },
  {
    image: "/projects/sudoku-solver.png",
    name: "Sudoku Solver",
    href: "https://github.com/elameendaiyabu/go-sudoku-solver",
    description:
      "A command-line sudoku solver built with Go that uses a backtracking algorithm.",
    tags: ["Go", "Bubble Tea", "Command-line"],
  },
];
