import React from "react";
import { Navigation } from "../Navigation";
export const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <hr style={{ marginBottom: 0 }} />
      <main>{props.children}</main>
    </React.Fragment>
  );
};
