import React, { useEffect, useRef, useState } from "react";

const NavSm = () => {
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
      className={`w-full fixed sm:block top-0  ${
        bgColor ? onScrollStyling : ""
      }`}
    >
      <div
        className={`w-full h-full flex justify-between items-center  p-4 relative`}
      >
        <div>
          <p className={`text-black font-w7 text-h5 capitalize`}>Reanan.</p>
        </div>
        <div className={`flex gap-7 items-center`}>
          <i className="bx bx-menu text-h4 text-main_primary cursor-pointer"></i>
        </div>
        <div
          className={
            "w-full h-full bg-black p-4 flex flex-col gap-4 absolute left-0 right-0 bottom-0 top-16"
          }
        >
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

export default NavSm;
