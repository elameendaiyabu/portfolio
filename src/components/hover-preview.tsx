"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRightIcon } from "./icons";
import type { Project } from "@/data/types";

const W = 280;

export function ProjectList({ items }: { items: Project[] }) {
  const [shown, setShown] = useState<Project | null>(null);
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.6 });

  const place = (e: MouseEvent) => {
    mx.set(e.clientX + 28);
    my.set(e.clientY - (W * 0.625) / 2);
  };

  const enter = (e: MouseEvent, p: Project) => {
    if (!window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) return;
    mx.jump(e.clientX + 28);
    my.jump(e.clientY - (W * 0.625) / 2);
    x.jump(e.clientX + 28);
    y.jump(e.clientY - (W * 0.625) / 2);
    setShown(p);
    setVisible(true);
  };

  return (
    <>
      <ul className="border-b border-line">
        {items.map((p) => (
          <li key={p.name} className="border-t border-line first:border-t-0">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(e) => enter(e, p)}
              onMouseMove={place}
              onMouseLeave={() => setVisible(false)}
              className="group grid items-baseline gap-x-6 gap-y-2 px-2 py-5 transition-colors hover:bg-paper-2 sm:-mx-2 sm:px-2 lg:grid-cols-[1fr_auto]"
            >
              <span className="min-w-0">
                <span className="font-display text-xl tracking-tight">{p.name}</span>
                <span className="mt-1 block text-[0.95rem] text-ink-2 lg:mt-0 lg:ml-3 lg:inline">
                  {p.description}
                </span>
              </span>
              <span className="meta flex items-center gap-3 text-ink-3">
                <span>{p.tags.join(" · ")}</span>
                <ArrowUpRightIcon
                  width={14}
                  height={14}
                  className="shrink-0 text-ink transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden overflow-hidden rounded-md border border-line bg-paper-2 shadow-[0_18px_40px_-22px_rgba(90,60,20,0.35)] lg:block"
        style={{ x, y, width: W, aspectRatio: "16 / 10" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.18 }}
      >
        {shown && (
          <Image
            src={shown.image}
            alt=""
            fill
            sizes="280px"
            className="object-cover object-top"
          />
        )}
      </motion.div>
    </>
  );
}
