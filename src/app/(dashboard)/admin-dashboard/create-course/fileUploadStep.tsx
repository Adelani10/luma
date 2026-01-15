"use client";

import CustomSelect from "@/components/ui/customSelect";
import FormField from "@/components/ui/formField";
import ThumbnailUpload from "@/components/ui/thumbnailUpload";
import React from "react";
import LessonCard from "./lessonCard";
import { FaPlus } from "react-icons/fa";

const UploadFilesStep: React.FC<{ isReviewing?: boolean }> = ({
  isReviewing = false,
}) => {
  return (
    <div className="max-w-2xl mx-auto py-10 relative">
      {!isReviewing && <ThumbnailUpload onUpload={(f) => console.log(f)} />}

      <FormField label="Select chapters">
        <CustomSelect>
          <option value="1">1</option>
          <option value="2">2</option>
        </CustomSelect>
      </FormField>

      <LessonCard index={1} />
      <LessonCard index={2} />

      {!isReviewing && (
        <button className="h-13.5 text-white font-bold text-[16px] bg-[#7D7D7D] rounded-2xl px-3 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
          <FaPlus size={16} className="" /> Add Chapter
        </button>
      )}
    </div>
  );
};

export default UploadFilesStep;
