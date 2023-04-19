import React from "react";
import { bannerImg } from "../../assets/index";
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div>
        <img
          className="rounded-full"
          src={bannerImg}
          alt="logo"
          width="500"
          height="500"
        />
      </div>
      {/* <img
        className="rounded-lg w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      /> */}
      {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow flex justify-center items center">
      {" "}
    </div> */}
    </div>
  );
};
export default RightBanner;
