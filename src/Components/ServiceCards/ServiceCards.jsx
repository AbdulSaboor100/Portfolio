import React from "react";
import wordpress from "../../assets/wordpress.svg";

const ServiceCards = () => {
  return (
    <div className="min-w-96 w-full min-w-50 p-5 flex flex-col justify-center items-center gap-4 bg-white h-80 ">
      <div className="p-4 bg-base_dark rounded-full">
        <img src={wordpress} alt="" />
      </div>
      <h5 className="text-h5 font-w7">Wordpress</h5>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque
        dolore facere, culpa.
      </p>
    </div>
  );
};

export default ServiceCards;
