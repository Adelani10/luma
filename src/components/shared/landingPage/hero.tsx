import React from "react";
import RoleSelector from "./roleSelector";
import StarRating from "@/components/ui/starRating";
import CustomButton from "@/components/ui/customButton";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 ">
      <h1 className="text-5xl md:text-6xl font-sans font-bold text-primary-sub leading-tight max-w-4xl">
        Raising Kingdom Influencers <br />
        <span className="text-primary">to transform their world</span>
        <br />
        everywhere they go.
      </h1>

      <p className="mt-6 text-text-hero text-lg max-w-2xl font-roboto">
        LumaTribe partners with families and churches to disciple children from
        their first steps to their teen years — helping them thrive, stay rooted
        in Jesus, influence their world, walk in boldness, and grow in empathy.
      </p>

      <div className="mt-12 w-full max-w-lg">
        <p className="text-[20px] font-roboto font-bold text-gray-800 ">
          Get started as a...
        </p>
        <RoleSelector />
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <StarRating rating={5} size={20} />
        <p className="text-xs text-text-hero text-[13.8px font-inter">
          100k+ reviews
        </p>
        <CustomButton className="w-45 py-4">Sign up</CustomButton>
          
      </div>
    </section>
  );
};

export default Hero;
