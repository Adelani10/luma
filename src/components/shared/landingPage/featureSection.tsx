import { LandingPageFeatureTilesProps } from "@/types";
import Image from "next/image";
import React from "react";

const FeatureSection: React.FC<LandingPageFeatureTilesProps> = ({
  image,
  icon,
  title,
  id,
  background,
  description,
}) => {
  const flexDirection = id % 2 ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className="mx-auto">
      <div
        className={`relative overflow-hidden rounded-2xl min-h-[280px] ${flexDirection} flex items-center`}
      >
        <div
          className={`${background} absolute inset-0 bg-center bg-contain bg-no-repeat`}
          aria-hidden
        />

        <div className="relative z-10 w-full px-6 py-10">
          <div
            className={`flex flex-col ${flexDirection} items-center gap-8 max-w-6xl mx-auto`}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={image}
                alt="decorative"
                className="w-full max-w-xs object-contain"
              />
            </div>

            <div className="flex-1 px-12">
              <div className=" p-6 max-w-[36.5rem]">
                <Image
                  src={icon}
                  alt="tile icon"
                  width={40}
                  height={40}
                  priority
                />
                <h2 className=" md:text-3xl mt-2 font-bold text-[#000000]">
                  {title}
                </h2>
                <p className="text-[#000000] mt-2 text-[14px] leading-snug">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
