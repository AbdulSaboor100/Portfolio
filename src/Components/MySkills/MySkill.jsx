import React from "react";
import ProgressBar from "../Commons/ProgressBar/ProgressBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySkill = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <div className="bg-white w-full  flex justify-center items-center  flex-col  ">
      <div className="w-4/5 pt-16 pb-16">
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
            <h1 className=" text-h3 font-w9 ">My Skills</h1>
          </motion.div>
        </div>
        <div className=" flex gap-8  pt-8 pb-8 w-full md:flex-wrap">
          <div className="w-1/2 flex flex-col gap-6 md:w-full" ref={ref}>
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
              <ProgressBar progress={"92%"} />
              <ProgressBar progress={"80%"} />
              <ProgressBar progress={"50%"} />
              <ProgressBar progress={"60%"} />
              <ProgressBar progress={"80%"} />
            </motion.div>
          </div>

          <div className="w-1/2 flex flex-col gap-6 md:w-full " ref={ref}>
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
              <ProgressBar progress={"78%"} />
              <ProgressBar progress={"95%"} />
              <ProgressBar progress={"75%"} />
              <ProgressBar progress={"80%"} />
              <ProgressBar progress={"50%"} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
