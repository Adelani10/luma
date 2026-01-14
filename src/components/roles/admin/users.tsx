import CustomSearch from "@/components/ui/customSearch";
import NavDropdown from "@/components/ui/navDropdown";
import React from "react";
import UserRow from "./userRow";
import { studentsData } from "@/lib";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { UsersCompProps } from "@/types";

const Users: React.FC<UsersCompProps> = ({ header, footerTitle }) => {
  return (
    <div className="p-6 flex-1 bg-white h-full border rounded-2xl ">
      <div className="flex flex-col mx-auto h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
          <h1 className="text-2xl font-bold text-text-black">{header}</h1>

          <div className="flex flex-1 max-w-xl mx-4">
            <CustomSearch placeholder="Search" containerClassName="!max-w-md" />
          </div>

          <div className="flex items-center gap-6">
            <NavDropdown label="Country" items={[]} />
            <NavDropdown label="State" items={[]} />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#454545]">Sort by</span>
              <NavDropdown label="Newest" items={[]} />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {studentsData.map((student) => (
            <UserRow
              key={student.id}
              name={student.name}
              subtext={student.subtext}
              avatarUrl={student.avatar}
            />
          ))}
        </div>

        <div className="mt-auto ">
          <Link
            href="/admin-dashboard/parents"
            className="text-primary flex text-sm items-center gap-2"
          >
            All {footerTitle} <FaArrowRightLong size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
