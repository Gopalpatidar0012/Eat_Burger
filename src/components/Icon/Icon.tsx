// ==============================================
// Filename: Icon.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { IconType, SocialMediaIcons } from "@/interface/types";

const Icon = ({
  icon,
  color = "white",
  additionalClasses,
  size = "lg",
}: IconType) => {
  let iconToDisplay;

  switch (icon) {
    case SocialMediaIcons.INSTAGRAM:
      iconToDisplay = faInstagram;
      break;
    case SocialMediaIcons.FACEBOOK:
      iconToDisplay = faFacebook;
      break;
    case SocialMediaIcons.MAP:
      iconToDisplay = faMap;
      break;
    case SocialMediaIcons.EMAIL:
      iconToDisplay = faEnvelope;
      break;
    case SocialMediaIcons.TWITTER:
      iconToDisplay = faTwitter;
      break;
    case SocialMediaIcons.LINKEDIN:
      iconToDisplay = faLinkedinIn;
      break;
    case SocialMediaIcons.SHOPIFY:
      iconToDisplay = faShopify;
      break;
    default:
      iconToDisplay = faEnvelope;
      break;
  }
  return (
    <FontAwesomeIcon
      icon={iconToDisplay}
      className={additionalClasses}
      color={color}
      data-testid="social-icon"
      size={size}
    />
  );
};

export default Icon;
