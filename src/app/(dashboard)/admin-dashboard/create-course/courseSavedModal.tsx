"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import CustomButton from "@/components/ui/customButton";
import { IoMdCheckmark } from "react-icons/io";

interface CourseSavedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseSavedModal: React.FC<CourseSavedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleGoDashboard = () => {
    router.push("/admin-dashboard/courses");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-2 shadow-lg shadow-primary/20">
        <IoMdCheckmark color="white" size={24} />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-12">Course saved</h2>

      <CustomButton
        onClick={handleGoDashboard}
        variant="ghost"
        className="px-10 py-4 font-bold text-[16px]"
      >
        Go to Dashboard
      </CustomButton>
    </Modal>
  );
};

export default CourseSavedModal;
