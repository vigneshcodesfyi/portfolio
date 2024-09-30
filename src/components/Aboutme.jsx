import React from "react";
import profileImage from "./vicky.png"; // Your image path
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing email icon

const AboutMe = () => {
  return (
    <div className=" flex flex-col   lg:flex-row items-center md:items-center p-10 md:space-y-0 md:space-x-8  lg:pt-10 lg:pb-10 lg:h-[60vh]  sm:h-[80vh] border-8 bg-gray-300">
      <div className="w-1/2  flex justify-center items-center ">
        <img
          src={profileImage}
          alt="Your Name"
          className="w-96 h-96 object-cover  animate-none"
        />
      </div>

      <div className="flex flex-col justify-center w-full md:w-2/3 text-center md:text-left border-8 text-black p-6 bg-white">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          I'm a passionate web developer with experience in creating dynamic and
          responsive web applications. I love coding and always strive to
          improve my skills.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center md:justify-start space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-red-600 transition-transform transform hover:scale-125 "
          >
            <FaLinkedin size={40} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600 transition-transform transform hover:scale-125 "
          >
            <FaGithub size={40} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-red-600 transition-transform transform hover:scale-125 "
          >
            <FaTwitter size={40} />
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-125 "
          >
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
