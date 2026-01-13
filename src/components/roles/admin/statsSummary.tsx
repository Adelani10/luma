import StatCard from "@/components/roles/admin/statCard";
import React from "react";

const StatSummary = ({ pathname }: { pathname: string }) => {
  const useAlt =
    !pathname?.startsWith("/admin-dashboard/students") &&
    !pathname?.startsWith("/admin-dashboard/home");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <StatCard
        title="Students"
        value="10,000"
        href="/admin-dashboard/students"
        linkText="View all Students"
      />
      <StatCard
        title="Teachers"
        value="121"
        href="/admin-dashboard/teachers"
        linkText="View all Teachers"
      />
      <StatCard
        title="Parents"
        value="3,122"
        href="/admin-dashboard/parents"
        linkText="View all Parents"
      />
      <StatCard
        title="Courses"
        value="56"
        href="/admin-dashboard/courses"
        linkText="View Courses"
        useAlt={useAlt}
      />
    </div>
  );
};

export default StatSummary;
