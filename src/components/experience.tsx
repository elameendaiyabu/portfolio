"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4">
      {workExperience.toReversed().map((work, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ backgroundColor: "rgba(203, 166, 247, 0.04)" }}
            className="flex flex-col p-3 lg:p-5 rounded-xl gap-3 lg:flex-row border border-transparent hover:border-[#cba6f7]/10 transition-colors duration-300"
          >
            <div className="text-xs text-muted-foreground lg:max-w-36 uppercase tracking-wider pt-0.5 shrink-0">
              {`${work.startTime} – ${work.endTime}`}
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-foreground text-sm font-semibold">
                {`${work.role} · ${work.companyName}`}
              </div>
              <div className="text-sm text-muted-foreground text-wrap lg:max-w-[27rem] leading-relaxed">
                {work.workDescription}
              </div>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-[#cba6f7]/10 text-[#cba6f7] border border-[#cba6f7]/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

const workExperience = [
  {
    startTime: "April, 2023",
    endTime: "July, 2023",
    role: "Front-End Developer",
    companyName: "NigeriaMyWay",
    workDescription: (
      <div>
        <li>
          Developed and maintained responsive websites using HTML, CSS,
          JavaScript, and React.
        </li>
        <li>
          Optimized web performance through code splitting, lazy loading, and
          efficient asset management.
        </li>
        <li>
          Collaborated with UI/UX designers to create intuitive and visually
          appealing interfaces, ensuring alignment with design specifications.
        </li>
      </div>
    ),
    tags: ["JavaScript ", "TypeScript", "React"],
  },
  {
    startTime: "Oct, 2023",
    endTime: "Jun, 2024",
    role: "Full-Stack Developer",
    companyName: "Learnie",
    workDescription: (
      <div>
        <li>
          Collaborated with cross-functional teams to gather requirements and
          design scalable solutions for client projects.
        </li>
        <li>
          Created secure authentication systems using technologies like OAuth
          and JWT for user login and authorization.
        </li>
        <li>
          Developed RESTful APIs using Node.js framework for seamless
          communication between front-end and back-end.
        </li>
      </div>
    ),
    tags: ["React ", "Next.JS", "Node JS", "Supabase", "PostgreSQL"],
  },
  {
    startTime: "July, 2024",
    endTime: "Jan, 2025",
    role: "Golang Developer",
    companyName: "Freelance/Self Employed",
    workDescription: (
      <div>
        <li>
          Developed and maintained scalable backend systems using go programming
          language.
        </li>
        <li>
          Designed and implemented RESTful APIs to facilitate communication
          between frontend and backend systems.
        </li>
        <li>
          Integrated third-party services and APIs into existing backend systems
          for enhanced functionality.
        </li>
      </div>
    ),
    tags: ["Go", "RESTful API", "GORM", "Bubble TUI"],
  },
  {
    startTime: "JAN, 2025",
    endTime: "Current",
    role: "Fullstack Developer",
    companyName: "LightGate Solutions",
    workDescription: (
      <div>
        <li>Work mainly in the Backend.</li>
        <li>
          Designed and implemented RESTful APIs to facilitate communication
          between frontend and backend systems.
        </li>
        <li>
          Integrated third-party services and APIs into existing backend systems
          for enhanced functionality.
        </li>
      </div>
    ),
    tags: ["Next js", "RESTful API", "React", "Node/Express", "Postgres DB"],
  },
];
