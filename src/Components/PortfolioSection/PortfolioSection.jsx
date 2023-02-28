import React, { useState } from "react";

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
  const [isActive, setIsActive] = useState(
    "All"
  );

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
    <div className="bg-white h-screen w-full my-32">
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
      <div className=" w-4/5 h-full p-3 flex  mx-auto">
        <div className=" grid grid-cols-2 w-full gap-7 ">
            <div className="border border-red-400 h-3/4">
            {isActive === 'All' && (
                <p>All</p>
            )}
            </div>
            <div className="border border-red-400 h-3/4">
            {isActive === 'All' && (
                <p>All</p>
            )}
            </div>

        </div>
        

       
        </div>
    </div>
  );
};

export default PortfolioSection;
