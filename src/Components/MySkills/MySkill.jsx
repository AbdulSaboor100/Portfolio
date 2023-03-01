import React from "react";
import ProgressBar from "../Commons/ProgressBar/ProgressBar";

const MySkill = () => {
  return (
    <div className="bg-white w-full  flex justify-center items-center w-full flex-col  ">
      <div className="w-4/5 pt-16 pb-16">
        <h1 className=" text-h3 font-w9 ">My Skills</h1>
        <div className=" flex    gap-8  pt-8 pb-8 w-full md:flex-wrap  ">
          <div className="w-1/2 flex flex-col gap-6 md:w-full">
            <ProgressBar progress={"92%"} />
            <ProgressBar progress={"80%"} />
            <ProgressBar progress={"50%"} />
            <ProgressBar progress={"60%"} />
            <ProgressBar progress={"80%"} />
          </div>
          <div className="w-1/2 flex flex-col gap-6 md:w-full ">
            <ProgressBar progress={"78%"} />
            <ProgressBar progress={"95%"} />
            <ProgressBar progress={"75%"} />
            <ProgressBar progress={"80%"} />
            <ProgressBar progress={"50%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
