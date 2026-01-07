"use client";
import { StarRatingProps } from "@/types";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  size = 24,
  editable = false,
  onRatingChange = () => {},
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const displayRating = hovered !== null ? hovered : rating;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFilled = i < displayRating;

        return (
          <AiFillStar
            key={i}
            size={size}
            onClick={() => editable && onRatingChange(i + 1)}
            onMouseEnter={() => editable && setHovered(i + 1)}
            onMouseLeave={() => editable && setHovered(null)}
            className={[
              isFilled ? "text-[#F7B100]" : "text-[#D8D8D8]",
              editable ? "cursor-pointer" : "cursor-default",
              "transition-colors",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
