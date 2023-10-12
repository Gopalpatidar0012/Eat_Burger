import { sliderData } from "@/data";
import { SliderCardType } from "@/interface";
import Image from "next/image";
import React from "react";

const SliderCard = ({ sliderData, currentSlide }: SliderCardType) => {
  return (
    <>
      {/* text section */}
      <div className="flex-1 flex items-center flex-col justify-center gap-8 font-bold lg:w-full text-red-500">
        <h1 className="text-5xl text-center ">
          {sliderData[currentSlide].title}
        </h1>
        <div className="p-2 bg-red-600 text-white rounded">order now</div>
      </div>
      {/* image section */}
      <div className="flex-1 w-full relative ">
        <Image
          src={sliderData[currentSlide].image}
          alt="slide1"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
};

export default SliderCard;
