"use client";
import { UserRowProps } from "@/types";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import { MoreOptions } from "./moreOptions";

const options = [
  { label: "Disable", action: () => {} },
  { label: "Enable", action: () => {} },
];

const UserRow: React.FC<UserRowProps> = ({
  name,
  subtext,
  avatarUrl,
  isStudent = true,
}) => {
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
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100">
          <Image src={avatarUrl} alt={name} fill className="object-cover " />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-sm text-text-black">{name}</span>
          <span className="text-xs text-[#454545] ">
            {isStudent ? "Parent - " : ""}
            {subtext}
          </span>
        </div>
      </div>

      <div
        className={`hover:flex items-center relative gap-4 hidden group-hover:flex `}
      >
        <button className="p-2 cursor-pointer text-gray-600 hover:text-primary transition-colors">
          <CiMail size={20} color="#50160C" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-2" />
        <MoreOptions
          isOpen={activeDropdown === name}
          onToggle={() => toggleDropdown(name)}
          options={options}
        />
        {/* <button
          onClick={() => toggleDropdown(name)}
          className="p-2 cursor-pointer text-gray-600 hover:text-primary transition-colors"
        >
          {<RiMore2Fill size={20} color="#50160C" />}
        </button> */}
      </div>
    </div>
  );
};

export default UserRow;
