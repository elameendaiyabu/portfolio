export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-10">
      {workExperience.toReversed().map((work, index) => {
        return (
          <div
            key={index}
            className="flex flex-col p-2 hover:rounded-xl hover:shadow-white hover:shadow-sm hover:bg-muted gap-3 lg:flex-row"
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
    startTime: "July, 2022",
    endTime: "Oct, 2022",
    role: "Software Engineer Intern",
    companyName: "Nigerian Communications Commission",
    workDescription:
      "I assisted in writing test for various features and fixes. Also, i participated in code reviews.",
    tags: ["JavaScript ", "TypeScript", "React"],
  },
  {
    startTime: "July, 2023",
    endTime: "Oct, 2023",
    role: "I.T Intern",
    companyName: "The Securities & Exchange Commission",
    workDescription:
      "Supported the IT team in managing and maintaining network infrastructure, including servers, routers, and switches.",
    tags: ["Command Line", "PowerShell", "Arch-Linux"],
  },
  {
    startTime: "Jan, 2024",
    endTime: "March, 2024",
    role: "Front-End Developer",
    companyName: "NigeriaMyWay",
    workDescription:
      "Worked with the back-end team to develop and ship clean and user-friendly components.",
    tags: ["JavaScript", "TypeScript", "React", "React Router"],
  },
  {
    startTime: "March, 2024",
    endTime: "July, 2024",
    role: "Full-Stack Developer",
    companyName: "Nile Connect",
    workDescription:
      "Developed, maintained, and pushed production code for features such as real-time communication between users.",
    tags: [
      "JavaScript ",
      "TypeScript ",
      "React ",
      "Next.js ",
      "Node.js ",
      "PostgreSQL",
    ],
  },
  {
    startTime: "March, 2024",
    endTime: "July, 2024",
    role: "Full-Stack Developer",
    companyName: "Nile Connect",
    workDescription:
      "Developed, maintained, and pushed production code for features such as real-time communication between users.",
    tags: [
      "JavaScript ",
      "TypeScript ",
      "React ",
      "Next.js ",
      "Node.js ",
      "PostgreSQL",
    ],
  },
];
