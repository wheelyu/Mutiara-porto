import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// Jika Anda ingin mengimpor modul tambahan

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-in-out", // Efek easing animasi
      once: false, // Hanya animasi saat pertama kali scroll
    });
  }, []);
  return (
    <div className="bg-green-800 h-screen relative z-20 ">
      <div data-aos="fade-up" className="">
        <div className="h-36"></div>
        <h1 className="text-9xl font-bold text-slate-900 mt">About Me</h1>
        <h1 className="text-9xl font-bold text-slate-300 relative top-[-120px] left-[-10px]">
          About Me
        </h1>
      </div>
    </div>
  );
};

export default About;
