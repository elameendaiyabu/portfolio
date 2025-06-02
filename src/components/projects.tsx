import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project, index) => {
        return (
          <Link
            href={`${project.link}`}
            key={index}
            className="flex flex-col-reverse p-2 lg:p-5 hover:rounded-xl hover:shadow-white hover:shadow-sm hover:bg-muted gap-3 lg:flex-row"
            target="_blank"
          >
            <div className="text-sm lg:max-w-36 ">
              <Image
                src={`${project.image}`}
                alt={`${project.name}`}
                width={150}
                height={150}
                className="border-2 border-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="lg:text-foreground text-[#cba6f7] text-lg">{`${project.name}`}</div>
              <div className="text-[1rem] text-wrap lg:max-w-[27rem]">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-background ">
                {project.tags.map((item, index) => {
                  return (
                    <div key={index} className="bg-[#cba6f7] p-1 rounded-full">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const projects = [
  {
    image: "/rave-plug.png",
    name: "Rave Plug",
    link: "https://rave-plug.vercel.app/",
    description: "A real-time events ticket marketplace ",
    tags: ["Next.js ", "Convex", "Paystack API"],
  },
  {
    image: "/resorz.png",
    name: "Resorz.AI",
    link: "https://resorzai.vercel.app/",
    description:
      "A GPT learning recommendation system that suggests learning resources to users based on specific inputs.",
    tags: ["Next.js ", "TypeScript", "Gemini API"],
  },
  {
    image: "/caliphate.png",
    name: "Caliphate Makhtaba",
    link: "https://caliphate-makhtaba.vercel.app",
    description:
      "A book reading app with an admin dashboard that allows users to add and edit or delete books",
    tags: ["Next.js", "supabase", "uploadThing"],
  },
  {
    image: "/go-pong.png",
    name: "Go Pong",
    link: "https://github.com/elameendaiyabu/go-pong",
    description: "A ping pong game built using the ebitten engine",
    tags: ["go", "ebitten"],
  },
  {
    image: "/sudoku-solver.png",
    name: "sudoku solver",
    link: "https://github.com/elameendaiyabu/go-sudoku-solver",
    description:
      "a command-line sudoku solver built with go that uses a back-tracking algorithm.",
    tags: ["go", "bubble tea", "command-line"],
  },
];
