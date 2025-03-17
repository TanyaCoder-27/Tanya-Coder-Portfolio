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
