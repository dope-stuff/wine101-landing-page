import Link from "next/link";
import React from "react";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  // onClick: (value: any) => void;
  href: string;
}
export default function CustomButton({
  children,
  // onClick,
  href,
  ...attributes
}: CustomButtonProps) {
  return (
    <Link
      className="h-full flex-row flex flex-nowrap min-w-[100px] max-h-[48px] min-h-[48px] gap-10 justify-center items-center bg-white py-2 px-4 relative font-medium rounded-xl border-2 border-[#333333] text-[14px]"
      href={href}
      target="_blank"
    >
      {children}
    </Link>
  );
}
