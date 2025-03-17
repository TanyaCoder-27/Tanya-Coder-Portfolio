import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div>
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tanya. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0"> 
            <a href="https://www.linkedin.com/in/andra-tulasi-lakshmi-tanya-6675b7277/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/TanyaCoder-27" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.geeksforgeeks.org/user/tanyako6kq7/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks Profile
            </a>
            <a href="https://leetcode.com/u/tanyakonapala/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              Leetcode Profile
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
