import React from "react";
import AppLayout from "../../Layout/AppLayout";
import ServiceCards from "../ServiceCards/ServiceCards";

const Service = () => {
  return (
    <>
      <div className="bg-base_dark w-full  flex justify-center items-center w-full flex-col  ">
        <div className="w-4/5 pt-16 pb-16">
          <h1 className=" text-h3 font-w9 ">Service</h1>
          <div className=" flex justify-between   gap-8  pt-8 pb-8 w-full md:flex-wrap ">
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
