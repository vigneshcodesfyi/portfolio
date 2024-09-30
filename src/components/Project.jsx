import React from "react";

const projects = [
  {
    id: 1,
    name: "Simple HTML Page",
    description: "A simple HTML page to demonstrate basic HTML structure.",
    link: "https://vigneshcodesfyi.github.io/Senchola_Internship/",
  },
  {
    id: 2,
    name: "Login Form",
    description: "A responsive login form created with HTML and CSS.",
    link: "https://vigneshcodesfyi.github.io/Responsivenessform/",
  },
  {
    id: 3,
    name: "Random Joke Generator",
    description: "Generate random jokes using JavaScript.",
    link: "https://vigneshcodesfyi.github.io/Joke-Generator/",
  },
  {
    id: 4,
    name: "To Do List",
    description: "A simple to-do list application built with React.",
    link: "https://vigneshcodesfyi.github.io/TOdo_task_react/",
  },
  {
    id: 5,
    name: "Cards",
    description: "A beautiful card layout using CSS Grid.",
    link: "https://vigneshcodesfyi.github.io/card/",
  },
  {
    id: 6,
    name: "E-Commerce Landing Page",
    description: "An e-commerce landing page showcasing products.",
    link: "https://vigneshcodesfyi.github.io/Landingpage/",
  },
  {
    id: 7,
    name: "Coffee Product Website",
    description: "A website dedicated to coffee products.",
    link: "https://vigneshcodesfyi.github.io/Senchola_product_website/",
  },
  {
    id: 8,
    name: "HTML CSS JS portfolio",
    description: "A practice website for portfolio using HTML-CSS-JS.",
    link: "https://vigneshcodesfyi.github.io/Portfolio-/",
  },
];

const ProjectsGallery = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Projects
      </h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group min-w-[300px] min-h-[180px]  rounded-lg p-4 shadow-lg border-2 border-white bg-white"
            >
              <h2 className="text-xl font-bold border-4  text-center p-3 text-white bg-black">
                {project.name}
              </h2>
              <p className="text-black mb-4 p-4">{project.description}</p>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" // This is a good practice for security
                  className="bg-teal-500 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-teal-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
