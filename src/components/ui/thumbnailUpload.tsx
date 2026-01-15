import { ThumbnailUploadProps } from "@/types";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ThumbnailUpload: React.FC<ThumbnailUploadProps> = ({ onUpload }) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <span className="text-sm font-semibold text-[#868686]">
        Course thumbnail
      </span>
      <label className="w-32 h-24 border-2 border-dashed border-[#DDDDDD] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
        />
        <div className="w-8 h-8 rounded-full bg-[#7D7D7D] flex items-center justify-center">
          <FaPlus size={20} className="text-white" strokeWidth={3} />
        </div>
      </label>
    </div>
  );
};

export default ThumbnailUpload;
