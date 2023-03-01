import React from "react";

const Textarea = ({ name, id, value, onChange, onBlur, placeholder, rows }) => {
  return (
    <div className="w-full h-full">
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full mt-4 resize-none text-h6  bg-base_dark outline-0 border-b border-black2"
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default Textarea;
