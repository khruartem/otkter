import { FC } from "react";
import clsx from "clsx";

import { TPhotoPreviewUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-preview.module.css";

export const PhotoPreviewUI: FC<TPhotoPreviewUIProps> = ({ photo }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();
  const smallResolution = isLaptop ||  isTablet || isMobile;

  return photo ? (
    <img
      src={photo}
      alt="Фото проетка в режиме просмотра"
      className={clsx(
        styles.slider__photo,
        isLarge && styles["slider__photo_large-screen"],
        isDesktop && styles.slider__photo_desktop,
        smallResolution && styles["slider__photo_full-width"]
      )}
    />
  ) : (
    <p>Ошибка загрузки фото</p>
  );
};
