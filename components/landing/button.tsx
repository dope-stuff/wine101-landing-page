import React from "react";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: (value: any) => void;
}
export default function CustomButton({
  children,
  onClick,
  ...attributes
}: CustomButtonProps) {
  return (
    <button
      className="h-full flex-row flex flex-nowrap min-w-[100px] max-h-[48px] min-h-[48px] gap-10 justify-center items-center bg-white py-2 px-4 relative font-medium rounded-xl border-2 border-[#333333] text-[14px]"
      onClick={onClick}
      {...attributes}
    >
      {children}
    </button>
  );
}
