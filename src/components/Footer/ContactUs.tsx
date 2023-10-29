// ==============================================
// Filename: ContactUs.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================
import React from "react";
import { ContactType } from "@/interface/types";
import Icon from "../Icon/Icon";

const ContactUs = ({ emailId, title, contactIcon }: ContactType) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center gap-4 text-center">
        <span className="w-5">
          <Icon icon={contactIcon} additionalClasses="text-white" />
        </span>

        <p className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
          {title}
        </p>
      </div>
      <p className="font-open-sans text-base font-normal leading-[26.48px] text-gray-500">
        {emailId}
      </p>
    </div>
  );
};

export default ContactUs;
