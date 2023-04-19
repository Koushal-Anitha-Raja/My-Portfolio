import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-4 font-titleFont flex flex-col lgl:flex-row lgl:gap-20 gap-8"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titlefont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className=" text-2xl lgl:text-4xl font-bold">
            Academic Education
          </h2>
        </div>
        <div className="mt-3 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master's in Computer Science"
            subTitle=" Stevens Institute of Technology (2021-2023)"
            GPA=" 3.7/4.0"
            des="I am currently pursuing MS in computer Science and expected to complete my graduation in May 2023.
                     I am a aspiring Full-stack Developer looking for a full time Opportunities in 2023.I completed Web Programming-1(NodeJS,MongoDb,ExpressJs,Axios), Web Programming-2(ReactJs,VueJs,Docker,Redis,Firebase,ElasticSearch ,GraphicsMagick), Database Management System,Agile Methodologies,
                     Data Structures and Algorithms, Fundamentals of CyberSecurity,Fundamentals of Computing,Computer Architecture,Big Data Technologies. "
          />
          <ResumeCard
            title="Bachelor's in Information Technology"
            subTitle="RMD Engineering College (2017-2021)"
            GPA=" 8.65/10.0"
            des="I graduated from RMD engineering College with FirstClass-Distinction in May 2021.I completed Program Solving and Python Programming Laboratory,Programming in C,Information Technology Essentials,Design Principles and System Design,
                      Object Oriented Programming, Data Structures, Design and Analysis of Algorithm, Computer Architecture, Database Management Systems,
                      software Engineering, Computer Networks, Web Technology, Big Data Analytics and software Testing "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titlefont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020- 2020</p>
          <h2 className="text-2xl lgl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-3 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Internship"
            subTitle=" Verzeo Technologies"
            GPA=" Nov 2020 -Dec 2020 "
            des="• Engaged as part of web development team to portfolio websites for users in React.js, HTML, CSS and Bootstrap.
                      • Worked with the backend engineers to understand data model for the user portfolios and deployed well-defined, reusable
                      components for frontend.
                      • Participated in team meetings to discuss project goals, timelines, and deliverables.
                      • Collaborated with designers to ensure website designs were accurately translated into functional web pages"
          />
          <ResumeCard
            title="Web Development Internship"
            subTitle=" Indian Institute of Technology, Hyderabad"
            GPA="Aug 2020 - Sep 2020"
            des=" • Collaborated as a part of web development team, and build applications in Firebase, implemented features for converting
                      Text to Speech in Python.
                      • Constructed utility applications in Android using Java and Android Studio and utilized the Volley library to make
                      networking calls from application
                      • Contributed to team meetings to discuss project requirements and goals, and provided regular updates on project progress.
• Worked with the team to design and develop web applications using Firebase, Python, and other relevant technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
