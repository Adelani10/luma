"use client";
import { CourseRowProps, UserRowProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { MoreOptions } from "./moreOptions";
import { MdEdit } from "react-icons/md";

const options = [
  { label: "Hide", action: () => {} },
  { label: "Delete", action: () => {} },
];

const CourseRow: React.FC<CourseRowProps> = ({ name, section, avatarUrl }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (requestId: string) => {
    if (activeDropdown === requestId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(requestId);
    }
  };

  return (
    <div
      className={`
      flex items-center justify-between p-4 rounded-2xl transition-all group hover:bg-[#E5F6FF]
    `}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-100">
          <Image src={avatarUrl} alt={name} fill className="object-cover " />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-sm text-text-black">{name}</span>
          <span className="text-xs text-[#454545] ">{section}</span>
        </div>
      </div>

      <div
        className={`hover:flex items-center relative gap-4 hidden group-hover:flex `}
      >
        <button className="p-2 cursor-pointer text-gray-600 hover:text-primary transition-colors">
          <MdEdit size={20} color="#50160C" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-2" />
        <MoreOptions
          isOpen={activeDropdown === name}
          onToggle={() => toggleDropdown(name)}
          options={options}
        />
      </div>
    </div>
  );
};

export default CourseRow;
