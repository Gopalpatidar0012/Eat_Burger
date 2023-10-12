import { FeaturedCardType } from "@/interface";
import Image from "next/image";
import React from "react";

const FeaturedCard = ({
  image,
  description,
  price,
  title,
}: FeaturedCardType) => {
  return (
    <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 bg-fuchsia-50 md:w-[50vw] xl:w-[33vw] xl:h-[80vh]">
      {/* image container */}
      <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-500">
        <Image src={image} alt="single image" fill className="object-contain" />
      </div>
      {/* text */}
      <div className="flex flex-1 flex-col gap-4 text-center items-center uppercase justify-center">
        <h1 className="font-bold  text-xl  xl:text-2xl 2xl:text-3xl">
          {title}
        </h1>
        <p className="lowercase text-center 2xl:p-8">{description}</p>
        <p className="font-bold">$ {price}</p>
        <div className="bg-red-500 p-2 rounded text-white ">add to cart</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
