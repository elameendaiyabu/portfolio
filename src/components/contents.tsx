import Link from "next/link";
import AboutSection from "./about";
import ExperienceSection from "./experience";

export const content = [
  {
    title: <div id="about">ABOUT</div>,
    description: <AboutSection />,
    content: (
      <div className="h-full w-full bg-[] flex flex-col gap-4 text-white">
        ABOUT
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#experience">EXPERIENCE</Link>
          <Link href="/#projects">PROJECTS</Link>
        </span>
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
        EXPERIENCE
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#projects">PROJECTS</Link>
        </span>
      </div>
    ),
  },
  {
    title: <div id="projects">PROJECTS</div>,
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full flex flex-col gap-4  w-full bg-[] text-white">
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#experience">EXPERIENCE</Link>
        </span>
        PROJECTS
      </div>
    ),
  },
];
