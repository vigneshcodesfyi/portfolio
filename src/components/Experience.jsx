import React, { useState } from "react";
import "./Education.css";
const company = [
  {
    id: 1,
    companyname: "Hexaware Technologies - Executive",
    position: "Position: Executive",
    year: "Year: 2021-2022",
    descriptions: [
      "1. Managed the adjudication process for international and domestic clients following background checks.",
      "2. Analyzed background check results and determined eligibility for employment based on company policies and legal guidelines.",
      "3. Worked closely with the team to maintain optimum levels of communication to effectively and efficiently complete projects.",
      "4. Proved successful working within tight deadlines and fast-paced atmosphere.",
      "5. Took over team leadership in the absence of my team leader, working as Quality Analyst auditing teams' work.",
      "6. Conducted training sessions and meetings to rectify errors and improve quality.",
    ],
  },
  {
    id: 2,
    companyname: "Urbanrise Constructions - Internship",
    position: "Position: Intern",
    year: "Year: Jan  2023 - July 2023",
    descriptions: [
      "1. Received training on using and managing Openbravo, an ERP software.",
      "2. Learned to navigate and perform tasks in a Linux environment.",
      "3. Gained proficiency in PostgreSQL commands for data querying.",
      "4. Actively engaged with team leaders and senior developers, presenting queries and seeking guidance to enhance understanding.",
      "5. Generated reports using Openbravo’s reporting tools (Jasper/Ireport) to provide data insights.",
    ],
  },
  {
    id: 3,
    companyname: "Urbanrise Constructions - Software Developer",
    position: "Position: Software Developer",
    year: "Year: July  2023 - Jan 2024",
    descriptions: [
      "1. Led the development of a new module integrating Openbravo ERP with the Face Bas biometric application via API.",
      "2. Developed new windows and designed approval workflows, utilizing buttons and windows to streamline user interactions.",
      "3. Collaborated with senior developers to ensure compliance with business processes.",
      "4. Implemented features to fetch and transfer data seamlessly between screens, enhancing data consistency.",
      "5. Developed custom reports that can be downloaded through a user-friendly button interface.",
      "6. Developed background processes in Openbravo using Java for scheduled tasks.",
    ],
  },
  {
    id: 4,
    companyname: "Senchola University - Internship",
    position: "Position: Intern",
    year: "Year: 2023",
    descriptions: [
      "My key responsibilities included building responsive user interfaces, This hands-on experience significantly improved my technical skills in JavaScript",
    ],
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(company[0]);

  const handleClick = (company) => {
    setSelectedCompany(company);
  };
  return (
    <div className="  md:pb-10 ">
      <h1 className="text-4xl md:text-6xl text-white text-center pb-5 md:p-10 font-bold ">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row w-full mx-auto border-8 ">
        <div className="w-full md:w-1/3  ">
          {/* <h2 className="text-xl md:text-4xl p-20 text-center font-semibold text-black bg-white  border">
            Company Name
          </h2> */}
          <ul>
            {company.map((item) => (
              <div
                key={item.id}
                className={` text-black p-5 border border-white ${
                  selectedCompany.id === item.id
                    ? "bg-red-600 text-white" // Background color for the selected company
                    : " hover:bg-red-600 text-white" // Default background
                } cursor-pointer`}
              >
                <li
                  onClick={() => handleClick(item)}
                  className="mb-2 text-lg md:text-xl p-10"
                >
                  {item.companyname}
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Right Div (70% width) */}
        <div
          className="w-full md:w-2/3  border-white bg-cover bg-white "
          // style={{
          //   backgroundImage:
          //     'url("https://www.researchgate.net/profile/Roni-Stern/publication/220543302/figure/download/fig4/AS:654751716876289@1533116382029/A-20-node-Delaunay-graph.png")',
          // }}
        >
          {/* <h2 className="text-xl md:text-4xl p-20 text-center font-semibold text-white   border-10">
            Description
          </h2> */}
          <ul>
            <li className="mb-2 text-black p-10 text-xl text-center ">
              <strong>{selectedCompany.position}</strong> <br />
              <strong>{selectedCompany.year}</strong>
            </li>
            <div className="border p-5 bg-white">
              {selectedCompany.descriptions.map((desc, index) => (
                <li key={index} className="mb-2 text-black pl-10 text-xl ">
                  {desc}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
