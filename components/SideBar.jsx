"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { links } from "@utils/side-menu";
import Link from "next/link";
const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full bg-light h-screen">
      <div className=" flex flex-col justify-between items-center h-full py-5">
        <div className="mt-3">
          <Image src="/logo-s-black.png" className="" width={176} height={64} />
        </div>
        <div className="w-full px-10 font-normal flex flex-col space-y-4">
          {links.map((link, index) => {
            if (link.pathname === pathname) {
              return (
                <div>
                  <Link
                    key={link.pathname}
                    href={link.pathname}
                    className="nav-active"
                  >
                    {link.title}
                  </Link>
                </div>
              );
            }
            return (
              <div>
                <Link key={link.pathname} href={link.pathname} className="nav">
                  {link.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="px-10 mb-3">
          <div className=" text-xl space-x-4 text-gray-700 flex mb-3">
            <a href="https://www.facebook.com/khwantathai">
              <TiSocialFacebook />
            </a>
            <a href="https://www.instagram.com/khwanta.handicraft/">
              <TiSocialInstagram />
            </a>
          </div>
          <div className=" text-xs text-gray-700">
            <p>© 2022 KHWANTA LIMITED PARTNERSHIP</p>
            All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
