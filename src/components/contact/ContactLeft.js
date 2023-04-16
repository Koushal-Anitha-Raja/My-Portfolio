import React from "react";
import { contactImg } from "../../assets";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div
      className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg 
          shadow-shadowOne flex flex-col gap-8"
    >
      <img
        className="w-full h-90 object-cover rounded-lg mb-3"
        src={contactImg}
        alt=" contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className=" text-3xl font-bold text-white"> Koushal Anitha Raja</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN STACK DEVELOPER
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          If you are interested in discussing potential collaborations,
          freelance projects or just want to say hello, please don't hesitate to
          reach out to me using the contact form below.I am always excited to
          connect with like-minded individuals and explore new
          opportunities.Alternatively, you can also find me on various social
          media platforms. Please feel free to follow me and engage with me
          there.
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
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
