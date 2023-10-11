import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex justify-center items-center gap-2">
      <div className=" relative w-5 h-5">
        <Image src={require("../../public/food_images/cart.png")} alt="" fill />
      </div>
      <span>cart(3)</span>
    </Link>
  );
};

export default CartIcon;
