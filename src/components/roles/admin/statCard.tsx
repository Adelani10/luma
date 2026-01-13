"use client";

import { StatCardProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  href,
  linkText,
  useAlt = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href) ?? false;

  // const isStudentPage = pathname?.startsWith("/admin-dashboard/students");
  return (
    <div
      className={`${
        isActive ? "bg-[#DDF1FF] " : "bg-white"
      } p-6 rounded-2xl h-65.5 flex flex-col gap-4`}
    >
      <h3 className="text-[20px] font-semibold text-text-black">{title}</h3>
      {useAlt ? (
        <div className="space-y-1 ">
          <p className="text-sm  text-text-black ">TODAY: 92% Attendance</p>
          <div className="space-y-1">
            <p className="text-[21.65px] font-medium text-text-black ">
              Present: <span className="text-[#00D43C]">460</span>
            </p>
            <p className="text-[21.65px] font-medium text-text-black ">
              Absent: <span className="text-[#F60000]">40</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="text-[48px] font-medium text-text-black ">{value}</p>
      )}
      <Link
        href={href}
        className="text-primary text-sm flex mt-auto items-center gap-2 hover:underline"
      >
        {!useAlt ? linkText : "View Attendance"}{" "}
        <span className="text-xs">
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};

export default StatCard;
