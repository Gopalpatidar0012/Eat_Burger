import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties } from 'react';

export enum ButtonVariant {
  OUTLINE = 'outline',
  LINK = 'link',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export enum IconPoistion {
  RIGHT = 'right',
  LEFT = 'left',
}
export interface ButtonType {
  variant: ButtonVariant;
  onClick: () => void;
  title: string;
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
  backgroundColor?: string;
  color?: string;
  icon?: IconDefinition;
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
  contactIcon: IconDefinition;
}

export interface SocialMediaLinkType {
  id: string;
  url: string;
  color: string;
  icon: IconDefinition;
}

export interface FooterType {
  cityAddresses: CityAddressType[];
  emailId: string;
  socialMediaLinks: SocialMediaLinkType[];
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
  icon: IconDefinition;
  color?: string;
  additionalClasses?: string;
  style?: CSSProperties;
}

export interface AddressType {
  cityAddresses: CityAddressType[];
  title: string;
  addressIcon: IconDefinition;
}
