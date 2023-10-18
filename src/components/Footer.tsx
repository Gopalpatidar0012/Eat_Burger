import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex p-4 md:p-10 lg:p-20 xl:p-40 justify-between items-center text-red-500 uppercase">
      <Link href={"/"} className="text-xl font-bold">
        👩‍🍳Eat👩‍🍳
      </Link>
      <p className="">@ All Right Reserved</p>
    </div>
  );
};

export default Footer;
