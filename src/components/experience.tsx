export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-10 ">
      {workExperience.toReversed().map((work, index) => {
        return (
          <div
            key={index}
            className="flex flex-col p-2 lg:p-5 hover:rounded-xl hover:shadow-white hover:shadow-sm hover:bg-muted gap-3 lg:flex-row"
          >
            <div className="text-sm lg:max-w-36 ">{`${work.startTime} - ${work.endTime}`}</div>
            <div className="flex flex-col gap-3">
              <div className="text-foreground text-base">{`${work.role} @ ${work.companyName}`}</div>
              <div className="text-[1rem] text-wrap lg:max-w-[27rem]">
                {work.workDescription}
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-background ">
                {work.tags.map((item, index) => {
                  return (
                    <div key={index} className="bg-[#cba6f7] p-1 rounded-full">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
    endTime: "Jan,2025",
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
    endTime: "MAY, 2025",
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
