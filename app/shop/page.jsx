"use client";
import React, { useEffect } from "react";

const page = () => {
  const fetchProduct = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return <div>page</div>;
};

export default page;
