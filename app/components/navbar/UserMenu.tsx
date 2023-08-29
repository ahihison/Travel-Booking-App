"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-1">
        <div
          onClick={onRent}
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
          <div className="hidden md:block relative">
            {currentUser ? (
              <div className="absolute rounded-full bg-red-500 left-5 bottom-5 w-1 h-1 p-2 flex items-center justify-center text-white font-semibold border-2 border-white text-xs">
                1
              </div>
            ) : null}

            <Avatar image={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vh] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="Messages" />
                <MenuItem onClick={() => {}} label="Notifications" />
                <MenuItem onClick={() => {}} label="Trips" />
                <MenuItem onClick={() => {}} label="Wishlists" />
                <hr />
                <MenuItem onClick={() => {}} label="Airbnb your home" />
                <MenuItem onClick={() => {}} label="Account" />
                <hr />
                <MenuItem onClick={() => {}} label="Help center" />

                <MenuItem
                  onClick={() => {
                    signOut();
                  }}
                  label="Lougout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    loginModal.onOpen();
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    registerModal.onOpen();
                  }}
                  label="Sign up"
                />
                <hr />
                <MenuItem onClick={rentModal.onOpen} label="Airbnb your home" />
                <MenuItem onClick={() => {}} label="Help center" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
