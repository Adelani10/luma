"use client";

import { ActionButtonProps } from "@/types";
import React, { useRef, useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

export const MoreOptions: React.FC<ActionButtonProps> = ({
  isOpen,
  onToggle,
  options,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });

  useEffect(() => {
    interface MouseEvent {
      target: EventTarget | null;
    }

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 48; // Approximate height based on content

      let top;
      if (rect.bottom + dropdownHeight > window.innerHeight) {
        top = rect.top - dropdownHeight;
      } else {
        top = rect.bottom;
      }

      const right = window.innerWidth - rect.right;

      setDropdownPosition({ top, right });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="text-[#98A2B3] hover:text-gray-800 p-2"
        onClick={onToggle}
        aria-label="More options"
      >
        <FaEllipsisV color="#50160C" />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 bg-white rounded-lg flex flex-col items-start shadow-md min-w-24"
          style={{
            top: dropdownPosition.top + "px",
            right: dropdownPosition.right + "px",
          }}
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="text-sm text-text-black w-full text-left hover:bg-[#DDF1FF] transition-colors p-2 px-3 "
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
