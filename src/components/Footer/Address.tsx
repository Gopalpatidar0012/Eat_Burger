// ==============================================
// Filename: Address.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================

import React from "react";
import { AddressType } from "../../interface/types/index";
import Icon from "../Icon/Icon";

const Address = ({ cityAddresses, title, addressIcon }: AddressType) => {
  return (
    <div className="item-start flex flex-grow flex-col gap-6 md:w-1/2">
      <div className="flex items-center gap-4 text-center">
        <span className="w-5">
          <Icon icon={addressIcon} additionalClasses="text-white" />
        </span>
        <p className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
          {title}
        </p>
      </div>
      <div className="item-start flex flex-col  gap-6">
        {cityAddresses.map((item) => (
          <div key={item.id} className="item-start flex flex-col  gap-4">
            <span className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
              {item.city}
            </span>
            <p className="font-open-sans break-keep text-base font-normal leading-[26.48px] text-gray-500">
              {item.address}
            </p>
            {item.phoneNo ? (
              <p className="font-open-sans text-base font-normal leading-[26.48px] text-gray-500">
                {item.phoneNo}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
