import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <div className=" flex flex-col gap-4">
      <div>
        The idea of building something out of thin air is really amazing. Its
        like you are going 150mph on a racing bike.
      </div>
      <div>
        My tech journey started with me disassembling my PS2 console lol, trying
        to figure out how it works then disassembling my xbox lol x2. Many years
        later, software development peaked my interest.
      </div>
      <div>
        When I&apos;m not coding, I&apos;m usually watching one piece, playing
        souls games, reading manga, or hanging out with friends.
      </div>
      <div className="flex flex-col gap-3">
        <div>Some technologies I work with:</div>
        <div className="grid grid-cols-2">
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            JavaScript
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            TypeScript
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            React
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Next.js
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Node.js
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
}
