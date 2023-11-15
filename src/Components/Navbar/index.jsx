import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import {
  Navbar as Nav,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { Constant } from "../../Constant";
import { Cart } from "../Cart";

function NavList({ setOpenCart }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {Constant.NAV_LINKS.map((item, idx) => (
        <NavLink key={idx} link={item} />
      ))}
      <a
        className="relative cursor-pointer lg:visible sm:invisible"
        onClick={() => setOpenCart(true)}
      >
        <div className="absolute right-[-2px] top-[-2px] h-2 w-2 bg-red-400 rounded-[50%]" />

        <ShoppingBagIcon className="h-6 w-6" />
      </a>
      <Avatar
        variant="circular"
        size="sm"
        alt="tania andrew"
        className="border border-gray-900 p-0.5"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
    </ul>
  );
}

export const Navbar = ({ setOpenCart }) => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Nav className="mx-auto max-w-screen-xl px-6 py-3 shadow-none rounded-none border-b-2 border-b-light-blue-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 font-DancingScript"
        >
          Vacation4You
        </Typography>

        <div className="hidden lg:block">
          <NavList setOpenCart={setOpenCart} />
        </div>
        <a
          className="lg:hidden relative cursor-pointer"
          onClick={() => setOpenCart(true)}
        >
          <div className="absolute right-[-2px] top-[-2px] h-2 w-2 bg-red-400 rounded-[50%]"></div>
          <ShoppingBagIcon className="h-6 w-6" />
        </a>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
      <Cart />
    </Nav>
  );
};

export const DetailNavBar = () => {
  return (
    <div className="bg-gray-100 h-6 px-6 flex flex-row gap-4">
      <div className="flex flex-row items-center gap-2 text-xs text-gray-500">
        <EnvelopeIcon className="h-3 w-3" />
        <a href="">support@vacation4you.com</a>
      </div>
      <div className="flex flex-row items-center gap-2 text-xs text-gray-500">
        <PhoneIcon className="h-3 w-3" />
        <a href="">+940711082762</a>
      </div>
    </div>
  );
};

export const NavLink = ({ link }) => {
  const { pathname } = useLocation();
  const linkClass =
    "flex items-center text-sm hover:text-light-blue-400 transition-colors";

  return (
    <Link
      to={link.to}
      className={classNames(
        pathname === link.to ? "text-light-blue-400" : "text-black",
        linkClass
      )}
    >
      {link.name}
    </Link>
  );
};
