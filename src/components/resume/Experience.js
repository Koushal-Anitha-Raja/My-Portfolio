import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-4 font-titleFont flex flex-col lgl:flex-row lgl:gap-20 gap-8"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titlefont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-2xl lgl:text-4xl font-bold">
            Academic Experience
          </h2>
        </div>
        <div className="mt-3 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Web Development (MERN stack)"
            subTitle=" Fable: A social, storytelling application"
            GPA="USA"
            des="• Created a web-enabled, web-ready, multi-browser compatible, ReactJs powered web application where users can post stories, 
            read new stories written by authors, add stories to library and share across community
            • Designed using ReactJs, Mongo DB, NodeJs+Express.js, Redis, Firebase, Material-UI as core technologies and Docker 
            (Containerization tool), ElasticSearch (Text-based search engine), GraphicsMagick (Image manipulation library for cropping 
            and resizing cover images)"
          />
          <ResumeCard
            title="Web Development (Node.js, MongoDB, Express.js)"
            subTitle=" Hospital Management System application "
            GPA="USA"
            des="• Established an interaction between frontend and backend with JSON object
            • Comfortable working with MERN (MONGODB, EXPRESS, REACT, NODE JS)
            • Experienced with NODE JS and responsible for developing partner homepages using HTML5, CSS3, JavaScript, Node 
            JS and JQUERY and developed a complete AJAX application"
          />
          <ResumeCard
            title="Big Data Analytics"
            subTitle=" Recommender System -Amazon Recommendation System"
            GPA="USA"
            des="• Leveraged reviews  database information to analyze whether a product can be recommended to a particular user and 
            products similar to each other based on description provided
            • Applied methods on Content based, SVD and Collaborative filtering to improve Recommender’s performance"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titlefont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Leadership Skills</h2>
        </div>
        <div className="mt-3 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python and Django Project"
            subTitle="MRI Image Classification of Brain Tumors Using Deep Learning (Python, Django Web Framework)
            "
            GPA="INDIA"
            des="• Predicted Brain tumors by Deep Learning Convolution Neural Network (CNN) with Django web framework with Support
            Vector Machines Trained and tested dataset using classifier and fit generation over 1000 images and used Alex Net and
            LeNet withaccuracy of 96.7%

            • Analyzed doctors to identify the FALSE POSITIVES and FALSE NEGATIVES in detecting brain tumor
            • Deployed a CNN model with increased recognition rate and classification accuracy of severity of brain tumor"
          />
          <ResumeCard
            title="Technological Event Team Lead"
            subTitle="Techcrezenza Symposium Event"
            GPA="INDIA"
            des=" • Demonstrated effective leadership by overseeing a team of four members in planning and executing a college technical event.
            • Utilized strong organizational skills to coordinate event logistics, including venue selection, equipment rental, and vendor management.
       "
          />
          {/* <ResumeCard
            title=""
            subTitle="Kingstar Secondary School (2001 - 2010)"
            GPA="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
