// this is slider component

"use client";
import { sliderData } from "@/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SliderCard from "./SliderCard";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === sliderData.length - 1 ? 0 : prev + 1
        ),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" bg-fuchsia-100 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row uppercase ">
      <SliderCard sliderData={sliderData} currentSlide={currentSlide} />
    </div>
  );
};

export default Slider;
