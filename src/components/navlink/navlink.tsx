import { NavLinkProps } from "./types";
import { Colors } from "../../utils/types";
import { CSSProperties } from "react";

import styles from "./navlink.module.css";

export const NavLink = ({
  children,
  display = "inline",
  url,
  target = "",
  mainColor = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
  fontFamily = "Unbounded",
  fontSize,
  fontWeight,
  lineHeight,
  textTransform = "none",
  margin = "0",
  padding = "0",
  onClick = undefined
}: NavLinkProps) => {
  return (
    <a
      href={url}
      onClick={onClick}
      target={target ? target : undefined}
      className={styles.link}
      style={
        {
          "--font-family": fontFamily ? `${fontFamily}, sans-serif` : null,
          "--font-size": fontSize ? `${fontSize}px` : null,
          "--font-weight": fontWeight ? fontWeight : null,
          "--line-height": lineHeight ? `${lineHeight}px` : null,
          "--text-transform": textTransform,
          "--display": display,
          "--main-color": mainColor,
          "--margin": margin,
          "--padding": padding,
          "--hover-color": hoverColor,
          "--active-color": activeColor
        } as CSSProperties
      }
    >
      {children}
    </a>
  );
};
