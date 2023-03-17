import React from "react";
import arrow from "../../assets/angles-right-solid.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhymeSection = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  return (
    <div
      className="  flex justify-center py-32  w-100 h-full bg-base_dark "
      id={"about"}
    >
      <div className="w-5/6 h-full sm:w-[90%] ">
        <div className="w-full overflow-x-hidden" ref={ref}>
          <motion.div
            animate={{
              x: inView ? 0 : "80%",
              opacity: inView ? 1 : 0,
              visibility: inView ? "visible" : "hidden",
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              duration: 3,
            }}
            initial={{ opacity: 0.9 }}
          >
            <h3 className="font-w9 text-h3 text-black2 xs:text-h4">Why me?</h3>
          </motion.div>
        </div>
        <div className=" grid grid-cols-2 mt-16 sm:grid-cols-1 " ref={ref}>
          <div>
            <motion.div
              animate={{
                y: inView ? 0 : "80vh",
                opacity: inView ? 1 : 0,
                visibility: inView ? "visible" : "hidden",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 4,
              }}
              initial={{ opacity: 0.9 }}
            >
              <h3 className="font-w9 text-h2 text-black2 sm:pb-4 xs:text-h5">
                I help you to make beauiful websites
              </h3>
              <p className="leading-8 font-w3 text-black3 sm:pb-20 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              animate={{
                y: inView ? 0 : "80vh",
                opacity: inView ? 1 : 0,
                visibility: inView ? "visible" : "hidden",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 4,
              }}
              initial={{ opacity: 0.9 }}
            >
              <div className="flex justify-evenly flex-wrap w-full pt-4 sm:justify-start xs:w-full xs:block ">
                {Array(8)
                  .fill()
                  .map((item) => (
                    <div className=" flex  w-5/12 border-b border-dotted border-border_grey pb-2 mb-9 sm:w-5/12 sm:mr-6  xs:!w-full" key={item}>
                      <img src={arrow} alt="" />
                      <h4 className="font-w5 text-black3 mx-3">Web design</h4>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhymeSection;
