import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title=" Business Strategy"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
        />
        <Card
          title="App Development"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="A business strategy outlines the plan of action to achieve the vision and set objectives of an organization 
        and guides the decision-making processes to improve the company's financial stability in a competing market. "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};
export default Features;
