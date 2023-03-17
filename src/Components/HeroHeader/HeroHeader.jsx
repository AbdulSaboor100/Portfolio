import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

const HeroHeader = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  return (
    <div className={"w-full h-screen py-16 bg-base_dark "} id={"home"}>
      <div
        className={
          "w-full h-full grid grid-cols-2 gap-4 max-w-m1170 m-auto p-4 sm:grid-cols-1"
        }
      >
        <div
          className={
            "w-full h-full flex flex-col justify-center sm:order-2 sm:justify-start"
          }
        >
          <h2
            className={
              "text-h2 font-w9 text-black2 mb-8 lg:text-h3 sm:!text-h4 lg:mb-4"
            }
          >
            Creative Product <br />{" "}
            <TypeAnimation
              sequence={["Developer", 3000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className={
                "text-main_primary text-text140 lg:text-h1 sm:!text-h2"
              }
              
            />
            {/* <span
              className={
                "text-main_primary text-text140 lg:text-h1 sm:!text-h2"
              }
            >
              Designer
            </span> */}
          </h2>
          <p className={"text-p font-w5 w-5/6 mb-8 sm:w-full"}>
            I work on with digital startups and entreprenurs on design and
            branding.need help on your project?{" "}
            <span className={"underline text-main_primary"}>say hello</span>
          </p>
          <div className={"flex gap-3 items-center"}>
            <i className="bx bxl-facebook text-grey text-h5"></i>
            <i className="bx bxl-twitter text-grey text-h5"></i>
            <i className="bx bxl-instagram text-grey text-h5"></i>
            <i className="bx bxl-linkedin text-grey text-h5"></i>
          </div>
        </div>

        <div
          className={
            "w-full h-full flex justify-end items-center sm:order-1 sm:justify-start sm:items-end"
          }
          ref={ref}
        >
          <motion.div
            animate={{
              y: inView ? 0 : "100vh",
              opacity: inView ? 1 : 0,
              visibility: inView ? "visible" : "hidden",
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              duration: 2,
            }}
            initial={{ opacity: 0.9 }}
          >
            <img
              className={
                "max-w-m420 h-full w-full object-contain block sm:max-w-[160px] sm:h-auto"
              }
              src={"/Assets/hero_header_1.png"}
              alt={"my image"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
