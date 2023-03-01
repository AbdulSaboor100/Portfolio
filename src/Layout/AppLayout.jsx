import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import NavSm from "../Components/NavSm/NavSm";

const AppLayout = ({ children, data }) => {
  return (
    <Fragment>
      <Navbar data={data?.navbar} />
      <NavSm />
      {children}
      {/* <p>Footer</p> */}
    </Fragment>
  );
};

export default AppLayout;
