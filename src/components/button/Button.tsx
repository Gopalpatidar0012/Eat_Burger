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

// try like this

{
  /* <Button variant="outline" size="small">
        Outline Small
      </Button>
      <Button variant="outline" size="medium">
        Outline Medium
      </Button>
      <Button variant="outline" size="large">
        Outline Large
      </Button>

      {/* Filled Buttons */
}
// <Button variant="filled" size="small">
//   Filled Small
// </Button>
// <Button variant="filled" size="medium">
//   Filled Medium
// </Button>
// <Button variant="filled" size="large">
//   Filled Large
// </Button>

{
  /* Text Buttons */
}
// <Button variant="text" size="small">
//   Text Small
// </Button>
// <Button variant="text" size="medium">
//   Text Medium
// </Button>
// <Button variant="text" size="large">
//   Text Large
// </Button>

{
  /* Buttons with Icon (icon on the left) */
}
// <Button
//   variant="filled"
//   size="medium"
//   icon={<FontAwesomeIcon icon={faAdd} />}
//   iconPosition="left"
// >
//   Icon Left
// </Button>
// <Button
//   variant="filled"
//   size="medium"
//   icon={<FontAwesomeIcon icon={faAdd} />}
//   iconPosition="left"
// >
//   Icon Left
// </Button>

{
  /* Buttons with Icon (icon on the right) */
}
// <Button
//   variant="filled"
//   size="medium"
//   icon={<FontAwesomeIcon icon={faAdd} />}
//   iconPosition="right"
// >
//   Icon Right
// </Button>
// <Button
//   variant="filled"
//   size="medium"
//   icon={<FontAwesomeIcon icon={faAdd} />}
//   iconPosition="right"
// >
//   Icon Right
// </Button> */}
