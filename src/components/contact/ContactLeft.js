import React from "react";
import { gmail } from "../../assets";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[30%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] lgl:p-8 p-4 rounded-lg 
          shadow-shadowOne flex flex-col gap-8"
    >
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        target="_blank"
      >
        <img
          className="w-full h-90 object-cover rounded-lg mb-3"
          src={gmail}
          alt="contactImg"
        />
      </a>
      <div className="flex flex-col gap-4">
        <h3 className=" text-3xl font-bold text-white"> Koushal Anitha Raja</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN STACK DEVELOPER
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am reaching out to request your feedback on my portfolio. As someone
          with extensive experience and expertise, I would value your opinion on
          my work samples and the overall presentation of my portfolio. I have
          put a great deal of time and effort into creating this collection, and
          I believe it showcases my skills and accomplishments in a compelling
          and engaging way.Thank you for your time and consideration. I look
          forward to hearing from you soon
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className=" text-lightText"> +1(5517861736) </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className=" text-lightText"> kanitha1@stevens.edu </span>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
