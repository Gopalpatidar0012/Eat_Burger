import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // <div className="flex p-4 md:p-10 lg:p-20 xl:p-40 justify-between items-center text-red-500 uppercase">
    //   <Link href={"/"} className="text-xl font-bold">
    //     👩‍🍳Eat👩‍🍳
    //   </Link>
    //   <p className="">@ All Right Reserved</p>
    // </div>
    <div className="flex p-4  flex-col md:flex-row flex-wrap md:p-10 lg:p-20 xl:p-40 items-start justify-start text-red-500 uppercase bg-gray-700 gap-6">
      <div className="flex flex-col item-start flex-grow gap-6">
        <div>address</div>
        <div className="flex flex-col item-start flex-1 gap-6">
          <span>india</span>
          <p>
            Code-Bin, Plot No. 4, S.No. 131/1A/1, Mahavir Park, opp.Orchid
            School, Baner Pune – 411045
          </p>
          <span>Canada</span>
          <p>826 Brimorton DriveScarborough ON M1G 2S9 Toronto</p>
          <p>+ 1 647-773-8546</p>
        </div>
      </div>
      <div className="text-green-300 gap-6 flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <span>icon</span>
            <p>contact us</p>
          </div>
          <p>info@code-b.in</p>
        </div>
        <div className="gap-4 flex flex-col">
          <span>Follow for interesting updates</span>
          <div className="gap-6 flex">
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
