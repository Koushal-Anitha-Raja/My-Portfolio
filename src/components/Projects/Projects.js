import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectTwo,
  projectThree,
  projectOne,
  projectFour,
  projectspotify,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
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
          href="https://github.com/Koushal-Anitha-Raja/Spotify-Tune"
          target="_blank"
        >
          <ProjectsCard
            title="Spotify-Tune"
            des=" I engineered a ReactJS-powered application with Redux for robust state management and employed Tailwind CSS to finesse the 
            user interface. The project mirrors Spotify's functionality, utilizing the Rapid API for data retrieval. Users can execute targeted
            song searches, access features like shuffle, navigate through previous and next tracks seamlessly, and precisely control playback
            to specific seconds within a song. The Geolocation API enhances the application's geographic specificity, revealing songs popular
            in distinct regions"
            src={projectspotify}
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

        <a href="https://github.com/inchara05/Team9_ReSprint" target="_blank">
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
          href="https://github.com/Koushal-Anitha-Raja/ChatGpt_enhanced"
          target="_blank"
        >
          <ProjectsCard
            title="ChatGpt_Enhanced"
            des="Create your own ChatGPT clone using the latest React JS, simple HTML, and CSS, powered by Node JavaScript and Express. With this starter kit, you can run your own instance of ChatGPT on your local machine!.
            Harnessed the power of OpenAI by integrating its API seamlessly into the project. The provided configurations and API key management make the integration process straightforward
"
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
        <a
          href="https://github.com/Koushal-Anitha-Raja/Chrome-Extension-"
          target="_blank"
        >
          <ProjectsCard
            title="Chrome_extension"
            des="QuickApp Navigator is a powerful Chrome extension designed to streamline your daily workflow by providing quick and convenient access to your frequently used applications.
             Built with React, this extension enhances your browsing experience by simplifying app navigation, making it faster and more efficient"
            src={projectSeven}
          />
        </a>
        <a href="" target="_blank">
          <ProjectsCard
            title="Next_JS_SEO "
            des=" I demonstrate the process of building the official Web Dev website using Next.js version 13, focusing on optimizing performance and achieving exceptionally fast web development results. 
             The app also provides access 
            to a wealth of reference materials, and viewers can delve into various aspects of web development, including setup, design, and deployment, 
            ensuring a comprehensive learning experience"
            src={projectEight}
          />
        </a>
      </div>
    </section>
  );
};
export default Projects;
