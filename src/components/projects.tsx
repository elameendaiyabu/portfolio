import Image from "next/image";
import { projects } from "@/data";
import { ArrowUpRightIcon } from "./icons";
import { ProjectList } from "./hover-preview";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" index="01" label="Work">
      <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {featured.map((p, i) => (
          <li key={p.name}>
            <Reveal delay={(i % 2) * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-paper-2 shadow-[0_24px_48px_-30px_rgba(90,60,20,0.35)]">
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 440px, (min-width: 640px) 45vw, calc(100vw - 48px)"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
                  <ArrowUpRightIcon
                    width={18}
                    height={18}
                    className="mt-1.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 max-w-[30rem] text-[0.95rem] text-ink-2">
                  {p.description}
                </p>
                <p className="meta mt-4 text-ink-3">{p.tags.join(" · ")}</p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <div className="mt-20">
          <p className="meta mb-4 text-ink-3">More projects</p>
          <Reveal>
            <ProjectList items={rest} />
          </Reveal>
        </div>
      )}
    </Section>
  );
}
