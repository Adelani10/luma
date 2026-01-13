import React from "react";
import MainLayout from "@/components/shared/layout/mainLayout";
import AdminStudents from "@/app/(dashboard)/admin-dashboard/students/adminStudentsPage";

const AdminStudentsPage = () => {
  return (
    <MainLayout>
      <AdminStudents />
    </MainLayout>
  );
};

export default AdminStudentsPage;
