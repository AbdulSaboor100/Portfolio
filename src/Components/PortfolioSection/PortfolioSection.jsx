import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import PortfolioCards from "../PortfolioCards/PortfolioCards";

const PortfolioSection = () => {
  const [toggler, setToggler] = useState(false);
  const [imgSources, setImgSources] = useState([]);
  const [isActive, setIsActive] = useState("All");
  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: "Web Development",
      description: "Project one",
      img: "/Assets/1.jpg",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Project two",
      img: "/Assets/2.jpg",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Project three",
      img: "/Assets/3.jpg",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Project four",
      img: "/Assets/4.jpg",
    },
  ]);

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

  const handleClick = (item) => {
    setIsActive(item?.status);
    if (item?.status === "All") {
      setPortfolio([
        {
          id: 1,
          title: "Web Development",
          description: "Project one",
          img: "/Assets/1.jpg",
        },
        {
          id: 2,
          title: "Web Development",
          description: "Project two",
          img: "/Assets/2.jpg",
        },
        {
          id: 3,
          title: "Web Development",
          description: "Project three",
          img: "/Assets/3.jpg",
        },
        {
          id: 4,
          title: "Web Development",
          description: "Project four",
          img: "/Assets/4.jpg",
        },
      ]);
    }
    if (item?.status === "WEBDESIGN") {
      setPortfolio([
        {
          id: 1,
          title: "Web Development",
          description: "Project one",
          img: "/Assets/1.jpg",
        },
        {
          id: 4,
          title: "Web Development",
          description: "Project four",
          img: "/Assets/4.jpg",
        },
      ]);
    }
    if (item?.status === "PHOTOGRAPHY") {
      setPortfolio([
        {
          id: 4,
          title: "Web Development",
          description: "Project four",
          img: "/Assets/4.jpg",
        },
      ]);
    }
    if (item?.status === "DEVELOPMENT") {
      setPortfolio[
        ({
          id: 2,
          title: "Web Development",
          description: "Project two",
          img: "/Assets/2.jpg",
        },
        {
          id: 4,
          title: "Web Development",
          description: "Project four",
          img: "/Assets/4.jpg",
        })
      ];
    }
  };

  const handleCardClick = (img) => {
    setToggler(true);
    setImgSources([img]);
  };

  return (
    <div className="bg-white h-full w-full my-8  ">
      <div className="flex justify-center items-center ">
        <div className="w-5/6 flex justify-center pb-10  xs:flex-wrap">
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
      <div className=" w-4/5 h-full p-3 flex mx-auto md:w-[95%] sm:w-[90%]  ">
        <div className="h-[full] w-full grid grid-cols-2 gap-6 xs:grid-cols-1 ">
          {portfolio.map((item, i) => (
            <div className="w-full h-full max-h-[50rem] border border-red-500" key={i}>
              <PortfolioCards
                img={item?.img}
                title={item?.title}
                description={item?.description}
                onClick={handleCardClick}
              />
            </div>
          ))}
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={imgSources}
        onClose={() => setToggler(false)}
      />
    </div>
  );
};

export default PortfolioSection;
