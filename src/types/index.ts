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
