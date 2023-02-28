import React, { Fragment } from "react";
import Footer from "../Components/Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <p>Navbar</p>
      {children}
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
