import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 size={100} />, label: "HTML" },
  { icon: <FaCss3Alt size={100} />, label: "CSS" },
  { icon: <FaReact size={100} />, label: "React" },
  { icon: <FaJsSquare size={100} />, label: "JavaScript" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-40">
      <div className="text-white max-w-[900px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-16">MySkills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[200px] w-[160px] md:h-[240px] md:w-[200px] flex flex-col justify-center items-center bg-white/10 p-8 rounded-xl hover:bg-white/20 transition-colors duration-300"
            >
              {skill.icon}
              <p className="mt-6 text-xl">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
