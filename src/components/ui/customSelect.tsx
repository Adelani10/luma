"use client";

import React from "react";
import { FaCaretDown } from "react-icons/fa";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const CustomSelect: React.FC<SelectProps> = ({ children, ...props }) => (
  <div className="relative">
    <select
      className="
        w-full px-4 py-3 rounded-2xl border border-gray-200 text-gray-400
        bg-white outline-none appearance-none transition-all
        focus:border-primary
      "
      {...props}
    >
      {children}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#121212]">
      <FaCaretDown />
    </div>
  </div>
);

export default CustomSelect;
