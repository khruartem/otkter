import { FC } from "react";
import clsx from "clsx";

import { TPhotoUIProps } from "./types";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoUIProps> = ({
  src,
  alt,
  onClick,
  className,
}) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      width={"100%"}
      height={"100%"}
      onClick={onClick}
      className={clsx(styles.photo, className && className)}
    />
  );
};
