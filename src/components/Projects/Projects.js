import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectTwo, projectThree, projectOne } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-20">
        <ProjectsCard
          title=" E-COMMERCE WEBSITE"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectOne}
        />

        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectTwo}
        />
        <ProjectsCard
          title="CHATTING APP"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectThree}
        />
        <ProjectsCard
          title=" E-COMMERCE WEBSITE"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectTwo}
        />
        <ProjectsCard
          title=" E-SOCIAL MEDIA CLONE"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectThree}
        />
        <ProjectsCard
          title=" E-CHATTING APP"
          des=" “As an online business owner, website design is the most important factor in choosing an eCommerce platform.
           It’s what sets the first impression, draws your customers in, and tells the story of your brand.”"
          src={projectOne}
        />
      </div>
    </section>
  );
};
export default Projects;
