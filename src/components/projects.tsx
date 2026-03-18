"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => {
        return (
          <MotionLink
            href={`${project.link}`}
            key={index}
            target="_blank"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ backgroundColor: "rgba(203, 166, 247, 0.04)" }}
            className="flex flex-col-reverse p-3 lg:p-5 rounded-xl gap-3 lg:flex-row border border-transparent hover:border-[#cba6f7]/10 transition-colors duration-300 group"
          >
            <div className="text-sm lg:max-w-36 shrink-0">
              <Image
                src={`${project.image}`}
                alt={`${project.name}`}
                width={150}
                height={150}
                className="border border-[#cba6f7]/15 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-foreground text-sm font-semibold group-hover:text-[#cba6f7] transition-colors duration-200">
                {`${project.name}`}
              </div>
              <div className="text-sm text-muted-foreground text-wrap lg:max-w-[27rem] leading-relaxed">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-[#cba6f7]/10 text-[#cba6f7] border border-[#cba6f7]/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MotionLink>
        );
      })}
    </div>
  );
}

const projects = [
  {
    image: "/cave-erp.png",
    name: "Cave ERP",
    link: "https://cave-erp.com/",
    description: "An ERP system for organizations and teams",
    tags: ["Next.js ", "Convex", "Paystack API", "Cloudflare R2", "AWS", "PostgreSQL", "Subscriptions"],
  },
  {
    image: "/rave-plug.png",
    name: "Rave Plug",
    link: "https://raveplugng.com/",
    description: "A real-time events ticket marketplace ",
    tags: ["Next.js ", "Convex", "Paystack API"],
  },
  {
    image: "/myteachr.png",
    name: "My Teachr",
    link: "https://my-teachr.vercel.app/",
    description:
      "a real-time teaching platform , integrated with an AI vocal agent",
    tags: ["Next.js ", "Supabase", "Stripe", "Subscriptions", "Vapi AI"],
  },
  {
    image: "/hirrd.png",
    name: "HIRRD",
    link: "https://job-portal-ng.vercel.app/",
    description: "A modern job-matching platform",
    tags: ["Next.js ", "Supabase", "Clerk"],
  },
  {
    image: "/resorz.png",
    name: "Resorz.AI",
    link: "https://resorzai.vercel.app/",
    description:
      "A GPT learning recommendation system that suggests learning resources to users based on specific inputs.",
    tags: ["Next.js ", "TypeScript", "Gemini API"],
  },
  {
    image: "/caliphate.png",
    name: "Caliphate Makhtaba",
    link: "https://caliphate-makhtaba.vercel.app",
    description:
      "A book reading app with an admin dashboard that allows users to add and edit or delete books",
    tags: ["Next.js", "supabase", "uploadThing"],
  },
  {
    image: "/go-pong.png",
    name: "Go Pong",
    link: "https://github.com/elameendaiyabu/go-pong",
    description: "A ping pong game built using the ebitten engine",
    tags: ["go", "ebitten"],
  },
  {
    image: "/sudoku-solver.png",
    name: "sudoku solver",
    link: "https://github.com/elameendaiyabu/go-sudoku-solver",
    description:
      "a command-line sudoku solver built with go that uses a back-tracking algorithm.",
    tags: ["go", "bubble tea", "command-line"],
  },
];
