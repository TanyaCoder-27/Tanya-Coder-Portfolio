//import React from "react";
/*
const services = [
  {
    id: 1,
    title: "Data Analysis & Visualization",
    description: "Analyzing data , Gaining Insights and creating interactive visualizations.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Integrating GenAI LLMs in applications",
    description: "Integrating GenAI LLMs in applications to provide better user experience.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills , providing user authentication and database management.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content about technologies and programming languages.",
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Building various machine learning models for different use cases.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
*/

//import React from "react";
/*
const skills = {
  technical: [
    "Frontend Development: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap,Firebase",
    "Data Analysis & Visualization: Python, Pandas, NumPy, Matplotlib, Seaborn, Streamlit,PowerBI,MySQL",
    "Integrating GenAI LLMs in applications",
    "Machine Learning: Python, Scikit-learn, TensorFlow, Keras",
  ],
  nonTechnical: [
    "Self-Learning",
    "Content Writing",
    "Adaptability",
    "Problem-Solving",
    "Time Management",
    "Communication",
  ],
};

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 gap-8">
         
          <div className="bg-gray-800 px-6 py-6 rounded-lg">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Technical Skills
            </h3>
            <ul className="text-gray-300 list-disc list-inside">
              {skills.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800 px-6 py-6 rounded-lg">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Non-Technical Skills
            </h3>
            <ul className="text-gray-300 list-disc list-inside">
              {skills.nonTechnical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
*/

import { FaCheckCircle } from "react-icons/fa";

const skills = {
  technical: [
    "Frontend Development: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Firebase",
    "Data Analysis & Visualization: Python, Pandas, NumPy, Matplotlib, Seaborn, Streamlit, Power BI, MySQL",
    "Integrating GenAI LLMs in applications",
    "Machine Learning: Python, Scikit-learn, Tensorflow, Keras",
  ],
  nonTechnical: [
    "Self-Learning",
    "Content Writing",
    "Adaptability",
    "Problem-Solving",
    "Time Management",
    "Communication",
  ],
};

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Technical Skills
            </h3>
            <ul className="text-gray-300 space-y-2">
              {skills.technical.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 hover:text-green-400 transition-colors"
                >
                  <FaCheckCircle className="text-green-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Non-Technical Skills */}
          <div className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Non-Technical Skills
            </h3>
            <ul className="text-gray-300 space-y-2">
              {skills.nonTechnical.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                >
                  <FaCheckCircle className="text-blue-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
