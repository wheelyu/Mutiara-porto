import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const ContentWithImage = () => {
  return (
    <div className="bg-slate-100 h-screen overflow-hidden ">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-40 mx-20 fixed z-0">
        {/* Teks di sebelah kiri */}
        <motion.div
          className="box"
          initial={{ opacity: 0, translateX: -600 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="md:w-1/2 text-center md:text-left ">
            <p className="text-xl font-bold mb-4 italic text-green-300">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Halo,",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Hello,",
                  1000,
                  "Ciao,",
                  1000,
                  "Bonjour,",
                  1000,
                  "Olá,",
                  1000,
                  "Xin chào,",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
            <h2 className="text-4xl font-bold mb-4">I am Mutiara Pandiangan</h2>
            <p className="text-gray-700 mb-6 w-max-md">
              Ini adalah deskripsi singkat tentang orang ini. Dia adalah seorang
              profesional dengan pengalaman yang luas dalam bidang tertentu, dan
              bekerja keras untuk mencapai hasil yang luar biasa.
            </p>
            <button class="overflow-hidden relative w-36 p-2 h-12 bg-green-500 text-white border-none rounded-md text-xl font-bold cursor-pointer  z-0 group">
              Resume
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-green-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-green-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 ">
                Download
              </span>
            </button>
          </div>
        </motion.div>
        {/* Foto di sebelah kanan */}
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5, rotate: 300 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="w-96 mt-6 md:mt-0 ">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "20%",
                rotate: "20deg",
                boxShadow: "0 48px 50px 6px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="muti.jpg"
                alt="Foto Profil"
                className="w-full  object-cover rounded-lg shadow-md scale-110 transform transition-transform duration-500 hover:scale-150 hover:cursor-pointer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentWithImage;
