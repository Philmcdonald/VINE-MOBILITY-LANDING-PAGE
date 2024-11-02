"use client";

import React, { ReactNode } from "react";
import { Modal as PopUp } from "antd";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/app/state/features/modal/modal.slice";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    console.log("Clicked cancel button");
    dispatch(toggleModal({}));
  };

  return (
    <>
      <PopUp
        className="rounded-full"
        open={isOpen}
        onCancel={handleCancel}
        centered={true}
        width="42vw"
        footer=""
      >
        {children}
      </PopUp>
    </>
  );
};

export default Modal;
