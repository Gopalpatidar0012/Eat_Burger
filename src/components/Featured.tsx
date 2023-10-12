import Image from "next/image";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-auto text-red-500">
      {/* wrapper */}
      <div className="w-max flex ">
        {/* single item */}

        {featuredProducts.map((item) => (
          <FeaturedCard
            key={item.id}
            image={item.img}
            description={item.description}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
