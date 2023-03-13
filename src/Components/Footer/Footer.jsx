import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center mt-8 mb-8">
      <p className="text-grey font-w5">
        Copyright Reanan Template. All-Right Reserved {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
