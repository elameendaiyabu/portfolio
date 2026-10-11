"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { label: string; href: string };

export function Nav({ name, items }: { name: string; items: Item[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[72rem] items-center justify-between gap-4 px-6"
      >
        <a
          href="#top"
          className="font-display shrink-0 whitespace-nowrap text-base tracking-tight sm:text-lg"
        >
          {name}
        </a>
        <ul className="flex items-center gap-3 sm:gap-7">
          {items.map((item) => {
            const on = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "meta relative inline-flex items-center py-2 text-[10px] tracking-[0.08em] transition-colors hover:text-accent sm:text-[11px] sm:tracking-[0.12em]",
                    on ? "text-ink" : "text-ink-2",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-2.5 size-1 rounded-full bg-accent transition-opacity sm:-left-3",
                      on ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
