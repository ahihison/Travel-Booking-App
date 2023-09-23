"use client";

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);
  const hanleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);

    onSubmit();
  }, [disabled, onSubmit]);
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed flex items-center justify-center outline-none focus:outline-none overflow-x-hidden overflow-y-auto bg-neutral-800/70 z-50 inset-0">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6  mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            }
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div className="flex items-center p-5 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="absolute left-4 cursor-pointer p-2 border-0 hover:bg-neutral-100 rounded-full"
                >
                  <AiOutlineClose size={18} />
                </button>
                <div className="font-bold text-md">{title}</div>
              </div>
              {/* BODY */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-1 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      label={secondaryActionLabel}
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                    />
                  )}

                  <Button
                    label={actionLabel}
                    disabled={disabled}
                    onClick={onSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
