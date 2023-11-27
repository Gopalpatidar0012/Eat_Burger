import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";

export enum ButtonVariant {
  OUTLINE = "outline",
  LINK = "link",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DISABLED = "disabled",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export enum IconPoistion {
  RIGHT = "right",
  LEFT = "left",
}
export interface ButtonType {
  variant: ButtonVariant;
  onClick: () => void;
  title: string;
  iconPosition?: "left" | "right";
  size?: ButtonSize;
  backgroundColor?: string;
  color?: string;
  icon?: IconDefinition;
  disabled?: boolean;
}
export interface ClientLogoType {
  id: string | number;
  title: string;
  url: string;
}
export interface InsightCardType {
  date?: string;
  title: string;
  description: string;
  image: string;
}

export interface InsightGridDataType {
  id: string;
  date?: string;
  title: string;
  image: string;
  description: string;
}

export interface ContactType {
  emailId: string;
  title: string;
  contactIcon: string;
}

export interface SocialMediaLinkType {
  id: string;
  url: string;
  name: string;
}
export interface FooterType {
  cityAddresses: CityAddressType[];
  emailId: string;
  socialMediaLinks: SocialMediaLinkType[];
  copyrightText: string;
}
export interface CityAddressType {
  id: string;
  city: string;
  address: string;
  phoneNo: string;
}
export interface SocialLinkType {
  title: string;
  socialMediaLinks: SocialMediaLinkType[];
}

export interface IconType {
  icon: string;
  color?: string;
  additionalClasses?: string;
  size?: SizeProp;
}

export enum SocialMediaIcons {
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  MAP = "map",
  EMAIL = "email",
  LINKEDIN = "linkedin",
  SHOPIFY = "shopify",
}

export interface AddressType {
  cityAddresses: CityAddressType[];
  title: string;
  addressIcon: string;
}
