"use client";
import { useRouter, useSearchParams } from "next/navigation";
import CreateCourseHeader from "./createCourseHeader";
import CourseDetailsForm from "./courseDetailsForm";
import UploadFilesStep from "./fileUploadStep";
import CustomButton from "@/components/ui/customButton";
import { useCourseStore } from "@/store/course";
import Review from "./review";
import { useState } from "react";
import CourseSavedModal from "./courseSavedModal";

export default function CreateCoursePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStep = parseInt(searchParams.get("step") || "1", 10);

  const goToStep = (step: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step.toString());
    router.push(`?${params.toString()}`);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    goToStep(currentStep + 1);
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const { resetStore } = useCourseStore();

  const handleFinish = async () => {
    setShowSuccess(true);
    resetStore();
  };

  const done = currentStep === 3;

  return (
    <div className="min-h-screen bg-white relative">
      <CreateCourseHeader currentStep={currentStep} />

      {currentStep > 1 && (
        <div className="fixed left-20 top-1/2 -translate-y-1/2 hidden xl:block">
          <CustomButton
            variant="ghost"
            onClick={prevStep}
            className="px-9 py-3 text-[16px] rounded-2xl font-bold transition-all"
          >
            Back
          </CustomButton>
        </div>
      )}

      <div className="fixed right-20 top-1/2 -translate-y-1/2 hidden xl:block">
        <CustomButton
          onClick={done ? handleFinish : nextStep}
          className="px-9 py-3 rounded-2xl font-bold text-[16px]"
        >
          {done ? "Save" : "Next"}
        </CustomButton>
      </div>

      <main className="max-w-3xl mx-auto py-6 px-6">
        {currentStep === 1 && <CourseDetailsForm />}
        {currentStep === 2 && <UploadFilesStep />}
        {currentStep === 3 && <Review />}
      </main>

      <div className="flex justify-between mt-12 xl:hidden">
        <CustomButton onClick={prevStep} variant="outline">
          Back
        </CustomButton>
        <CustomButton onClick={done ? handleFinish : nextStep}>
          Next
        </CustomButton>
      </div>

      <CourseSavedModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
