import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactMiddle from "./ContactMiddle";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-10 lgl:py-20 border-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contacts" des="Contact me" />
      </div>
      <div className="w-full">
        {/* Updated layout for smaller screens */}
        <div className="w-full flex flex-col justify-between sm:flex-row sm:flex-wrap ">
          <ContactLeft />
          <ContactMiddle />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
