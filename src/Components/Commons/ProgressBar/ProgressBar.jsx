import React from "react";
const ProgressBar = ({ progress }) => {

  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <p>Internet Marketing</p>
        <p>{progress}</p>
      </div>
      <div className="w-full bg-gray-200 shadow-inner ring-inset p-0">
        <div
          style={{ width: progress }}
          className=" h-2.5 bg-main_primary"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
