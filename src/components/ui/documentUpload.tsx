import { DocumentUploadProps } from "@/types";
import { AiOutlineLink } from "react-icons/ai";

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onUpload,
  fileName,
}) => (
  <div className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-[#868686]">
      Upload Course File
    </span>
    <label className="relative w-full">
      <input
        type="file"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
      />
      <div className="w-full px-4 py-3 rounded-2xl border-2 border-dashed border-[#DDDDDD] text-gray-300 flex items-center justify-between cursor-pointer bg-white">
        <span>{fileName || "Upload your document"}</span>
        <div className="w-8 h-8 rounded-full bg-[#DDF1FF] flex items-center justify-center">
          <AiOutlineLink size={18} className="text-text-black" />
        </div>
      </div>
    </label>
  </div>
);

export default DocumentUpload;
