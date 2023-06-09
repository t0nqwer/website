import React from "react";
import { Tenor_Sans } from "next/font/google";

const Tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });
const NavBar = () => {
  return (
    <div
      className={`${Tenor.className} fixed z-50 px-10 h-24 flex justify-between w-full items-center text-light`}
    >
      <div className="flex w-full items-center">
        <div>menu</div>
      </div>

      <a
        className={` text-3xl tracking-widest drop-shadow-md align-middle h-fit`}
      >
        KHWANTA
      </a>
      <div className="flex w-full justify-end  tracking-[0.6em] cursor-pointer">
        <div>Catalog</div>
      </div>
    </div>
  );
};

export default NavBar;
