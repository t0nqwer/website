import SideBar from "@components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khwanta",
  description: "Thai Wisdom to International Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brandred">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
