import React from "react";
import { AiFillAppstore, AiFillCode } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";
import { VscDebugAll } from "react-icons/vsc";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 xl:gap-20">
        <Card
          title="Code Reviews"
          des="As a software engineer, I will review code to make sure it complies with accepted coding rules and satisfies high standards.
          I will examine code changes and offer input as part of my responsibilities as a software engineer to guarantee that our codebase 
          is continually improved.I recognize how crucial code reviews are to preserving the integrity and dependability of software systems.
           "
          icon={<AiFillCode />}
        />
        <Card
          title="App Development"
          des="As an app developer, I will examine code to make sure it complies with known coding patterns and meets high standards, 
          guaranteeing that our program is dependable and operates at its best.The performance and user experience of our app will be continually
          improved as part of my responsibilities as an app developer,which include reviewing code updates and offering comments."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Testing Softwares"
          des="I recognize the value of code reviews in assuring the dependability and quality of software systems because I work as a software tester. I will conduct a comprehensive evaluation of all code modifications to spot any potential 
          problems and raise the level of software quality as a whole.As a software tester, one of my responsibilities will be to do routine code
          reviews ."
          icon={<VscDebugAll />}
        />
        <Card
          title="Mobile Development"
          des="As a mobile developer, I will carefully examine code modifications to guarantee that our app is operating at its peak efficiency and upholding the highest standards of quality.
          As a mobile developer, one of my responsibilities will be to conduct routine code reviews to spot any problems and ensure adherence to best practices and coding standards, which will
           assist preserve the dependability."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="As a UI/UX designer, I will conduct routine code reviews to make sure that our designs are faithfully incorporated into the code and that the finished product is user-friendly 
          and aesthetically pleasing.Working directly with developers to review code updates and give input on design implementation will be a
           big part of my job as a UI/UX designer, so that our product satisfies the user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I frequently evaluate website code as a specialist in website hosting to make sure that it is optimized for efficiency and security and that the websites of our clients are always 
          operating at their peak levels.Working directly with clients to analyze their website code and offer input on optimization and security 
          as part of my job I will help me make sure that their websites are safe and operating at their best. "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};
export default Features;
