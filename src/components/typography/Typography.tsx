import React, { ReactNode } from "react";

export enum TypographyVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  LABEL = "label",
  TITLE = "title",
}

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: TypographyVariant;
  children?: ReactNode;
  color?: string;
}
const Typography = ({
  variant,
  children,
  color,
  className,
}: TypographyProps) => {
  const variantStyles = {
    [TypographyVariant.H1]:
      "text-[60px] line-height-[73.14px]  font-montserrat font-bold",
    [TypographyVariant.H2]:
      "text-[48px] line-height-[58.51px] font-light  font-montserrat",
    [TypographyVariant.H3]:
      "text-[32px] line-height-[30.88px] font-bold font-montserrat",
    [TypographyVariant.H5]:
      "text-[18px] line-height-[21.98px] font-bold font-montserrat",
    [TypographyVariant.H6]:
      "text-[16px] line-height-[24px] font-bold font-montserrat",
    [TypographyVariant.TITLE]:
      "text-[20px] line-height-[24.38] font-medium font-montserrat",
    [TypographyVariant.H4]:
      "text-[24px] line-height-[24px] font-medium font-poppins",
    [TypographyVariant.LABEL]:
      "text-[14px] line-height-[21px] font-semibold font-poppins",
    [TypographyVariant.P]:
      "text-[16px] line-height-[26.48px] font-regular font-openSans",
  };

  const CustomTag = `${variant}` as keyof JSX.IntrinsicElements;

  switch (variant) {
    case "title":
      return (
        <label
          className={`${variantStyles[variant]}  ${className}`}
          style={{ color: color }}
        >
          {children}
        </label>
      );
    default:
      return (
        <CustomTag
          className={`${variantStyles[variant]} ${className}`}
          style={{ color: color }}
        >
          {children}
        </CustomTag>
      );
  }
};

export default Typography;
