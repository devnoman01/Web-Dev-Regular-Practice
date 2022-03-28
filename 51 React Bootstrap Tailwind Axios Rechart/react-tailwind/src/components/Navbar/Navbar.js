import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "CouponsHome", link: "/coupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-300">
      <div onClick={() => setOpen(!open)} className="w-10 h-10 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`justify-center md:flex absolute md:static bg-indigo-300 w-full duration-500 ease-in ${
          open ? "top-10" : "top-[-200px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
