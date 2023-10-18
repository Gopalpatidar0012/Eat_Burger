import React from "react";

export interface ButtonType {
  backgroundColor?: string;
  size: "sm" | "md" | "lg";
  label: string;
  textColor?: string;
  onClick?: () => void;
}
const Button = ({
  backgroundColor,
  size = "sm",
  label = "button",
  textColor,
  ...props
}: NewButtonType) => {
  return (
    <button
      type="button"
      {...props}
      className={`text-${size} px-4 py-2 rounded-full text-white `}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <span className="">{label}</span>
    </button>
  );
};

export default Button;
