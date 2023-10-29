// ==============================================
// Filename: Icon.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: Codebin website - Front End
// ==============================================
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "@/interface/types";
const Icon = ({
  icon,
  color = "white",
  additionalClasses,
  style,
}: IconType) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={additionalClasses}
      color={color}
      data-testid="social-icon"
      style={style}
    />
  );
};

export default Icon;
