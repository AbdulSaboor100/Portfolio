import React from "react";
const PortfolioCards = () => {
  return (
   
        <div className=" h-full w-full border border-red-400 Image-container bg-new_img bg-cover bg-no-repeat bg-center z-0 ">
          <div className="flex justify-center items-center flex-col overlay-container  h-full bg-main_primary opacity-0 duration-300 ease-in-out hover:opacity-80 z-0">
            <h3 className="text-h4 font-w7 text-white uppercase mb-6 ">
              Web Development
            </h3>
            <p className="text-small lowercase text-white">Project one</p>
          </div>
        </div>
    
  );
};

export default PortfolioCards;