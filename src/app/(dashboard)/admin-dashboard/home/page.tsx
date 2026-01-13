import AdminDashboard from "@/app/(dashboard)/admin-dashboard/home/dashboard";
import MainLayout from "@/components/shared/layout/mainLayout";
import React from "react";

const HomePage = () => {
  return (
    <MainLayout>
      <AdminDashboard />
    </MainLayout>
  );
};

export default HomePage;
