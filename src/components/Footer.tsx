import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex p-2 lg:p-20 xl:p-40 justify-between items-center text-red-500 uppercase">
      <Link href={"/"} className="text-xl font-bold">
        👩‍🍳Eat👩‍🍳
      </Link>
      <p>@ All Right Reserved</p>
    </div>
  );
};

export default Footer;
