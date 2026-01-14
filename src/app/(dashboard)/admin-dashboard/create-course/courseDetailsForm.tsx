"use client";

import React from "react";
import FormField from "@/components/ui/formField";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import { useCourseStore } from "@/store/course";

const CourseDetailsForm: React.FC = () => {
  const { courseData, updateData } = useCourseStore();

  return (
    <div className="max-w-2xl mx-auto py-6">
      <FormField label="Course Title">
        <CustomInput
          placeholder="ABC grid"
          value={courseData.title}
          onChange={(e) => updateData({ title: e.target.value })}
        />
      </FormField>

      <FormField label="Course Code">
        <CustomInput
          placeholder="344BD887"
          value={courseData.code}
          onChange={(e) => updateData({ code: e.target.value })}
        />
      </FormField>

      <FormField label="Department / Class Level">
        <CustomSelect>
          <option value="">Choose option</option>
          <option value="k1">Kindergarten</option>
          <option value="p1">Primary 1</option>
        </CustomSelect>
      </FormField>

      <FormField label="Description">
        <textarea
          className="w-full px-4 py-3 rounded-2xl border border-gray-200 min-h-37.5 text-text-main placeholder:text-[#BBBBBB] outline-none focus:border-primary "
          placeholder="Description"
          value={courseData.description}
          onChange={(e) => updateData({ description: e.target.value })}
        />
      </FormField>

      <div className="mt-8 pt-8 border-t border-gray-100">
        <FormField label="Assign Teacher">
          <CustomSelect>
            <option value="">Select Teacher</option>
          </CustomSelect>
        </FormField>
      </div>
    </div>
  );
};

export default CourseDetailsForm;
