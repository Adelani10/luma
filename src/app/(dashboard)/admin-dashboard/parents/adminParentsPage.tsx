"use client";
import React from "react";
import StatSummary from "@/components/roles/admin/statsSummary";
import Users from "@/components/roles/admin/users";
import { usePathname } from "next/navigation";

const AdminParents = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col space-y-4">
      <StatSummary pathname={pathname} />
      <Users header="Parent's Profile" footerTitle="Teachers" />
    </div>
  );
};

export default AdminParents;
