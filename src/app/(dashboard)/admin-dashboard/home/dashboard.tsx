"use client";

import StatSummary from "@/components/roles/admin/statsSummary";
import QuickActionButton from "../../../../components/roles/admin/quickActionButton";
import { usePathname } from "next/navigation";

const AdminDashboard = () => {
  const pathname = usePathname();
  return (
    <div className=" space-y-8">
      <StatSummary pathname={pathname} />

      <div className="bg-white p-8 rounded-2xl ">
        <h2 className="text-xl font-semibold text-text-black mb-8">
          Quick Action Buttons
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickActionButton label="Add Student" variant="blue" />
          <QuickActionButton label="Add Teacher" />
          <QuickActionButton label="Add Parent" />
          <QuickActionButton label="Add Course" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
