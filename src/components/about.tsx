import { site, skills } from "@/data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" index="03" label="About">
      <Reveal>
        <div className="max-w-[36rem] space-y-5 text-ink-2">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-12 max-w-[36rem]">
          <p className="meta text-ink-3">Technologies</p>
          <p className="meta mt-3 leading-loose text-ink">
            {skills.join(" · ")}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
