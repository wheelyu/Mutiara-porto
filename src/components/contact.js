// SkillSection.js
import React from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import { FaReact, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa"; // Ikon contoh
import { FaUsers, FaComments, FaPeopleCarry } from "react-icons/fa";
const skills = [
  {
    name: "Comunicate",
    icon: <FaUsers />,
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "Relation",
    icon: <FaComments />,
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "Organize",
    icon: <FaPeopleCarry />,
    description:
      "Bootstrap is a CSS framework for developing responsive websites.",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    description: "Git is a distributed version control system.",
  },
];

const SkillSection = () => {
  // Fungsi untuk menampilkan modal dengan SweetAlert2
  const showSkillInfo = (skill) => {
    Swal.fire({
      title: skill.name,
      text: skill.description,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-green-800 to-slate-100 p-8 relative z-20"
      id="skill"
    >
      <h2 className="text-8xl font-bold text-center mb-8 pt-20 pb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => showSkillInfo(skill)}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="flex flex-col items-center justify-center p-6  text-green-400 hover:text-white border border-green-400 hover:border-white border-b-8 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-8 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
