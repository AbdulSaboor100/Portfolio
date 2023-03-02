import React, { useState } from "react";
import PortfolioCards from "../PortfolioCards/PortfolioCards";

const PortfolioSection = () => {
  const tabdata = [
    {
      title: "All",
      status: "All",
    },
    {
      title: "WEBDESIGN",
      status: "WEBDESIGN",
    },
    {
      title: "DEVELOPMENT",
      status: "DEVELOPMENT",
    },
    {
      title: "PHOTOGRAPHY",
      status: "PHOTOGRAPHY",
    },
  ];
  const [isActive, setIsActive] = useState("All");

  const handleClick = (item) => {
    setIsActive(item?.status);
  };
  // const [filters, setFilters] = useState({
  //   tab: "Email",
  // });

  // const styleHandler = (selected) => {
  //   if (filters?.tab === selected) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div className="bg-white h-full w-full my-32 ">
      <div className="flex justify-center items-center">
        <div className="w-5/6 flex justify-center pb-10 ">
          {tabdata?.map((item, i) => (
            <div className="flex flex-col mt-4 ">
              <button
                className="px-5 font-w3 text-black3 text-small"
                key={i}
                onClick={() => handleClick(item)}
              >
                {item?.title}
              </button>
              {item?.status === isActive && (
                <span className="border-b border-main_primary mt-1 border-t-2 mx-4 rounded-md"></span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" w-4/5 h-full p-3 flex  mx-auto md:w-[95%] sm:w-[90%]">
       
        {isActive === "All" && (
          <div className="h-[55rem] w-full grid grid-cols-2 gap-6 xs:grid-cols-1  ">
            {Array(4)
              .fill()
              .map((item) => (
                <div className="w-full h-full">
                  <PortfolioCards />
                </div>
              ))}
          </div>
        )}
        {/* </div> */}
        {/* <div className="border border-red-400 h-3/4">
            {isActive === "All" && <p>All</p>}
          </div> */}
      </div>
    </div>
   
  );
};

export default PortfolioSection;
