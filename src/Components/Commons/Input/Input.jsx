import React from "react";
import "./Input.scss";
const Input = ({ type, placeholder, name, onBlur, onChange, value, id }) => {
  return (
    <div className="InputWrapper">
      <input
        className="border-b-2 border-black2"
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
