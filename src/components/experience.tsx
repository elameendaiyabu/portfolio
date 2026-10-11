import { experience } from "@/data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" index="02" label="Experience">
      <ol>
        {experience.map((e) => {
          const current = e.end === "Present";
          return (
            <li
              key={`${e.company}-${e.start}`}
              className="border-t border-line py-8 first:border-t-0 first:pt-0"
            >
              <Reveal className="sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8">
                <p className="meta flex items-center gap-2 self-start pt-1.5 text-ink-2">
                  {current && (
                    <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  )}
                  {e.start} — {e.end}
                </p>
                <div className="mt-3 sm:mt-0">
                  <h3 className="font-display text-[1.25rem] leading-snug tracking-tight">
                    {e.role}
                  </h3>
                  <p className="text-ink-2">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-[0.95rem] text-ink-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.8em] h-px w-3 shrink-0 bg-ink-3"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="meta mt-5 text-ink-3">{e.tags.join(" · ")}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
