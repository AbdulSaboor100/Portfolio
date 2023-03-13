import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  const [bgColor, setBgColor] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const styleHandler = () => {
    if (window.scrollY >= 80) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  const onScrollStyling = "bg-white shadow-lg";

  window.addEventListener("scroll", styleHandler);

  const handleNavLink = (val) => setActiveLink(val);

  useEffect(() => {
    let hash = window.location?.hash;
    setActiveLink(hash ? hash : "/");
  }, []);

  return (
    <div
      className={`w-full fixed top-0 sm:hidden z-10 ${
        bgColor ? onScrollStyling : ""
      }`}
    >
      <div
        className={`w-full h-[66px] flex justify-between items-center max-w-m1170 m-auto p-4 `}
      >
        <div>
          <p className={`text-black font-w7 text-h5 capitalize`}>
            {data?.title}
          </p>
        </div>
        <div className={`flex gap-7 items-center`}>
          <p
            className={`${
              activeLink === "#home" || activeLink === "/"
                ? "text-main_primary"
                : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("/")}
          >
            <a href={"#home"}>Home</a>
          </p>
          <p
            className={`${
              activeLink === "#portfolio" ? "text-main_primary" : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("#portfolio")}
          >
            <a href={"#portfolio"}>Portfolio</a>
          </p>
          <p
            className={`${
              activeLink === "#resume" ? "text-main_primary" : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("#resume")}
          >
            <a href={"#resume"}>Resume</a>
          </p>
          <p
            className={`${
              activeLink === "#about" ? "text-main_primary" : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("#about")}
          >
            <a href={"#about"}>About</a>
          </p>
          <p
            className={`${
              activeLink === "#testimonial" ? "text-main_primary" : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("#testimonial")}
          >
            <a href={"#testimonial"}>Testimonial</a>
          </p>
          <p
            className={`${
              activeLink === "#contact" ? "text-main_primary" : ""
            } text-small font-w5 cursor-pointer`}
            onClick={() => handleNavLink("#contact")}
          >
            <a href={"#contact"}>Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
