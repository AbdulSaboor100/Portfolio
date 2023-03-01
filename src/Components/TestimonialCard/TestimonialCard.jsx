import React from "react";
import wordpress from "../../assets/message.svg";
const TestimonialCard = () => {
  return (
    <div className="min-w-96 w-full min-w-50 p-5 flex flex-col justify-center items-center   bg-white h-80 ">
      <div
        className="p-2
       bg-black rounded-full"
      >
        <img src={wordpress} alt="" />
      </div>
      <h5 className="text-h5 font-w7 mt-2">Albart Smith</h5>
      <small className="text-gray-400 mt-1 text-xs">CEO FACEBOOK</small>
      <p className="text-center  text-base pt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever.
      </p>
    </div>
  );
};

export default TestimonialCard;
