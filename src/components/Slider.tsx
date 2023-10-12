// this is slider component

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: "1",
    title: "hello duniya",
    image: require("../../public/food_images/slide1.png"),
  },
  {
    id: "2",
    title: "Always fresh & Always Crispy & Always hot",
    image: require("../../public/food_images/slide2.png"),
  },
  {
    id: "3",
    title: "life is ready",
    image: require("../../public/food_images/slide3.jpg"),
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" bg-fuchsia-100 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row uppercase ">
      {/* text section */}
      <div className="flex-1 flex items-center flex-col justify-center gap-8 font-bold lg:w-full text-red-500">
        <h1 className="text-5xl text-center ">{data[currentSlide].title}</h1>
        <div className="p-2 bg-red-600 text-white rounded">order now</div>
      </div>
      {/* image section */}
      <div className="flex-1 w-full relative ">
        <Image
          src={data[currentSlide].image}
          alt="slide1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
