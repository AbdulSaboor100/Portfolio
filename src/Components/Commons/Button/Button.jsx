import React from "react";

const Button = ({ Children, type }) => {
  return (
    <div>
      <button
        type={type}
        className="py-3 px-4  text-h6 font-w6 text-black2 mt-5 bg-main_primary"
      >
        {Children}
      </button>
    </div>
  );
};

export default Button;
