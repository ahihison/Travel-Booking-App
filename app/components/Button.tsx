"use client";
import { IconType, icons } from "react-icons";
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative w-full rounded-lg  font-bold ${
          outline ? "bg-white" : "bg-[#db0c64]"
        }
        ${outline ? "border-black" : "border-[#db0c64]"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "py-1" : "py-3"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "font-medium" : "font-bold"}
          ${small ? "border-[1px]" : "border-[1px]"}
          ${Icon ? "hover:bg-neutral-100" : ""}
          `}
      >
        {Icon && <Icon size={24} className="absolute left-4 top-3" />}
        {label}
      </button>
    </>
  );
};

export default Button;
