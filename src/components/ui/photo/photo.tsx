import { FC } from "react";

import { ImageUI } from "../../image";

import { TPhotoUIProps } from "./types";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoUIProps> = ({ src, alt }) => {
  return (
    <ImageUI
      src={src}
      alt={alt}
      width={"100%"}
      height={"100%"}
      className={styles.photo}
    />
  );
};
