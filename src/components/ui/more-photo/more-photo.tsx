import { FC } from "react";

import { TMorePhotoUIProps } from "./types";

import styles from "./more-photo.module.css";

export const MorePhotoUI: FC<TMorePhotoUIProps> = ({ photosLength }) => {
  return <div className={styles["more-photo"]}>{`+${photosLength - 4}`}</div>;
};
