import React, { useEffect, useState } from "react";
import PortfolioCards from "../PortfolioCards/PortfolioCards";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioSection = () => {
  const [toggler, setToggler] = useState(false);
  const [imgSources, setImgSources] = useState([]);
  const [isActive, setIsActive] = useState("All");
  const [portfolio, setPortfolio] = useState([]);

  const portfolioData = [
    {
      id: 1,
      title: "Web Development",
      description: "Project one",
      img: "/Assets/1.jpg",
      category: ["All", "WEBDESIGN"],
    },
    {
      id: 2,
      title: "Web Development",
      description: "Project two",
      img: "/Assets/2.jpg",
      category: ["All", "DEVELOPMENT"],
    },
    {
      id: 3,
      title: "Web Development",
      description: "Project three",
      img: "/Assets/3.jpg",
      category: ["All", "DEVELOPMENT"],
    },
    {
      id: 4,
      title: "Web Development",
      description: "Project four",
      img: "/Assets/4.jpg",
      category: ["All", "WEBDESIGN", "DEVELOPMENT", "PHOTOGRAPHY"],
    },
  ];

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

  const filteredPortfolio = (arr, key) => {
    const copyArr = [...arr];
    const data = [];
    copyArr?.filter((port, i) => {
      let index = port?.category?.indexOf(key);
      if (index >= 0) {
        data.push(port);
      }
    });
    return data;
  };

  useEffect(() => {
    setPortfolio(filteredPortfolio(portfolioData, "All"));
  }, []);

  const handleClick = (item) => {
    setImgSources([]);
    setIsActive(item?.status);

    setPortfolio(filteredPortfolio(portfolioData, item?.status));
  };

  const cleanArray = (arr, keyToRemove) => {
    const copyArr = [...arr];
    const index = copyArr?.findIndex((item) => item?.img === keyToRemove);
    copyArr.splice(index, 1);
    return copyArr;
  };

  const handleCardClick = (img) => {
    setToggler(true);
    const copyPortfolio = [...cleanArray(portfolio, img)];
    const images = [];
    copyPortfolio?.filter((item, i) => {
      images.push({ src: item?.img });
    });
    setImgSources([{ src: img }, ...images]);
  };

  return (
    <div className="bg-white h-full w-full my-8  " id={"portfolio"}>
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
          {portfolio?.map((item, i) => (
            <div className="w-full h-full max-h-[50rem] " key={i}>
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
      <Lightbox
        open={toggler}
        close={() => setToggler(false)}
        slides={imgSources}
      />
    </div>
  );
};

export default PortfolioSection;
