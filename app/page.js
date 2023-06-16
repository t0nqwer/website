"use client";
import Hero from "@components/Hero";
import Menu from "@components/Menu";
import Image from "next/image";
import useMenuactive from "@Zustand/activeMenu";
import { useEffect } from "react";

export default function Home() {
  const IsActive = useMenuactive((state) => state.IsActive);
  useEffect(async () => {
    const response = await fetch("/api/test", {
      method: "GET",
    });
    console.log(response);
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
}
