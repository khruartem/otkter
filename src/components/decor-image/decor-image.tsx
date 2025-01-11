import { TDecorImageProps } from "./types";
import { CSSProperties } from "react";

import styles from "./decor-image.module.css";
import { Colors } from "../../utils/types";
import clsx from "clsx";

export const DecorImage = ({
  height,
  width,
  backgroundColor = Colors.None,
  backgroundUrl = "none",
  borderRadius = 0,
  borderRadiusTopLeft = 0,
  borderRadiusTopRight = 0,
  borderRadiusBottomLeft = 0,
  borderRadiusBottomRight = 0,
}: TDecorImageProps) => {
  const className = clsx(styles["decor-image"], {
    [styles["decor-image_full-bodered"]]: borderRadius,
    [styles["decor-image_custom-bodered"]]: !borderRadius,
  });

  return (
    <div
      className={className}
      style={
        {
          "--url": `url(${backgroundUrl})`,
          "--background-color": backgroundColor,
          "--height": height,
          "--width": width,
          "--border-radius": borderRadius ? `${borderRadius}px` : 0,
          "--border-radius-top-left":
            borderRadiusTopLeft ? `${borderRadiusTopLeft}px` : 0,
          "--border-radius-top-right":
            borderRadiusTopRight ? `${borderRadiusTopRight}px` : 0,
          "--border-radius-bottom-left":
            borderRadiusBottomLeft ? `${borderRadiusBottomLeft}px` : 0,
          "--border-radius-bottom-right":
            borderRadiusBottomRight ? `${borderRadiusBottomRight}px` : 0,
        } as CSSProperties
      }
    ></div>
  );
};
