import AboutSection from "./about";
import ExperienceSection from "./experience";

export const content = [
  {
    title: "ABOUT",
    description: <AboutSection />,
    content: (
      <div className="h-full w-full bg-[] flex flex-col gap-4 text-white">
        ABOUT
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <div>EXPERIENCE</div>
          <div>PROJECTS</div>
        </span>
      </div>
    ),
  },
  {
    title: "EXPERIENCE",
    description: <ExperienceSection />,
    content: (
      <div className="h-full w-full flex flex-col gap-4 bg-[] text-white">
        <span className="text-muted-foreground">
          <div>ABOUT</div>
        </span>
        EXPERIENCE
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <div>PROJECTS</div>
        </span>
      </div>
    ),
  },
  {
    title: "PROJECTS",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full flex flex-col gap-4  w-full bg-[] text-white">
        <span className="text-muted-foreground flex flex-col gap-4 ">
          <div>ABOUT</div>
          <div>EXPERIENCE</div>
        </span>
        PROJECTS
      </div>
    ),
  },
];
