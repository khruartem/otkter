import { clsx } from "clsx";
import { TextProps } from "./types";

import styles from "./text.module.css";
import { CSSProperties } from "react";
import { Colors } from "../../utils/types";

export const Text = ({
  children,
  as: Tag = "p",
  fontFamily,
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
  textTransform,
  color,
  decorated = false,
  margin = "0",
  padding = "0",
  width = 0,
}: TextProps) => {
  const className = clsx(styles["text"], {
    [styles["text_decorated"]]: decorated,
  });

  return (
    <Tag
      className={className}
      style={
        {
          "--font-family": fontFamily,
          "--text-align": textAlign,
          "--font-size":
            typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          "--font-weight": fontWeight,
          "--line-height":
            typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight,
          "--text-transform": textTransform,
          "--color": color,
          "--radius": "200px",
          "--border-color": Colors.Nephritis100,
          "--margin": margin,
          "--padding": padding,
          "--width": width ? width : null,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
};
