import Navbar from "./components/navbar/Navbar";
import React from "react";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-100 px-4">
      <Navbar />
      <div className="max-w-screen-1xl mx-auto px-12">
        <br></br>
        <br></br>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
