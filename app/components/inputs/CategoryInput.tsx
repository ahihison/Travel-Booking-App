"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  label: string;
  icon: IconType;
  selected?: boolean;
  onClick: (value: string) => void;
}
const CategoryInput = ({
  label,
  icon: Icon,
  selected,
  onClick,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => {
        onClick(label);
      }}
      className={`flex flex-col rounded-xl p-4 border-2 gap-3 hover:border-black transition cursor-pointer ${
        selected ? "border-black" : "border-neutral-200"
      } `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
