import Image from "next/image";
import React from "react";

const ProductCart = () => {
  return (
    <div>
      <div className="m-20 flex border w-fit">
        <div className="w-full max-w-64 sm:w-32">
          <Image
            src={require("../../public/user.png")}
            alt="image"
            className="aspect-square"
          />
        </div>
        <div className="bg-emerald-600 flex flex-col w-1/2 gap-8 ">
          <div className="flex flex-col">
            <span>Dettol Antiseptic Disinfectant Liquid</span>
            <span>Bottle of 550 ml liquid</span>
          </div>
          <span className="">Remove</span>
        </div>
        <div>elmflrk</div>
      </div>
    </div>
  );
};

export default ProductCart;
