"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const registerModal = useRegisterModal();
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-1">
        <div
          onClick={() => {}}
          className="hidden md:block px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer text-sm font-bold"
        >
          Airbnb Your Home
        </div>
        <div
          onClick={() => {}}
          className="hidden md:block px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer text-sm font-bold"
        >
          <GrLanguage size={18} />
        </div>
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition hover:shadow-md "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vh] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem
              onClick={() => {
                registerModal.onOpen();
              }}
              label="Sign up"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
