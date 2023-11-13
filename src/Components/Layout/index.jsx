import React from "react";

import { DetailNavBar, Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <DetailNavBar />
      <Navbar />
      <div className="p-10">{children}</div>
    </div>
  );
};
