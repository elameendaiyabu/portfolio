import Link from "next/link";
import AboutSection from "./about";
import ExperienceSection from "./experience";
import ProjectSection from "./projects";

export const content = [
  {
    title: <div id="about">ABOUT</div>,
    description: <AboutSection />,
    content: (
      <div className="h-full w-full bg-[] flex flex-col gap-4 text-white">
        <Link href="/#about">ABOUT</Link>
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#experience">EXPERIENCE</Link>
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
          <Link href="/#about">ABOUT</Link>
          <Link href="/#experience">EXPERIENCE</Link>
        </span>
        <Link href="/#projects">PROJECTS</Link>
      </div>
    ),
  },
  {
    title: <div id="experience">EXPERIENCE</div>,
    description: <ExperienceSection />,
    content: (
      <div className="h-full w-full flex flex-col gap-4 bg-[] text-white">
        <span className="text-muted-foreground">
          <Link href="/#about">ABOUT</Link>
        </span>
        <Link href="/#experience">EXPERIENCE</Link>
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#projects">PROJECTS</Link>
        </span>
      </div>
    ),
  },
];
