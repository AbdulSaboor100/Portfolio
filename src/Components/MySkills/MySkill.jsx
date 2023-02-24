import React from "react";
import ProgressBar from "../Commons/ProgressBar/ProgressBar";

const MySkill = () => {
  return (
    <div className="bg-white w-full  flex justify-center items-center w-full flex-col  ">
      <div className="w-4/5 pt-16 pb-16">
        <h1 className=" text-h3 font-w9 ">Service</h1>
        <div className=" flex    gap-8  pt-8 pb-8 w-full md:flex-wrap  ">
          <div className="w-1/2 flex flex-col gap-8">
            <ProgressBar progress={"450px solid #fc604d"} />
            <ProgressBar progress={"480px solid #fc604d"} />
            <ProgressBar progress={"200px solid #fc604d"} />
            <ProgressBar progress={"360px solid #fc604d"} />
            <ProgressBar progress={"550px solid #fc604d"} />
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <ProgressBar progress={"200px solid #fc604d"} />
            <ProgressBar progress={"360px solid #fc604d"} />
            <ProgressBar progress={"550px solid #fc604d"} />
            <ProgressBar progress={"450px solid #fc604d"} />
            <ProgressBar progress={"480px solid #fc604d"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
