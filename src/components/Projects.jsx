import SuccessSparkImage from "../assets/d2.jpg";
import RoboImage from "../assets/onhealth.png";
import PyImage from "../assets/maxresdefault.jpg";
import TripImage from "../assets/trip.png";
import LaneImage from "../assets/lane.png";

const projects = [
  {
    id: 1,
    name: "AI Career Coach (SuccessSpark)",
    technologies: "Next.js, Tailwind CSS, Clerk, PostgreSQL, Prisma, Shadcn, GenAI",
    image: SuccessSparkImage,
    github: "https://github.com/TanyaCoder-27/AI-Career-Coach-SuccessSpark",
    description: "SuccessSpark is an AI-powered career coaching platform that helps create an intelligent system for resume creation, job-specific cover letter drafting, and personalized interview practice.Users are also able to receive new industry updates every week.",
  },
  {
    id: 2,
    name: "Online Healthcare Service (HealthGenie)",
    technologies: "Python, Streamlit, GenAI",
    image: RoboImage,
    github: "https://github.com/TanyaCoder-27/Online-Healthcare-Service-App",
    description: "HealthGenie is an online healthcare service application that has multi-functional features aligned with health-centric goals, including a disease prediction chatbot that analyzes user-input symptoms and provides predicted diseases along with descriptions and precautions. I implemented an SVM model for accurate disease prediction and utilized the Llama 3.3 Inference client LLM to deliver comprehensive disease descriptions. Additionally, I used the Gemini 1.5 Pro LLM to provide precise safety measures from images.",
  },
  {
    id: 3,
    name: "Other Data Analysis Projects",
    technologies: "Python, Pandas, Numpy, Matplotlib, Seaborn, etc.",
    image: PyImage,
    github: "https://github.com/TanyaCoder-27/DataAnalysisWithPython",
    description: "Proficient in using Pandas, NumPy, and Matplotlib for data manipulation, analysis, and visualization. Experienced with web scraping using Selenium and Beautiful Soup for HTML parsing. Successfully implemented a Convolutional Neural Network (CNN) model for brain tumor identification and utilized TensorFlow/Keras for testing skin cancer, including model development, training, and evaluation. Additionally, worked on face-mask detection using OpenCV and generative AI projects using Google Gemini LLMs, such as information gain through Q&A from multiple PDFs and images.",
  },
  {
    id: 4,
    name: "AI Trip Planner (Travel Buddy)",
    technologies: "Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap Backend: Python, Django Database: SQLite API: Google Gemini API",
    image: TripImage,
    github: "https://github.com/TanyaCoder-27/Travel_Buddy_AI_Trip_Planner?tab=readme-ov-file",
    description: "AI Trip Planner is an advanced travel planning system that utilizes the Google Gemini API to provide personalized trip suggestions. Whether you're traveling solo, with friends, a partner, or family, this smart planner tailors your itinerary based on location, duration, and mood.",
  },
  {
    id: 5,
    name: "Vehicle Speed Detection (LaneVision)",
    technologies: "Python, Django, SQLite, YOLOv8, OpenCV, NumPy, HTML/CSS/JS, Bootstrap",
    image: LaneImage,
    github: "https://github.com/TanyaCoder-27/LaneVision",
    description: "LaneVision is a cutting-edge vehicle speed detection system that leverages state-of-the-art computer vision and AI technologies to monitor traffic in real-time. Built with Django and powered by YOLOv8, it provides accurate speed measurements, vehicle tracking, and comprehensive traffic analytics.",
  },
];


const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-2">{project.technologies}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
