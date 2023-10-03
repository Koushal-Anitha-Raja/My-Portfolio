import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20  h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-1  lgl:grid-cols-4 gap-8 ">
      <div className="w-full h-full flex flex-col lgl:mt-2  lgl:py-1   gap-8">
        <img className="w-32 lgl:mt-1 rounded-full" src={logo} alt="logo" />
        <p>
          <h3 className="w-full text-lg font-bold"> Let's Chat! </h3>
        </p>
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
      <div className="w-full h-full  ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <a href="https://github.com/Koushal-Anitha-Raja" target="__blank">
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://github.com/Koushal-Anitha-Raja/My-portfolio"
            target="__blank"
          >
            <li>
              <span className="w-full mt-text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1S54zCk4zPTv4FPdPGFF5SbHpls36mPYw/view?usp=share_link"
            target="__blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Resume
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://github.com/Koushal-Anitha-Raja?tab=repositories"
            target="__blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Repositories
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/arkoushal/" target="__blank">
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <a href="https://leetcode.com/AR_koushal/" target="_blank">
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Leetcode Profile
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://github.com/Koushal-Anitha-Raja/Blind-75"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Data Structures & Algo - Blind 75
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1W5IA-fSqKMgPFJS_NMhESKVsZKVSC-CK/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Verzeo Internship
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1XG3JnzEehUkCaX5ZGE5HM55F1cPKcb7X/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Azure Internship
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>

          <a
            href="https://drive.google.com/file/d/1JFAfLC07cL-Ay8Xz9G1aOujMvNxHRcE8/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Code Binds Internship
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          CERTIFICATIONS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <a
            href="https://drive.google.com/file/d/1BPVtQOJHGWkttQyfsH4rcVPqFc5psnUF/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                AWS Certification
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1Nd0monyXjNF40MDBWu92cc-Blz6X2HHn/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Cloud Computing
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1DcNBPsZXyXGYef_abnNTX4hbLrLB4jD9/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                BEC VANTAGE Certificate
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1mkZ8IM9IuxsjICt9C8QjsHt_cPm5gdlx/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                IOT Certificate
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1NUIGYrjM9QV8oab7WNxA7WKUGbQ1SDIq/view?usp=sharing"
            target="_blank"
          >
            <li>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                JAVA NPTEL Certificate
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
