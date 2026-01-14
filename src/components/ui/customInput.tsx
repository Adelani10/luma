"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "highlight";
}

const CustomInput: React.FC<InputProps> = ({
  variant = "default",
  ...props
}) => {
  const borderStyles =
    variant === "highlight"
      ? "border-2 border-[#A855F7] focus:ring-[#A855F7]/20"
      : "border border-[#DDDDDD] focus:border-primary focus:ring-primary/10";

  return (
    <input
      className={`
        w-full px-4 py-3 rounded-2xl text-text-main placeholder:text-[#BBBBBB]
        outline-none transition-all
        ${borderStyles}
      `}
      {...props}
    />
  );
};

export default CustomInput;
