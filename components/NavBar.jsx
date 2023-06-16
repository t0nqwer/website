"use client";
import { Tenor_Sans } from "next/font/google";
import useMenuactive from "@Zustand/activeMenu";
import useNavBar from "@Zustand/navbarMenu";

const Tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });
const NavBar = () => {
  const setIsactive = useMenuactive((state) => state.setIsactive);
  const menu = useNavBar((state) => state.menu);

  return (
    <div
      className={`${Tenor.className} fixed z-50 px-10 max-lg:px-5 h-24 flex justify-between w-full items-center text-light-500`}
    >
      <div className="w-52  max-md:hidden parent " onClick={setIsactive}>
        <div className="the_header_menu"></div>
      </div>

      <a
        className={` text-4xl tracking-widest drop-shadow-md align-middle h-fit w-full text-center select-none`}
      >
        KHWANTA
      </a>
      <button className="header_catalog_text link max-md:hidden w-52 text-base ">
        <div className=" fourdot__container">
          <div className=" fourdot"></div>
          <div className=" fourdot"></div>
        </div>
        <strong className=" relative  ">Catalog</strong>
      </button>
    </div>
  );
};

export default NavBar;
