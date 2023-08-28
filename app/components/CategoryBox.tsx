"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { use, useCallback, useEffect } from "react";
import { IconType } from "react-icons";
import qs from "query-string";
import { GrFormPrevious } from "react-icons/gr";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
}
const CategoryBox = ({
  icon: Icon,
  label,
  description,
  selected,
}: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col gap-3 p-3 items-center justify-center border-b-2 hover:text-neutral-800 hover:cursor-pointer transition ${
        selected ? "border-b-neutral-800" : "border-b-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"} `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;