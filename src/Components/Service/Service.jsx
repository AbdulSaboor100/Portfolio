import React from "react";
import AppLayout from "../../Layout/AppLayout";
import ServiceCards from "../ServiceCards/ServiceCards";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <>
      <div className="bg-base_dark w-full  flex justify-center items-center  flex-col ">
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
              <h1 className=" text-h3 font-w9 ">Service</h1>
            </motion.div>
          </div>

          <div className=" flex justify-between gap-8  pt-8 pb-8 w-full md:flex-wrap " ref={ref}>
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
              <div className="flex  justify-between gap-8   ">
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />

              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
