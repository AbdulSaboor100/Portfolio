import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import NavSm from "../Components/NavSm/NavSm";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <NavSm />
      {children}
      {/* <p>Footer</p> */}
    </Fragment>
  );
};

export default AppLayout;
