import Image from "next/image";
import React from "react";

export interface CategoryType {
  image: string;
  title: string;
  buttonTitle: string;
}
const CategoryCard = ({ image, title, buttonTitle }: CategoryType) => {
  return (
    <div className="w-full max-w-44 sm:w-44 flex flex-col justify-center items-center px-6 py-4  rounded-md flex-wrap border hover:border-slate-300 shadow-sm hover:shadow-slate-500/50">
      <div className="relative flex flex-col  justify-center items-center aspect-square">
        {image ? (
          <Image
            src={image}
            alt="image"
            className="rounded-md aspect-square object-cover"
          />
        ) : (
          <Image
            src={require("../../public/image-icon-front-side-white-background.jpg")}
            className=""
            alt="image"
          />
        )}
        <a className=" w-full bottom-0 absolute rounded  text-center bg-red-500 line-clamp-1">
          {buttonTitle}
        </a>
      </div>
      <div className="mt-4 text-center line-clamp-2 h-11">{title}</div>
    </div>
  );
};

export default CategoryCard;
