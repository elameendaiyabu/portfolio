import Link from "next/link";
import ExperienceSection from "./experience";
import ProjectSection from "./projects";

export const content = [
  {
    title: <div id="experience">EXPERIENCE</div>,
    description: <ExperienceSection />,
    content: (
      <div className="h-full w-full flex flex-col gap-4 bg-[] text-white">
        <Link href="/#experience">EXPERIENCE</Link>
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#projects">PROJECTS</Link>
        </span>
      </div>
    ),
  },
  {
    title: <div id="projects">PROJECTS</div>,
    description: <ProjectSection />,
    content: (
      <div className="h-full flex flex-col gap-4  w-full bg-[] text-white">
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#experience">EXPERIENCE</Link>
        </span>
        <Link href="/#projects">PROJECTS</Link>
      </div>
    ),
  },
];
