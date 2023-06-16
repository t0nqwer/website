"use client";

import { useState, useEffect } from "react";

const page = () => {
  const [about, setAbout] = useState({});
  const fetchData = async () => {
    const response = await fetch("/api/contact");
    const data = await response.json();
    console.log(data);
    setAbout(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" ">
      <h1 className=" font-primary text-8xl text-light-400 w-full text-center tracking-widest border-b-[1px] pb-5">
        ช่องทางการติดต่อ
      </h1>
      <div className="border-b-[1px] pt-5 pb-6 w-full">
        <h1 className=" text-3xl font-secondary  text-light-400 tracking-widest">
          Address
        </h1>
        <input className="w-full bg-primary-400 p-5 rounded-md" />
      </div>
    </div>
  );
};

export default page;
