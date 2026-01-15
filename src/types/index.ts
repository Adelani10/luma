import { ReactNode } from "react";

export type UserRole = "STUDENT" | "PARENT" | "TEACHER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tribeId?: string;
}

// primary ->  #0092FE; color concatenated with primary in hero -> #153B8F; hero text of landing page -> #545382; text -> #171717;
//FONTS
// inter and  roboto

export interface FeatureProps {
  title: string;
  description: string;
  bgColor: string;
  reverse?: boolean;
}

export interface LandingPageFeatureTilesProps {
  id: number;
  title: string;
  description: string;
  background: string;
  icon: string;
  image: string;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "bold-blue";
  children: ReactNode;
  className?: string;
}

export interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export interface StarRatingProps {
  rating?: number;
  size?: number;
  editable?: boolean;
  onRatingChange?: (newRating: number) => void;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  href: string;
  linkText: string; useAlt?: boolean
}

export interface QuickActionProps {
  label: string;
  onClick?: () => void;
  variant?: "blue" | "gray";
}

export interface UserRowProps {
  name: string;
  subtext: string;
  avatarUrl: string;
  isSelected?: boolean;
  isStudent?: boolean;
}
export interface CourseRowProps {
  name: string;
  section: string;
  avatarUrl: string;
}

export interface UsersCompProps {
  header: string;
  footerTitle: string;
}

export interface ActionButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  pathname?: string;
  options: option[];
}

export type option = {
  label: string;
  action: () => void;
};

export interface Step {
  id: number;
  label: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export interface CreateCourseHeaderProps {
  currentStep: number;
}

export interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

export interface ThumbnailUploadProps {
  onUpload: (file: File) => void;
}

export interface DocumentUploadProps {
  onUpload: (file: File) => void;
  fileName?: string;
}


export interface LessonCardProps {
  index: number;
}
