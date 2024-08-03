"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="h-screen lg:p-10 py-12 overflow-y-auto flex flex-col lg:flex-row-reverse lg:justify-center bg-slate-900 relative space-x-10 rounded-md "
      ref={ref}
    >
      <div className="lg:hidden flex flex-col gap-4 px-10">
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight ">
          El-ameen Daiyabu
        </h2>
        <h3 className="scroll-m-20 text-lg tracking-tight transition-colors first:mt-0">
          Full-Stack Web Developer
        </h3>
        <p className="text-muted-foreground ">
          I build the things i want and the things you want.
        </p>
        <div className="flex gap-6">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
        </div>
      </div>
      <div className="div relative flex items-start lg:ml-56 lg:w-1/2 lg:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-2xl text-lg font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-lg text-muted-foreground lg:mb-44 mt-4 lg:mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-60 lg:h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:flex flex-col gap-10 items-center justify-between h-[30rem] w-[30rem] rounded-md sticky top-10 ",
          contentClassName,
        )}
      >
        <div className=" w-full">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            El-ameen Daiyabu
          </h1>
          <h3 className="mt-4 scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
            Full-Stack Web Developer
          </h3>
          <p className="mt-2 text-muted-foreground scroll-m-20 tracking-tight">
            I build the things i want and the things you want.
          </p>
        </div>
        <div className="w-full h-28">{content[activeCard].content ?? null}</div>
        <div className="w-full flex gap-5">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-7 h-7 text-muted-foreground hover:cursor-pointer hover:text-white"
          />
        </div>
      </div>
    </motion.div>
  );
};
