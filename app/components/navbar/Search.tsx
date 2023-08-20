"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full cursor-pointer shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center flex-row">
        <div className="font-bold text-sm px-6">Anywhere</div>
        <div className="hidden sm:block text-sm px-6 font-bold border-x-[1px] text-center flex-1">
          Any week
        </div>
        <div className=" text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add guests</div>
          <div className="bg-rose-500 p-2 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
