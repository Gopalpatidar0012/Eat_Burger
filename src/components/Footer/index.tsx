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
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { FooterType } from "../../interface/types/index";

const Footer = ({ cityAddresses, emailId, socialMediaLinks }: FooterType) => {
  return (
    <div className="flex  items-center justify-center bg-black px-4  py-12 sm:px-24">
      <div className="flex w-full  flex-col flex-wrap items-start justify-start gap-6  md:flex-row">
        <Address
          title="Address"
          cityAddresses={cityAddresses}
          addressIcon={faMap}
        />
        <div className="flex flex-col items-start  gap-6">
          <ContactUs
            emailId={emailId}
            title="contact us"
            contactIcon={faEnvelope}
          />
          <SocialLinks
            socialMediaLinks={socialMediaLinks}
            title="Follow for interesting updates"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
