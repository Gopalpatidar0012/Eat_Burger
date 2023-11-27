import React, { ReactNode, CSSProperties } from "react";

interface InputProps {
  type: "text" | "password" | "email" | "number" | "any-other-valid-input-type";
  size: "small" | "medium" | "large";
  icon?: ReactNode;
  customClasses?: string;
  customStyles?: CSSProperties;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconPosition?: "left" | "right";
}

const InputComp = ({
  type,
  size,
  icon,
  customClasses,
  customStyles,
  placeholder,
  value,
  onChange,
  iconPosition = "left",
  ...rest
}: InputProps) => {
  // Base input classes
  let inputClasses = "rounded px-8 py-2 relative w-full";

  // Handle different sizes
  if (size === "small") {
    inputClasses += " text-sm";
  } else if (size === "large") {
    inputClasses += " text-lg";
  }

  // Add custom classes if provided
  if (customClasses) {
    inputClasses += ` ${customClasses}`;
  }

  // Define icon styles
  const iconStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [iconPosition]: "8px", // Adjust this value to change the icon's horizontal position
  };
  const iconStylesRight: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [iconPosition]: "8px", // Adjust this value to change the icon's horizontal position
  };

  return (
    <div>
      {iconPosition === "left" && icon && <div style={iconStyles}>{icon}</div>}
      <input
        type={type}
        className={inputClasses}
        style={customStyles}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {iconPosition === "right" && icon && <div style={iconStyles}>{icon}</div>}
    </div>
  );
};

export default InputComp;
