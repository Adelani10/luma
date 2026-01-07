import { FeatureProps } from "@/types";
import React from "react";

const FeatureSection: React.FC<FeatureProps> = ({
  title,
  description,
  bgColor,
  reverse,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center p-12 rounded-[100px] ${bgColor} gap-12`}
      >
        {/* Mock Graphic side */}
        <div className="flex-1 w-full aspect-video bg-white/50 rounded-3xl border border-white/20 shadow-sm relative overflow-hidden">
          {/* You'd put your specific feature images here */}
        </div>

        {/* Text side */}
        <div className="flex-1 text-left">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-primary text-xl">💬</span>
          </div>
          <h2 className="text-4xl font-bold text-primary-sub mb-4">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
