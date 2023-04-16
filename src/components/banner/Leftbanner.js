import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaVuejs } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full stack Developer.",
      "UI Designer.",
      "Frontend Developer.",
      "Backend Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delayedSpeed: 1000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi,I'm{" "}
          <span className="text-designColor capitalize">
            Koushal Anitha Raja
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          {" "}
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" "
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide ">
          I've always been great at solving problems, a technophile who is
          fixated on the newest gadgets. After majoring in Computer Science in
          college and keeping up my pastime, I came to the conclusion that
          software engineering was the best career choice for me. I have
          experience with a number of programming languages, such as JavaScript,
          HTML, CSS, Python, ReactJS, NodeJS, and VueJS, but I'm always
          expanding my knowledge. Please feel free to communicate as I'm also
          excited to meet software engineers.
        </p>
      </div>
      <div className="flex gap-80">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Koushal-Anitha-Raja" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://leetcode.com/AR_koushal/" target="_blank">
              <span className="bannerIcon">
                <SiLeetcode />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/arkoushal/" target="_blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://react.dev/learn" target="_blank">
              <span className="bannerIcon">
                <FaReact />
              </span>
            </a>
            <a href="https://nodejs.org/docs/latest-v19.x/api/" target="_blank">
              <span className="bannerIcon">
                <FaNodeJs />
              </span>
            </a>
            <a href="https://tailwindcss.com/docs/installation" target="_blank">
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
            </a>
            <a href="https://vuejs.org/guide/introduction.html" target="_blank">
              <span className="bannerIcon">
                <FaVuejs />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
