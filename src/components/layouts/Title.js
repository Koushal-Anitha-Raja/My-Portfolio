import React from "react";
const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-8 lgl:mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h2 className=" text-2xl lgl:text-5xl text-gray-300 font-bold capitalize">
        {" "}
        {des}
      </h2>
    </div>
  );
};
export default Title;
