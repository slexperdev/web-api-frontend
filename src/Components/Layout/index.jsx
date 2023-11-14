import React, { useState } from "react";

import { DetailNavBar, Navbar } from "../Navbar";
import { Cart } from "../Cart";

export const Layout = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className="sm:overflow-hidden">
      <DetailNavBar />
      <Navbar setOpenCart={setOpenCart} />
      <div className="lg:p-10 sm:p-5">{children}</div>
      <Cart open={openCart} onClose={() => setOpenCart(false)} />
    </div>
  );
};
