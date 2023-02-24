import React, { Fragment } from "react";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </Fragment>
  );
};

export default AppLayout;
