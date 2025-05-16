import clsx from "clsx";
import { CSSProperties } from "react";

import { ButtonProps } from "./type";
import { Colors } from "../../utils/types";

import styles from "./button.module.css";

export const Button = ({
  type,
  mainColor = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
  textColor = Colors.Light100,
  disabledColor = Colors.Light30,
  disabled,
  onClick,
  children,
  padding = "16px 32px",
  margin = "0",
  className
}: ButtonProps) => {

  return (
    <button
      className={clsx(styles.button, className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={
        {
          "--main-color": mainColor,
          "--hover-color": hoverColor,
          "--active-color": activeColor,
          "--text-color": textColor,
          "--disabled-color": disabledColor,
          "--font-family": "Unbounded",
          "--font-weight": 500,
          "--font-size": "18px",
          "--line-height": "28px",
          "--margin": margin,
          "--padding": padding
        } as CSSProperties
      }
    >
      {children}
    </button>
  );
};
