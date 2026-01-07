"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ROLES = [
  {
    key: "teacher",
    label: "Teacher",
  },
  {
    key: "parent",
    label: "Parent",
  },
  {
    key: "student",
    label: "Student",
  },
];

const background = (selected: boolean, role: string) => {
  if (selected) {
    if (role.toLowerCase() === "teacher" || role.toLowerCase() === "student") {
      return "bg-[url(/images/blobs/selected-right.png)]";
    } else if (role.toLowerCase() === "parent") {
      return "bg-[url(/images/blobs/selected-left.png)]";
    }
  } else {
    if (role.toLowerCase() === "teacher" || role.toLowerCase() === "student") {
      return "bg-[url(/images/blobs/normal-right.png)]";
    } else if (role.toLowerCase() === "parent") {
      return "bg-[url(/images/blobs/normal-left.png)]";
    }
  }
};

const RoleSelector: React.FC = () => {
  const [active, setActive] = useState("teacher");

  return (
    <div className="flex gap-10 p-2">
      {ROLES.map((role) => {
        const isActive = active === role.key;

        return (
          <div
            key={role.key}
            onClick={() => setActive(role.key)}
            className={`transition-transform duration-200 hover:scale-[1.02] bg-no-repeat bg-cover bg-center w-30 h-28 flex items-center justify-center cursor-pointer ${background(
              isActive,
              role.label
            )}`}
          >
            <div
              className={`flex h-full flex-col items-center justify-center gap-0.5`}
            >
              <Image
                src={
                  role.key === "teacher"
                    ? "/images/icons/teacher.png"
                    : role.key === "parent"
                    ? "/images/icons/parent.png"
                    : "/images/icons/student.png"
                }
                alt="Role icon"
                width={40}
                height={20}
                priority
              />

              <p className="text-[15px] font-medium text-[#2C2A50]">
                {role.label}
              </p>

              <FaArrowRight
                className={`text-md ${
                  isActive
                    ? "text-[#F7B100]"
                    : "text-[#DBDBDB] group-hover:text-[#F7B100]"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoleSelector;
