import React from "react";

const sizes = {
  textxs: "text-[16px] font-medium lg:text-[13px]",
  headingxs: "text-[18px] font-semibold lg:text-[15px]",
  headings: "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headingmd: "text-[36px] font-semibold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headinglg: "text-[46px] font-semibold lg:text-[39px] md:text-[42px] sm:text-[36px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-0 font-rajdhani ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };