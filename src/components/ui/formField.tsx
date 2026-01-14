'use client'

import { FormFieldProps } from '@/types';
import React from 'react';

const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
  <div className="flex flex-col gap-2 mb-6">
    <label className="text-sm font-semibold text-[#868686]">{label}</label>
    {children}
  </div>
);

export default FormField;