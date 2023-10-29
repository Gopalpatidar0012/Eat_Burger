// ==============================================
// Filename: SocialLinks.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================
import Link from "next/link";
import React from "react";
import { SocialLinkType } from "@/interface/types";
import Icon from "../Icon/Icon";

const SocialLinks = ({ socialMediaLinks, title }: SocialLinkType) => {
  return (
    <div className="flex flex-col items-start gap-4 ">
      <span className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
        {title}
      </span>
      <div className="flex items-center justify-end gap-6">
        {socialMediaLinks.map((item) => (
          <Link href={item.url} key={item.id} className="w-6">
            <Icon
              icon={item.icon}
              style={{ fontSize: "24px" }}
              additionalClasses="text-lightGray"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
