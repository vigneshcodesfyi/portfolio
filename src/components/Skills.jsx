import React, { useEffect, useRef } from "react";
import "./Education.css";

const skills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
  },
  {
    name: "Core Java",
    icon: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000",
  },
  {
    name: "Postgres",
    icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  },
  {
    name: "GIT",
    icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
];

const SkillsTimeline = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          } else {
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-fixed pb-20 bg-contain md:w-1/2 md:mx-auto">
      <h1 className="text-6xl p-10 font-bold text-white">Skills</h1>
      <div className="w-full max-w-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`mb-4 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center opacity-0 transform transition duration-700 ease-out`}
            data-direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="bg-transparent p-4 rounded-lg shadow-lg w-full md:w-80 border-2 text-white shadow-md hover:scale-110 hover:bg-white hover:text-black">
              <div className="flex items-center justify-center text-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 mr-2"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTimeline;
