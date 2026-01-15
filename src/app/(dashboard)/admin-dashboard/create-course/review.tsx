import React from "react";
import CourseDetailsForm from "./courseDetailsForm";
import UploadFilesStep from "./fileUploadStep";
import Image from "next/image";

const Review = () => {
  return (
    <div className="">
      <Image
        src="/images/placeholder-img.png"
        alt="Course Thumbnail"
        width={200}
        height={200}
        className="ml-6 mb-6"
      />
      <CourseDetailsForm />
      <UploadFilesStep isReviewing />
    </div>
  );
};

export default Review;
