"use client";

import { StepIndicatorProps } from "@/types";
import React from "react";

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="flex items-center gap-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <span
            className={`
            text-sm font-medium transition-colors
            ${currentStep === step.id ? "text-primary" : ""}
            ${currentStep > step.id ? "text-primary" : ""}
            ${currentStep < step.id ? "text-gray-300" : ""}
          `}
          >
            {step.label}
          </span>

          {index < steps.length - 1 && (
            <div className="flex items-center">
              <div
                className={`
                w-16 h-[1px] 
                ${currentStep > step.id ? "bg-primary" : "bg-gray-200"}
              `}
              />
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className={
                  currentStep > step.id ? "text-primary" : "text-gray-200"
                }
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
