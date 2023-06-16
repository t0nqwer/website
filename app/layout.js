"use client";
import SideBar from "@components/SideBar";
import "./globals.css";
import { Tenor_Sans } from "next/font/google";
import NavBar from "@components/NavBar";
import { usePathname } from "next/navigation";
import Menu from "@components/Menu";
import useMenuactive from "@Zustand/activeMenu";
import localFont from "@next/font/local";
const ThaiSansNeue = localFont({
  src: "../public/OpenType/ThaiSansNeue-Regular.otf",
  variable: "--ThaiSansNeue",
});
const Tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font_Tenor",
});

export const metadata = {
  title: "Khwanta",
  description: "Thai Wisdom to International Fashion",
};

export default function RootLayout({ children }) {
  const IsActive = useMenuactive((state) => state.IsActive);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en" className={`${ThaiSansNeue.variable} ${Tenor.variable}`}>
      <body className=" bg-primary-600">
        {!pathname.includes("/kt-admin") && <NavBar />}
        {IsActive && <Menu />}
        <div>{children}</div>
      </body>
    </html>
  );
}
