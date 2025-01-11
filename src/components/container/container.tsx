import { clsx } from "clsx";
import { CSSProperties } from "react";
import { ContainerProps } from "./type";

import styles from "./container.module.css";
import { Colors } from "../../utils/types";

export const Container = ({
  children,
  as: Tag = "div",
  flexDirection,
  alignContent = "unset",
  justifyContent = "unset",
  alignItems = "unset",
  alignSelf = "unset",
  backgroundColor = Colors.None,
  bordered = null,
  borderRadius = 200,
  padding = "0",
  margin = "0",
  gap = "0",
  id,
  position = "",
  width = "",
  height = "",
  inset = null,
  withOverlay = false,
  zIndex = undefined,
}: ContainerProps) => {
  const className = clsx(styles["container"], {
    [styles["container_bordered-full"]]: bordered === "full",
    [styles["container_bordered-bottom"]]: bordered === "bottom",
    [styles["container_positioned"]]: position,
  });

  return (
    <Tag
      className={className}
      id={id ? id : null}
      style={
        {
          "--flex-direction": flexDirection,
          "--align-content": alignContent,
          "--justify-content": justifyContent,
          "--align-items": alignItems,
          "--align-self": alignSelf,
          "--background-color": backgroundColor,
          "--radii": `${borderRadius}px`,
          "--padding": padding,
          "--margin": margin,
          "--gap": gap,
          "--position": position,
          "--width": width ? width : undefined,
          "--height": height ? height : undefined,
          "--inset": inset,
          "--overlay-visibility": withOverlay ? "block" : "none",
          "--z-index": zIndex
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
};
