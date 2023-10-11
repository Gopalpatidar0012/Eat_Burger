import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex justify-between items-center p-4 md:p-6 border-b-2 border-red-400 text-red-500 uppercase lg:px-20 xl:px-40">
      {/* LEFT SIDE LINK */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">contact</Link>
      </div>
      {/* logo */}
      {/* mobile menu */}
      <div className="text-xl">👩‍🍳Eat👩‍🍳</div>
      {/* menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right side link */}
      <div className="hidden md:flex gap-6 justify-center items-center">
        <div className="md:absolute top-4 lg:static flex justify-center items-center gap-2 bg-orange-300 px-1 rounded">
          <Image
            src={require("../../public/food_images/phone.png")}
            alt="phone"
            width={20}
            height={20}
          />
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">login</Link>
        ) : (
          <Link href="/orders">orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
