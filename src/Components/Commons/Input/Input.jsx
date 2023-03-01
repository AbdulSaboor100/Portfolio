import React from "react";
const Input = ({ type, placeholder, name, onBlur, onChange, value, id }) => {
  return (
    <div className="InputWrapper w-full h-full">
      <input
        className="w-full bg-transparent p-4 h-full pl-0 text-xl outline-none border-0 border-b border-black2"
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        id={id}
      />
    </div>
  );
};

export default Input;
