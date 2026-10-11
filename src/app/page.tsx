import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
    </>
  );
}
