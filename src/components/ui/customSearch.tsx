"use client";

import React from "react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  placeholder?: string;
}

export default function CustomSearch({
  containerClassName = "",
  placeholder = "Search",
  ...props
}: SearchInputProps) {
  return (
    <div
      className={`relative flex items-center w-full max-w-2xl ${containerClassName}`}
    >
      <div className="absolute left-6 pointer-events-none">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-[#F1F1F1]"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full py-5 pl-12 pr-8 text-lg  bg-white 
          border border-[#F1F1F1] rounded-full placeholder:text-[#7D7D7D] placeholder:text-sm text-text-main outline-none h-12 transition-all focus:border-primary
        "
        {...props}
      />
    </div>
  );
}
