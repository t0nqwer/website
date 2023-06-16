"use client";
import useNavBar from "@Zustand/navbarMenu";
import { adminlinks } from "@utils/side-menu";
import { useEffect } from "react";

const page = () => {
  const setMenu = useNavBar((state) => state.setMenu);

  useEffect(() => {
    setMenu(adminlinks);
  }, []);
  return (
    <div className="w-full h-full">
      <iframe src="http://localhost:3000/" className=""></iframe>
    </div>
  );
};

export default page;
