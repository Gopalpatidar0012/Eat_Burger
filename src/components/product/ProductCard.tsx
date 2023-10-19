"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface ProductCardType {
  image: string;
  description: string;
  quantityTitle: string;
  price: number;
  offerPercentage: number;
}
const ProductCard = ({
  image,
  description,
  quantityTitle,
  price,
  offerPercentage,
}: ProductCardType) => {
  const [totalPrice, setTotalPrice] = useState<string>();
  const [discountPrice, setDiscountPrice] = useState<string>();
  const calculateTotalDiscount = (percentage: number) => {
    return Math.abs((1 - percentage / 100 - 1) * 100);
  };

  const calculateFinalPrice = (
    initialPrice: number,
    discountPercentage: number
  ) => {
    return initialPrice - (initialPrice * discountPercentage) / 100;
  };

  useEffect(() => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
    const discount = calculateTotalDiscount(offerPercentage);
    const finalPrice = calculateFinalPrice(price, discount);
    const formattedValue = formatter.format(finalPrice);
    setDiscountPrice(formattedValue);
    setTotalPrice(formatter.format(price));
  }, [offerPercentage, price]);

  return (
    <>
      <div className="shadow-sm shadow-slate-400 rounded-sm text-black bg-white w-full py-4 px-8">
        <Link href={"/"}>
          <div className="flex flex-col justify-center items-center aspect-square">
            {image ? (
              <Image src={image} className="" alt="image" />
            ) : (
              <div className="placeholder-image">
                <Image
                  src={require("../../public/image-icon-front-side-white-background.jpg")}
                  className=""
                  alt="image"
                />
              </div>
            )}
          </div>
          <div className="pt-4">
            <div className="flex flex-wrap">
              <p className="text-sm line-clamp-1">{description}</p>
              <p className="font-light text-xs line-clamp-1">{quantityTitle}</p>
            </div>
            <div className="flex justify-between flex-wrap">
              <div>
                <div className="flex gap-1 font-light text-xs">
                  {offerPercentage !== 0 ? (
                    <>
                      <span>MRP</span>
                      <span className="line-through">{totalPrice}</span>
                      <span className="text-[#2aa939] font-medium">
                        {offerPercentage}% off
                      </span>
                    </>
                  ) : null}
                </div>
                <div>
                  <span className="text-xl">{discountPrice}</span>
                </div>
              </div>
              <div className="flex justify-end items-end text-sm ">
                <button className="text-red-600">ADD</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
