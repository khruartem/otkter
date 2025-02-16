import { CSSProperties } from "react";
import { Colors } from "../../utils/types";
import { ButtonProps } from "./type";

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
      className={`${styles.button} ${className}`}
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
