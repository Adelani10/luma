import CustomSearch from "@/components/ui/customSearch";
import NavDropdown from "@/components/ui/navDropdown";
import React from "react";
import { UsersCompProps } from "@/types";
import CourseRow from "./courseRow";
import { courseData } from "@/lib";

const Courses: React.FC<UsersCompProps> = ({ header, footerTitle }) => {
  return (
    <div className="p-6 bg-white h-full border rounded-2xl flex-1 ">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
          <h1 className="text-2xl font-bold text-text-black">{header}</h1>

          <div className="flex flex-1 max-w-xl mx-4">
            <CustomSearch placeholder="Search" containerClassName="!max-w-md" />
          </div>

          <div className="flex items-center gap-6">
            <NavDropdown label="Class" items={[]} />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#454545]">Sort by</span>
              <NavDropdown label="Newest" items={[]} />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {courseData.map((course) => (
            <CourseRow
              key={course.id}
              name={course.name}
              section={course.section}
              avatarUrl={course.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
