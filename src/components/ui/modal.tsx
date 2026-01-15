"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#171717]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Body */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
