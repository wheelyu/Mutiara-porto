import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full top-0 transition-all duration-300 ease-in ${
        isScrolled ? "bg-green-800 p-2" : "bg-slate-100 p-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className={`transition-all  py-2 rounded ${
              isScrolled
                ? "text-white hover-lines px-5  "
                : "text-blue-500 px-3 hover-line"
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`transition-all px-3 py-2 ${
              isScrolled
                ? "text-white hover-lines"
                : "text-blue-500 px-3 hover-line"
            }`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`transition-all px-3 py-2 ${
              isScrolled
                ? "text-white hover-lines"
                : "text-blue-500 px-3 hover-line"
            }`}
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href=""
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-pink-600 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-pink-600 hover:text-pink-800 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href=""
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-500 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-500 hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href=""
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-900 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-900 hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href=""
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-600 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-600  hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
