import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Education.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="p-4  top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between md:justify-around items-center">
        <div className="text-white text-2xl font-bold">MyPortfolio</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <span>✖</span> : <span>☰</span>}
          </button>
        </div>

        <ul className={`hidden md:flex space-x-16 font-bold`}>
          <li>
            <a href="#home" className="text-white hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-red-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#skillssection" className="text-white hover:text-red-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#aboutme" className="text-white hover:text-red-600">
              About Me
            </a>
          </li>
        </ul>

        {isOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-gray-100 flex flex-col space-y-4 md:hidden">
            <li>
              <a
                href="#home"
                className="block text-black hover:bg-red-400 hover:text-black p-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-black hover:bg-red-400 hover:text-black p-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skillssection"
                className="block text-black hover:bg-red-400 hover:text-black p-2"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="block text-black hover:bg-red-400 hover:text-black p-2"
              >
                About Me
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
