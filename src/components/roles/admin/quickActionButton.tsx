import { QuickActionProps } from "@/types";

const QuickActionButton: React.FC<QuickActionProps> = ({
  label,
  onClick,
  variant = "gray",
}) => {
  const bgStyles = variant === "blue" ? "bg-[#E5F6FF]" : "bg-[#EDEDED]";

  return (
    <button
      onClick={onClick}
      className={`${bgStyles} flex flex-col items-center justify-center p-6 rounded-lg w-full transition-transform active:scale-95 group`}
    >
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <span className="text-sm font-semibold text-[#353000]">{label}</span>
    </button>
  );
};

export default QuickActionButton;
