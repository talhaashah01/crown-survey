import React, { useState } from "react";

import ModalProps from "./model/modalProps";

import Button from "./../Button";

import "./style.css";
import { closeIcon } from "../../assets/icons";

const Modal = ({
  show,
  setShow,
  title,
  text,
  children,
  onConfirm,
  confirmText,
  cancelText,
}: ModalProps) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
      setShow(false);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      {show && (
        <div className="modalOverlay flex items-center justify-center">
          <div className="customModal">
            <div className="modalHeader p-1">
              <img
                src={closeIcon}
                alt=""
                className="closeButton"
                onClick={handleClose}
              />
            </div>
            <div className="modalBody px-[30px] pb-[30px]">
              <h2 className="modalTitle title-1 theme-black text-center mb-2">
                {title}
              </h2>
              <p className="paragraph-5 theme-dark-gray text-center">{text}</p>
              {children}
              <div className="modalActions flex items-center justify-center mt-[20px]">
                {cancelText && (
                  <Button
                    text={cancelText}
                    onClick={handleClose}
                    className="mx-2"
                    unfilled
                  />
                )}
                {confirmText && (
                  <Button
                    text={confirmText}
                    className="mx-2"
                    onClick={handleConfirm}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
