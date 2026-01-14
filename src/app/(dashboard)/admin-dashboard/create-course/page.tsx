"use client";
import { useRouter, useSearchParams } from "next/navigation";
import CreateCourseHeader from "./createCourseHeader";
import CourseDetailsForm from "./courseDetailsForm";

export default function CreateCoursePage() {
  const currentStep = 1;

  const router = useRouter();
  const searchParams = useSearchParams();

  const goToStep = (step: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <CreateCourseHeader currentStep={currentStep} />

      <main className="max-w-3xl mx-auto py-6 px-6">
        {currentStep === 1 && <CourseDetailsForm />}
      </main>
    </div>
  );
}
