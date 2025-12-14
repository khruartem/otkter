import { FC, memo, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import { ModalUI } from "../ui/modal";

import { TModalProps } from "./types";

const modalRoot = document.getElementById("root-modal");

export const Modal: FC<TModalProps> = memo(
  ({ type, onClose, children, className }) => {
    const location = useLocation();
    const isDirectLink = location.state ? false : true;

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };

      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <ModalUI
        type={type}
        onClose={onClose}
        isDirectLink={isDirectLink}
        className={className}
      >
        {children}
      </ModalUI>,
      modalRoot as HTMLDivElement
    );
  }
);
