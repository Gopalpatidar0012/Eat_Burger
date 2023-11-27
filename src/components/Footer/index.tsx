// ==============================================
// Filename: Footer.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================
import React from "react";
import Address from "./Address";
import ContactUs from "./ContactUs";
import SocialLinks from "./SocialLinks";
import { FooterType } from "../../interface/types/index";
import Typography, { TypographyVariant } from "../typography/Typography";

const Footer = ({
  cityAddresses,
  emailId,
  socialMediaLinks,
  copyrightText,
}: FooterType) => {
  return (
    <>
      <div className="flex  items-center justify-center bg-black px-4  py-12 sm:px-24">
        <div className="flex w-full  flex-col flex-wrap items-start justify-start gap-6  md:flex-row">
          <Address
            title="Address"
            cityAddresses={cityAddresses}
            addressIcon="map"
          />
          <div className="flex flex-col items-start  gap-6">
            <ContactUs
              emailId={emailId}
              title="contact us"
              contactIcon="email"
            />
            <SocialLinks
              socialMediaLinks={socialMediaLinks}
              title="Follow for interesting updates"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-darkBackground p-4 text-center md:px-24 md:py-4">
        <Typography variant={TypographyVariant.P} className="text-black">
          {copyrightText}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
