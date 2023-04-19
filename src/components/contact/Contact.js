import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactMiddle from "./ContactMiddle";
import ContactRight from "./ContactRight";

const Contact = () => {
  // const [username, setUsername] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [errmsg, setErrmsg] = useState("");
  // const [successmsg, setSuccessmsg] = useState("");

  // // eslint-disable-next-line no-undef
  // useEffect(() => {
  //   if (successmsg && errmsg) {
  //     setSuccessmsg("");
  //   }
  // }, [successmsg, errmsg]);

  // //Email validation  regex
  // const emailValidation = () => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  // const phoneValidation = () => {
  //   return phonenumber.match(
  //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  //   );
  // };

  // const usernameValidation = () => {
  //   return username.match(
  //     /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
  //   );
  // };

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   if (!usernameValidation(username)) {
  //     setErrmsg("Provide Valid Username");
  //   } else if (!phoneValidation(phonenumber)) {
  //     setErrmsg("Provide Valid Phone Number");
  //   } else if (!emailValidation(email)) {
  //     setErrmsg("Provide a Valid Email");
  //   } else if (subject === "") {
  //     setErrmsg("Subject is required");
  //   } else if (message === "") {
  //     setErrmsg("Message is required");
  //   } else {
  //     setSuccessmsg(
  //       `Thank you ,${username} You Message has been sent Successfully`
  //     );
  //     setErrmsg("");
  //     setUsername("");
  //     setEmail("");
  //     setPhonenumber("");
  //     setSubject("");
  //     setMessage("");

  //     //console.log(username, phonenumber, email, subject, message);
  //   }
  // };

  return (
    <section id="contact" className="w-full py-10 lgl:py-20 border-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contacts" des="Contact me" />
      </div>
      <div className="w-full">
        <div className="w-full h-[1000px] flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <ContactMiddle />
          <ContactRight />

          {/* <div
            className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          flex flex-col gap-8 p-4 lgl:p-10 rounded-lg shadow-shadowOne"
          >
            <form className="w-full flex flex-col gap-6 py-5">
              {errmsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
               text-orange-500 text-base tracking-wide animate-bounce"
                >
                  {errmsg}
                </p>
              )}
              {successmsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
                text-green-500 text-base tracking-wide animate-bounce"
                >
                  {successmsg}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errmsg === "Provide Valid Username" &&
                      "outline-designColor"
                    }
                    contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col lgl:flex-row gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                    className={`${
                      errmsg === "Provide Valid Phone Number" &&
                      "outline-designColor"
                    }
                    contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errmsg === "Provide a Valid Email" && "outline-designColor"
                  }
                    contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errmsg === "Subject is required" && "outline-designColor"
                  }
                    contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errmsg === "Message is required" && "outline-designColor"
                  }
                    contactTextArea`}
                  rows="15"
                  cols="8"
                >
                  {" "}
                </textarea>
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
                 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send message
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

//-------------------------------------------

// import React from "react";
// import Title from "../layouts/Title";
// import ContactLeft from "./ContactLeft";
// import ContactForm from "./ContactForm";
// import Contactway from "./ContactWay";

// const contact = () => {
//   return (
//     <div className="py-10">
//       <Title title="Contacts" des="Contact me" />
//       <div className="">
//         {<ContactLeft />}

//         {/* {<ContactForm />} */}
//       </div>
//     </div>
//   );
// };

// export default contact;

//---------------------------
