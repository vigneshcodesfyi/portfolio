import React from "react";
import Navbar from "./components/Navbar"; // Ensure the correct import path
import Experience from "./components/Experience";
import HeroSection from "./components/Hero";
import AboutMe from "./components/Aboutme";
import SkillsSection from "./components/Skills";
import Education from "./components/Education";
import ProjectsGallery from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className=" bg-fixed"
      style={{
        backgroundImage:
          'url("https://www.bing.com/th/id/OGC.dfad07f4a517fbc8071a39a9aa6337dc?pid=1.7&rurl=https%3a%2f%2fcdn.pixabay.com%2fanimation%2f2023%2f03%2f19%2f02%2f34%2f02-34-11-741_512.gif&ehk=2Lq6lQ%2fh4wGtCpwFOKwwUPnd%2fPzTuVy4Rnwx45u8eL0%3d")',
      }}
    >
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <Education />
      <div id="skillssection">
        <SkillsSection />
      </div>

      <Experience />
      <div id="projects">
        <ProjectsGallery />
      </div>

      <Footer />
    </div>
  );
}

export default App;
