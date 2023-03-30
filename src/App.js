import Navbar from "./components/navbar/Navbar";
import React from "react";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/testimonials";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-100">
      <div className="max-w-screen-1xl mx-auto px-16">
        <Navbar />
        <br></br>
        <br></br>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
