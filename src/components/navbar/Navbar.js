import React from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const handleButtonClick = () => {
    // Reloading the page
    window.location.reload();
  };
  return (
    <section id="home">
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titlefont border-b-[1px] border-b-gray-600">
        <div>
          <button
            className="bg-black hover:bg-gray-800 rounded-full p-2 focus:outline-none"
            onClick={handleButtonClick}
          >
            {/* Apply rounded styling to the image */}
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-cover rounded-full"
            />
          </button>
        </div>
        <div>
          <ul className="flex items-center gap-12">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal  text-slate-100 tracking-wide cursor-pointer
            hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
