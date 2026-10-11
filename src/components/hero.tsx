import type { CSSProperties } from "react";
import { experience, site, socials } from "@/data";
import { ArrowUpRightIcon } from "./icons";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  const current = experience.find((e) => e.end === "Present");
  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      className="grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-24 lg:pt-28"
    >
      <div>
        <p className="meta rise text-ink-2" style={d(0.05)}>
          {site.role}
        </p>
        <h1 className="font-display font-optical mt-6 text-[clamp(3rem,9vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.035em]">
          <span className="rise block" style={d(0.18)}>
            {first}
          </span>
          <span className="rise block " style={d(0.18)}>
            {rest.join(" ")}
          </span>
        </h1>
        <p
          className="rise font-display mt-10 max-w-[22ch] text-[1.5rem] italic leading-snug text-ink sm:text-[1.75rem]"
          style={d(0.5)}
        >
          {site.tagline}
        </p>
        <p className="rise mt-6 max-w-[34rem] text-ink-2" style={d(0.62)}>
          {site.bio}
        </p>
        <ul className="rise mt-8 flex flex-wrap gap-x-6 gap-y-2" style={d(0.75)}>
          {socials
            .filter((s) => s.icon !== "mail")
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="meta group inline-flex items-center gap-1 py-1 text-ink transition-colors hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRightIcon
                    width={12}
                    height={12}
                    className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
      {current && (
        <div
          className="rise hidden border-t border-line pt-4 text-right lg:block"
          style={d(0.9)}
        >
          <p className="meta text-ink-3">Now</p>
          <p className="mt-2 flex items-center justify-end gap-2 text-sm text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {current.role}, {current.company}
          </p>
          <p className="meta mt-1 text-ink-3">since {current.start}</p>
        </div>
      )}
    </section>
  );
}
