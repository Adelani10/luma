"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddCourseComp = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/admin-dashboard/create-course")}
      className=" p-6 rounded-2xl h-65.5 w-full cursor-pointer justify-center items-center flex flex-col gap-2 bg-white"
    >
      <div className="bg-primary p-4 rounded-full">
        <FaPlus size={20} />
      </div>
      <p className="font-semibold text-[23.98px] text-[#7D7D7D]">
        Create course
      </p>
    </div>
  );
};

export default AddCourseComp;
