import { site, socials } from "@/data";
import { SocialGlyph } from "./icons";
import { Section } from "./section";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-14">
      <Section index="04" label="Contact">
        <p className="font-display font-optical text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.03em]">
          Let&apos;s build <span className="">something.</span>
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block break-all font-display text-[clamp(1.25rem,3.6vw,2.25rem)] tracking-tight underline decoration-line decoration-1 underline-offset-[0.3em] transition-colors hover:text-accent hover:decoration-accent"
        >
          {site.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                className="meta inline-flex items-center gap-2 py-1 text-ink-2 transition-colors hover:text-accent"
              >
                <SocialGlyph name={s.icon} width={14} height={14} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <div className="meta flex flex-col gap-2 border-t border-line py-8 text-ink-3 sm:flex-row sm:justify-between">
        <span>
          © {site.copyrightYear} {site.name}
        </span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
