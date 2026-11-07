import { certificates, education, memberships, site, skills } from "@/data";
import type { Credential } from "@/data";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

function CredentialItem({ c }: { c: Credential }) {
  const words = c.name.split(" ");
  const last = words.pop();
  return (
    <>
      <p className="font-display text-[1.125rem] leading-snug tracking-tight">
        {c.href ? (
          <a
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group transition-colors hover:text-accent"
          >
            {words.length > 0 && `${words.join(" ")} `}
            <span className="whitespace-nowrap">
              {last}
              <ArrowUpRightIcon
                width={12}
                height={12}
                className="ml-1.5 inline align-baseline text-ink-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent"
              />
            </span>
          </a>
        ) : (
          c.name
        )}
      </p>
      <p className="text-[0.95rem] text-ink-2">{c.detail}</p>
      <p className="meta mt-1.5 text-ink-3">{c.date}</p>
    </>
  );
}

const itemClass = "border-t border-line py-4";

export function About() {
  return (
    <Section id="about" index="03" label="About">
      <Reveal>
        <div className="max-w-[36rem] space-y-5 text-ink-2">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="meta text-ink-3">Education</p>
          <ul className="mt-4">
            {education.map((e) => (
              <li
                key={`${e.school}-${e.start}`}
                className={`${itemClass} first:border-t-0 first:pt-0`}
              >
                <p className="font-display text-[1.125rem] leading-snug tracking-tight">
                  {e.qualification}
                </p>
                <p className="text-[0.95rem] text-ink-2">{e.school}</p>
                <p className="meta mt-1.5 text-ink-3">
                  {e.start} — {e.end} · {e.location}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="meta text-ink-3">Memberships</p>
          <ul className="mt-4">
            {memberships.map((c) => (
              <li key={c.name} className={`${itemClass} first:border-t-0 first:pt-0`}>
                <CredentialItem c={c} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <p className="meta text-ink-3">Certificates</p>
        <ul className="mt-4 grid gap-x-16 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <li
              key={c.name}
              className={`${itemClass} ${i === 0 ? "border-t-0 pt-0" : ""} ${i === 1 ? "sm:border-t-0 sm:pt-0" : ""}`}
            >
              <CredentialItem c={c} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14">
        <p className="meta text-ink-3">Technologies</p>
        <dl className="mt-4 grid gap-x-16 gap-y-4 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.label}>
              <dt className="meta text-ink-2">{g.label}</dt>
              <dd className="meta mt-1 leading-loose text-ink">
                {g.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
