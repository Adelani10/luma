"use client";

import StepIndicator from "@/components/ui/stepIndicator";
import { CreateCourseHeaderProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

const CREATE_COURSE_STEPS = [
  { id: 1, label: "Course details" },
  { id: 2, label: "Upload files" },
  { id: 3, label: "Review" },
];

const CreateCourseHeader: React.FC<CreateCourseHeaderProps> = ({
  currentStep,
}) => {
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b border-gray-100 px-10 py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text-main">Create Course</h1>

        <div className="hidden md:block">
          <StepIndicator
            steps={CREATE_COURSE_STEPS}
            currentStep={currentStep}
          />
        </div>

        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-text-main"
          aria-label="Close"
        >
          <IoClose size={20} />
        </button>
      </div>
    </header>
  );
};

export default CreateCourseHeader;
