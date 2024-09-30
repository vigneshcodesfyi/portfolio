import React, { useEffect, useRef } from "react";
import "./Education.css";
const education = [
  {
    id: 1,
    degree: "BE MECH (2015-2019)",
    institution: "Peri Institute of Technology",
    grade: "6.64 CGPA",
  },
  {
    id: 2,
    degree: "HSC (2013-2015)",
    institution: "Prince Matriculation Higher Secondary School",
    grade: "87%",
  },
  {
    id: 3,
    degree: "SSLC (2012-2013)",
    institution: "Prince Matriculation Higher Secondary School",
    grade: "92%",
  },
];

const Education = () => {
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
    <div className="p-20">
      <h1 className="text-center text-6xl font-bold text-white mb-10">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gray-100 p-6 rounded-lg text-black font-bold border-2 border-white edu-glow opacity-0 transform translate-y-10 transition-opacity duration-500 ease-in-out"
          >
            <h2 className="font-extrabold text-center p-4 text-2xl">
              {item.degree}
            </h2>
            <div className="text-center">
              <p className="text-xl mb-4">{item.institution}</p>
              <p className="text-3xl text-red-500">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
