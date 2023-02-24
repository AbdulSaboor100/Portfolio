import React from "react";
import "./ProgressBar.scss";
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <p>Internet Marketing</p>
        <p>92%</p>
      </div>
      <div className="w-full">
        <input
          style={{
            borderLeft: progress,
          }}
          type="range"
          min="1"
          max="100"
          step="1"
          value="20"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
