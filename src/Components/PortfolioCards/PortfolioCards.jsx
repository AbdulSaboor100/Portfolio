import React, { useState } from "react";


const PortfolioCards = ({ onClick, img, title, description }) => {
  const handleImages = (img) => {
    // setToggler(true);
    // setImgSources(['/Assets/1.jpg'])
    onClick && onClick(img);
  };

  return (
    <div
      onClick={() => handleImages(img)}
      className={`h-full w-full Image-container z-0 relative `}
    >
      <img src={img} className={"w-full h-full object-cover block"} />
      <div className="w-full h-full flex justify-center items-center flex-col absolute top-0 bottom-0 left-0 right-0 overlay-container  bg-main_primary opacity-0 duration-500 ease-in-out hover:opacity-80 z-0">
        <h3 className="text-h4 font-w7 text-white uppercase mb-6 ">{title}</h3>
        <p className="text-small lowercase text-white">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCards;
