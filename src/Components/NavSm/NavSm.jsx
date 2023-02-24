import React, { useEffect, useRef, useState } from "react";

const NavSm = () => {
  const [bgColor, setBgColor] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
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
    <div className={"w-full h-auto hidden sm:block"}>
      <div
        className={
          "w-full h-auto flex items-center gap-4 justify-between p-4 bg-white"
        }
      >
        <p className={`text-black font-w7 text-h5 capitalize`}>Reanan.</p>
        <i
          className="bx bx-menu text-h4 text-main_primary cursor-pointer"
          onClick={() => setIsMenu(!isMenu)}
        ></i>
      </div>
      {isMenu && (
        <div
          className={
            "w-full h-auto absolute top-[5rem] bg-black p-4 flex flex-col gap-3"
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
      )}
    </div>
  );
};

export default NavSm;
