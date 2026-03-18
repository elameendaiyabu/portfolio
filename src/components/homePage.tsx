"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { CardSpotlight } from "./ui/card-spotlight";
import Link from "next/link";

const socialLinks = [
  { href: "https://x.com/elameendk", icon: faXTwitter, label: "Twitter" },
  {
    href: "https://github.com/elameendaiyabu",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/daiyabuu_",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/el-ameen-daiyabu",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:elameendaiyabu@proton.me",
    icon: faMailBulk,
    label: "Email",
  },
];

const navLabels = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

export const HomePage = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | any;
    description: string | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      // Target point: 30% down from the container's top edge
      const targetY = containerRect.top + containerRect.height * 0.3;

      let closest = 0;
      let minDist = Infinity;

      titleRefs.current.forEach((el, index) => {
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - targetY);
        if (dist < minDist) {
          minDist = dist;
          closest = index;
        }
      });

      setActiveCard(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <motion.div
      className="h-screen overflow-y-auto overflow-x-hidden rounded-md"
      style={{
        backgroundColor: "#08080f",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 20% -5%, rgba(203, 166, 247, 0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 105%, rgba(137, 180, 250, 0.05) 0%, transparent 50%)",
      }}
      ref={ref}
    >
      <CardSpotlight className="flex relative bg-transparent flex-col lg:flex-row-reverse lg:justify-between">
        {/* Mobile header */}
        <div className="lg:hidden flex w-full flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-2xl font-extrabold tracking-tight"
          >
            El-ameen Daiyabu
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-sm font-semibold tracking-widest uppercase text-[#cba6f7]"
          >
            Full-Stack Web Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-muted-foreground text-sm"
          >
            I build the things i want and the things you want.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex gap-5"
          >
            {socialLinks.map(({ href, icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link href={href} target="_blank" aria-label={label}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-6 h-6 text-muted-foreground hover:text-[#cba6f7] transition-colors duration-200"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scrollable content sections */}
        <div className="div relative w-full flex items-start md:ml-0 lg:ml-40 lg:w-1/2 lg:px-4">
          <div className="lg:pr-0 max-w-2xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="my-20 flex flex-col gap-10 lg:gap-2"
              >
                <motion.h2
                  ref={(el) => { titleRefs.current[index] = el; }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                    y: activeCard === index ? 0 : 6,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="lg:text-2xl text-lg sticky lg:static backdrop-blur-sm top-0 font-bold text-slate-100 tracking-widest uppercase"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                    y: activeCard === index ? 0 : 8,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="lg:text-base text-muted-foreground lg:mb-36 mt-4 lg:mt-10"
                >
                  {item.description}
                </motion.div>
              </div>
            ))}
            <div className="mb-44" />
          </div>
        </div>

        {/* Desktop sticky left panel */}
        <div
          className={cn(
            "hidden lg:flex flex-col gap-10 items-start justify-between h-[30rem] w-[30rem] rounded-md sticky top-10",
            contentClassName,
          )}
        >
          {/* Name, role, bio */}
          <div className="w-full flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-3xl font-extrabold tracking-tight lg:text-4xl"
            >
              El-ameen Daiyabu
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-sm font-semibold tracking-widest uppercase text-[#cba6f7]"
            >
              Full-Stack Web Developer
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-muted-foreground text-sm leading-relaxed max-w-xs"
            >
              I build the things i want and the things you want.
            </motion.p>
          </div>

          {/* Animated section nav */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-full flex flex-col gap-3"
          >
            {navLabels.map(({ label, href }, index) => (
              <motion.div
                key={label}
                className="flex items-center gap-3"
                animate={{ x: activeCard === index ? 4 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="h-px bg-[#cba6f7] rounded-full"
                  animate={{ width: activeCard === index ? 36 : 12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
                <Link
                  href={href}
                  className={cn(
                    "text-xs tracking-widest uppercase transition-colors duration-300",
                    activeCard === index
                      ? "text-white font-semibold"
                      : "text-muted-foreground hover:text-slate-300",
                  )}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-full flex gap-5 items-center"
          >
            {socialLinks.map(({ href, icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link href={href} target="_blank" aria-label={label}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-6 h-6 text-muted-foreground hover:text-[#cba6f7] transition-colors duration-200"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};
