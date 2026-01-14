import AddCourseComp from "@/components/roles/admin/addCourseComp";
import Courses from "@/components/roles/admin/courses";
import React from "react";

const AdminCourses = () => {
  return (
    <div className="space-y-8 flex flex-col h-full">
      <AddCourseComp />
      <Courses header="Course List" footerTitle="" />
    </div>
  );
};

export default AdminCourses;
