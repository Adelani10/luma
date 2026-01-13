"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useNavigationItems from "./navigationItems";
import { usePathname } from "next/navigation";
import CustomSearch from "@/components/ui/customSearch";
import { PiBellThin } from "react-icons/pi";

export const SIDEBAR_WIDTH = "300px";

const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <aside
      style={{ width: SIDEBAR_WIDTH }}
      className="sticky top-6 left-6 bottom-6 rounded-3xl bg-white"
    >
      <div className="w-full h-full py-6 px-3 flex flex-col">
        <div className="w-full mx-6 mb-6">
          <Image
            src={"/dashboard-logo.png"}
            alt={"LumaTribe logo icon"}
            width={200}
            height={40}
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <CustomSearch placeholder="Search" containerClassName="" />
          <PiBellThin size={24} color="black" />
        </div>

        <div className="text-black flex-col flex-1 grow overflow-y-auto thin-scrollbar">
          <ul className="space-y-2 cursor-pointer">
            {useNavigationItems.map((item, index) => {
              const isLastGroup = index === useNavigationItems.length - 1;
              const isActive = pathname?.startsWith(item.route) ?? false;

              return (
                <div key={index} className={` ${isLastGroup ? "mt-auto" : ""}`}>
                  <li
                    key={index}
                    className={`
                          transition-all flex items-center justify-between w-full rounded-3xl py-3 px-4
                          ${isActive ? "bg-[#DDF1FF]" : "hover:bg-[#DDF1FF]"}
                        `}
                  >
                    <Link href={item.route}>
                      <span className="flex items-center gap-2 w-full h-full">
                        {item.icon}
                        {item.name}
                      </span>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto flex gap-3 flex-col">
          <div className="flex items-start gap-2 px-4 w-full">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image
                src={"/avatar.png"}
                alt={"User Avatar"}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#131313] font-bold">Olabode Alamu</span>
              <span className="text-[#F2F2F7] bg-[#0088FF] px-[3px] rounded-lg text-[10px]">
                Admin
              </span>
            </div>
          </div>

          <div
            className={`transition-all flex text-black items-center justify-between w-full rounded-3xl py-3 px-4
                          ${pathname.startsWith("/settings") ? "bg-[#DDF1FF]" : "hover:bg-[#DDF1FF]"}`}
          >
            <Link href={"/settings"}>
              <span className="flex items-center gap-2 w-full h-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 4.18001C13.4791 4.31032 13.6694 4.49933 13.8012 4.72758C13.933 4.95584 14.0016 5.2151 14 5.47868V10.3347C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0897C2.07247 10.8612 2.00053 10.6005 2 10.3347V5.47801C2 4.93868 2.29533 4.44201 2.772 4.18001L7.272 1.52668C7.50169 1.40004 7.75971 1.33362 8.022 1.33362C8.28429 1.33362 8.54231 1.40004 8.772 1.52668L13.272 4.18001H13.25Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.00002C6 8.53045 6.21071 9.03916 6.58579 9.41423C6.96086 9.78931 7.46957 10 8 10C8.53043 10 9.03914 9.78931 9.41421 9.41423C9.78929 9.03916 10 8.53045 10 8.00002C10 7.46959 9.78929 6.96088 9.41421 6.58581C9.03914 6.21073 8.53043 6.00002 8 6.00002C7.46957 6.00002 6.96086 6.21073 6.58579 6.58581C6.21071 6.96088 6 7.46959 6 8.00002Z"
                    stroke="#7D7D7D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Settings
              </span>
            </Link>
          </div>
          <div
            onClick={() => {}}
            className={`transition-all flex text-[#B01212] items-center justify-between w-full rounded-3xl py-3 px-4 hover:bg-[#F6D6D6]`}
          >
            <Link href={"/settings"}>
              <span className="flex items-center gap-2 w-full h-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 5.33335V4.00002C9.33333 3.6464 9.19286 3.30726 8.94281 3.05721C8.69276 2.80716 8.35362 2.66669 8 2.66669H3.33333C2.97971 2.66669 2.64057 2.80716 2.39052 3.05721C2.14048 3.30726 2 3.6464 2 4.00002V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3334 3.33333 13.3334H8C8.35362 13.3334 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 8.00002H14M14 8.00002L12 6.00002M14 8.00002L12 10"
                    stroke="#B01212"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Log out
              </span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
