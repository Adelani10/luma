"use client";

import CustomSelect from "@/components/ui/customSelect";
import DocumentUpload from "@/components/ui/documentUpload";
import FormField from "@/components/ui/formField";
import { LessonCardProps } from "@/types";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";

const LessonCard: React.FC<LessonCardProps> = ({ index }) => {
  return (
    <div className="bg-[#F5F5F5] p-8 rounded-[2rem] mb-8 space-y-6">
      <h3 className="text-lg font-bold text-gray-800">Lesson {index}</h3>

      <FormField label="Choose File Type">
        <CustomSelect>
          <option value="">Choose option</option>
          <option value="video">Video</option>
          <option value="pdf">PDF / Document</option>
        </CustomSelect>
      </FormField>

      <DocumentUpload onUpload={(f) => console.log(f)} />

      <FormField label="Description">
        <textarea
          className="w-full px-4 py-3 rounded-2xl border border-[#DDDDDD] min-h-[120px] outline-none bg-white placeholder:text-[#BBBBBB]"
          placeholder="Description"
        />
      </FormField>

      <div className="flex items-center justify-between pt-4">
        <button className="flex items-center gap-2 text-[15.2px] font-semibold text-[#353000] hover:opacity-70 transition-opacity">
          Add More
          <div className="w-6 h-6 rounded-full bg-[#7D7D7D] flex items-center justify-center">
            <FaPlus size={14} className="text-white" strokeWidth={4} />
          </div>
        </button>
        <button className="text-black transition-colors">
          <HiOutlineTrash size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
