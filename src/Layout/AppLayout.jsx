import React, { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NavSm from "../Components/NavSm/NavSm";

const AppLayout = ({ children, data }) => {
  return (
    <Fragment>
      <Navbar data={data?.navbar} />
      <NavSm />
      {children}
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
