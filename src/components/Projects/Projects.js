import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectTwo,
  projectThree,
  projectOne,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full  py-10 lgl:py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center ">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
        <a href="https://github.com/charan005-dev/fable" target="_blank">
          <ProjectsCard
            title="Social-Story Telling Website"
            des="Fable is a web-enabled, web-ready, multi-browser compatible, ReactJS-powered web application developed by team of five members where users can post stories, 
            read new stories written by other authors, add stories to library and share them across the community. Writing a story and publishing 
            it through a publishing house is heavily bureaucratic and it adds a lot of stress to the author. 
            We want to do away with those bureaucracies and give authors a free place to express themselves in the form of stories"
            src={projectOne}
          />
        </a>
        <a
          href="https://github.com/darshil1899/group13_cs546C_project"
          target="_blank"
        >
          <ProjectsCard
            title="HOSPITAL MANAGEMENT SYSTEM"
            des="This project is a hospital management system website using Node.js, MongoDB, and JavaScript, developed by a team of five members.
            The project focuses on both patients and hospital staff, aiming to simplify appointment booking and patient management in hospitals, especially during the pandemic period.
            The idea behind the project is to minimize the burden on hospital staff by assigning scores to patients based on their illness, which allows staff to prioritize and manage patients more efficiently.
 "
            src={projectTwo}
          />
        </a>
        <a href="https://github.com/inchara05/Team9_ReSprint" targte="_blank">
          <ProjectsCard
            title="BALOON POPPING GAME"
            des=" The Agile Balloon Popping game tests players' ability to explode as many balloons as they can while also spotting a precise 
            pattern. It is a quick-paced and entertaining game created with React.js. The balloons must be popped in a particular pattern, which 
            players must recognize before they can begin popping, therefore there is a catch. Players must use their powers of observation, 
            quick thinking, and pattern recognition in this hard and entertaining game."
            src={projectThree}
          />
        </a>
        <a
          href="https://github.com/Koushal-Anitha-Raja/Blind-75"
          target="_blank"
        >
          <ProjectsCard
            title="LEETCODE_BLIND 75"
            des=" LeetCode Blind 75 is a curated list of 75 coding problems that are frequently asked in coding interviews by top technology 
            companies.These problems cover a wide range of topics such as arrays, strings, linked lists, trees, graphs, dynamic programming, and more"
            src={projectFour}
          />
        </a>
        <a
          href="https://github.com/Koushal-Anitha-Raja/My-portfolio"
          target="_blank"
        >
          <ProjectsCard
            title=" MY PORTFOLIO CODEBASE"
            des=" Check out my portfolio, a curated collection of my best works and experiences showcasing my skills, accomplishments, and 
          personality. With a clean and modern design, intuitive layout, and user-friendly interface, it's the perfect platform to present 
          myself and my work to potential clients, employers, and collaborators"
            src={projectFive}
          />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1WuO9kbBl2w4Jxo4-ZQjvxGE_ob_TQq7Q?usp=sharing"
          target="_blank"
        >
          <ProjectsCard
            title="MRI IMAGE OF CLASSIFICATION OF BRAIN TUMOR"
            des="Our project is to create a website for Brain Tumor Detection using the Django web platform and a deep neural network. 
            My research is primarily focused on using a convolution neural network algorithm (CNN)to classify typical brain tumor cells in order
             to minimize doctors' workload and improve prediction accuracy.This will help doctors to avoid FALSE NEGATIVES and  FALSE POSITIVES in detecting tumor "
            src={projectSix}
          />
        </a>
      </div>
    </section>
  );
};
export default Projects;
