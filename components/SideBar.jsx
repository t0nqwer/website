"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { adminlinks } from "@utils/side-menu";
import Link from "next/link";
import useNavBar from "@Zustand/navbarMenu";
const SideBar = () => {
  const pathname = usePathname();
  const menu = useNavBar((state) => state.menu);

  return (
    <div className="w-60 bg-light-500 h-screen">
      <div className=" flex flex-col justify-between items-center h-full py-5">
        <div className="mt-3">
          <Link href={`kt-admin`}>
            <Image
              src="/logo-s-black.png"
              className=""
              width={176}
              height={64}
            />
          </Link>
        </div>
        <div className="w-full px-10 font-normal flex flex-col justify-center space-y-4 h-full">
          {menu.map((link, index) => {
            if (`/kt-admin${link.pathname}` === pathname) {
              return (
                <div>
                  <Link
                    key={link.pathname}
                    href={`kt-admin${link.pathname}`}
                    className="nav-active"
                  >
                    {link.title}
                  </Link>
                </div>
              );
            }
            return (
              <div>
                <Link
                  key={link.pathname}
                  href={`kt-admin${link.pathname}`}
                  className="nav"
                >
                  {link.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
