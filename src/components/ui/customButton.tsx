import { ButtonProps } from '@/types';


export default function CustomButton({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    outline: "border border-gray-200 text-text-main hover:bg-gray-50",
    ghost: "text-text-hero bg-[#7D7D7D] text-white hover:bg-black/40 transition-colors",
    'bold-blue': "bg-primary-sub text-white hover:opacity-90"
  };

  return (
    <button
      className={`
        px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95
        flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}