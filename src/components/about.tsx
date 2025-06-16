import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <div className=" flex flex-col gap-4">
      <div>
        When I&apos;m not coding, I&apos;m usually watching one piece, playing
        souls games, reading manga, or hanging out with friends.
      </div>
      <div className="flex flex-col gap-3">
        <div>Some technologies I work with:</div>
        <div className="grid grid-cols-2">
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Javascript
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Typescript
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            React/Next.js
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Node.js
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Express.js
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Golang
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Rust
          </div>
          <div className="flex gap-3 text-[#cba6f7] items-center">
            <FontAwesomeIcon icon={faArrowRight} />
            Python
          </div>
        </div>
      </div>
    </div>
  );
}
