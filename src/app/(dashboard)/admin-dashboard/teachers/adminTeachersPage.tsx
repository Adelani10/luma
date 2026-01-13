import React from "react";
import StatSummary from "@/components/roles/admin/statsSummary";
import Users from "@/components/roles/admin/users";

const AdminTeachers = () => {
  return (
    <div className="flex h-full flex-col space-y-4">
      <StatSummary />
      <Users header="Teacher's Profile" footerTitle="Students" />
    </div>
  );
};

export default AdminTeachers;
