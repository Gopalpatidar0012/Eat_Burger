"use client";
import Image from "next/image";
import React from "react";
import CountDown from "../CountDown";
import Gallery from "../gallery/Gallery";

const Offer = () => {
  return (
    <div className="h-screen bg-black flex-col flex text-white md:flex-row">
      <div className="flex-1 flex justify-center items-center flex-col text-center gap-4 p-2">
        <h1 className="text-2xl  md:text-3xl lg:text-5xl font-bold uppercase ">
          Delicious burger & french fry
        </h1>
        <p className="xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          veniam? Dolores accusantium mollitia fugit iste repellendus illo ullam
          dolorum, necessitatibus vitae pariatur. Et cumque labore eligendi qui
          ab eum vel?
        </p>
        <div className="flex">
          <CountDown />
        </div>
        <div className="bg-red-500  p-2 text-white rounded uppercase cursor-pointer">
          order now
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <Image
          src={require("../../../public/food_images/offerProduct.png")}
          alt="offer"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
