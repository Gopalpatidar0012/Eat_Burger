import { ButtonType } from "@/interface";
import React, { ReactNode } from "react";

const Button = ({
  variant,
  size,
  children,
  icon,
  customClasses,
  iconPosition = "left",
}: ButtonType) => {
  // Define base button classes
  let buttonClasses = "rounded px-4 py-2";
  let iconClasses = "";

  // Handle different variants
  if (variant === "outline") {
    buttonClasses += " border border-gray-400 text-gray-700 hover:bg-gray-100";
  } else if (variant === "filled") {
    buttonClasses += " bg-blue-500 text-white hover:bg-blue-700";
  } else if (variant === "text") {
    buttonClasses += " text-blue-500";
  }

  // Handle different sizes
  if (size === "small") {
    buttonClasses += " text-sm";
  } else if (size === "large") {
    buttonClasses += " text-lg";
  }

  // Add custom classes if provided
  if (customClasses) {
    buttonClasses += ` ${customClasses}`;
  }

  // Determine the icon position
  if (iconPosition === "right") {
    iconClasses = "ml-2";
  } else {
    iconClasses = "mr-2";
  }

  return (
    <button className={buttonClasses}>
      {iconPosition === "left" && icon && (
        <span className={iconClasses}>{icon}</span>
      )}
      {children}
      {iconPosition === "right" && icon && (
        <span className={iconClasses}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
