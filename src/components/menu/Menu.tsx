"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Links = [
  { id: "1", title: "homepage", url: "/" },
  { id: "2", title: "menu", url: "/" },
  { id: "3", title: "working hours", url: "/" },
  { id: "4", title: "contact", url: "/" },
];
const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <>
      <div className="cursor-pointer">
        {!open ? (
          <Image
            src={require("../../../public/food_images/open.png")}
            width={20}
            height={20}
            alt="menu"
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src={require("../../../public/food_images/close.png")}
            width={20}
            height={20}
            alt="menu"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div className="absolute left-0 top-[102px] h-screen bg-red-500 text-white flex justify-center items-center flex-col text-2xl w-full z-40 gap-4">
          {Links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
