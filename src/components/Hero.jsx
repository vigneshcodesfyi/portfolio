import React from "react";
import picture from "./vicky.jpg"; // Your image path
import "./Education.css";

const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-center h-screen lg:h-[100vh] text-white bg-cover "
      style={{
        backgroundImage: 'url("")',
      }}
    >
      <div className="flex flex-col items-center justify-center p-6 text-center mx-auto lg:w-1/2  ">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 ">
          Hi, I'm Vignesh
        </h1>
        <p className="text-lg mb-8 ">
          I am a passionate web developer with experience in creating dynamic
          and responsive web applications. I love coding and always strive to
          improve my skills. I am a passionate web developer with experience in
          creating dynamic and responsive web applications. I love coding and
          always strive to improve my skills. I am a passionate web developer
          with experience in creating dynamic and responsive web applications. I
          love coding and always strive to improve my skills.
        </p>

        <div className="flex space-x-4 justify-center lg:justify-start">
          <a
            href="/path/to/your/resume.pdf" // Change this to your resume path
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            download
          >
            Download Resume
          </a>
          <a
            href="mailto:your-email@example.com" // Change this to your email
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
