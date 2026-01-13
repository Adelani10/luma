import React from "react";
import StatSummary from "@/components/roles/admin/statsSummary";
import Users from "@/components/roles/admin/users";

const AdminParents = () => {
  return (
    <div className="flex h-full flex-col space-y-4">
      <StatSummary />
      <Users header="Parent's Profile" footerTitle="Teachers" />
    </div>
  );
};

export default AdminParents;
