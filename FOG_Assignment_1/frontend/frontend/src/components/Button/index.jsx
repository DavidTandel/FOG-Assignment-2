import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[4px]",
};

const variants = {
  outline: "border-white-A700_33 border border-solid text-white-e", // Corrected class name
};

const sizes = {
  s: "[56px] px-[34px] text-[18px]", // Added missing closing bracket and corrected size name
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "s", // Corrected size default
  color = "white_A700_33", // Corrected color name, assuming this is intended
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-white-e tracking-[1.08px] uppercase text-[10px] font-semibold border-white-A700_33 border border-solid leading-[15px] ${shape && shapes[shape]} S{size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["s"]), // Corrected size prop type
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["white_A700_33"]), // Corrected color prop type
};

export { Button };