import React from "react";
import arrow from "../../assets/angles-right-solid.svg";

const WhymeSection = () => {
  return (
    <div className=" flex justify-center pt-32  w-100 h-screen bg-base_dark ">
      <div className="w-5/6 h-72 ">
        <h3 className="font-w9 text-h3 text-black2">Why me?</h3>
        <div className=" h-80 grid grid-cols-2 mt-16">
          <div>
            <h3 className="font-w9 text-h2 text-black2">
              I help you to make beauiful websites
            </h3>
            <p className="leading-8 font-w3 text-black3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <div className="flex justify-evenly flex-wrap w-full  pt-4">

            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-3">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9 ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9  ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9 ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9 ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9 ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
            <div className=" flex  w-5/12 border-b border-dotted border-red-400 pb-2 mb-9 ">
              <img src={arrow} alt="" />
              <h4 className="font-w5 text-black3 mx-5">Web design</h4>
            </div>
           

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhymeSection;
