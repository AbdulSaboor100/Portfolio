import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ data }) => {
  const [bgColor, setBgColor] = useState(false);
  const styleHandler = () => {
    if (window.scrollY >= 80) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  const onScrollStyling = "bg-white shadow-lg";

  window.addEventListener("scroll", styleHandler);

  return (
    <div
      className={`w-full fixed top-0 sm:hidden ${
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
          <p className={`text-main_primary text-small font-w5 cursor-pointer`}>
            Home
          </p>
          <p className={`text-grey text-small font-w5 cursor-pointer`}>
            Portfolio
          </p>
          <p className={`text-grey text-small font-w5 cursor-pointer`}>About</p>
          <p className={`text-grey text-small font-w5 cursor-pointer`}>
            Testimonial
          </p>
          <p className={`text-grey text-small font-w5 cursor-pointer`}>
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
