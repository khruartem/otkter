import { FC } from "react";
import clsx from "clsx";

import { TPhotoPreviewUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-preview.module.css";

export const PhotoPreviewUI: FC<TPhotoPreviewUIProps> = ({ photo }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  return photo ? (
    <img
      loading="lazy"
      src={photo}
      alt="Фото проетка в режиме просмотра"
      className={clsx(
        styles.slider__photo,
        largeResolution && styles["slider__photo_large-resolution"],
        smallResolution && styles["slider__photo_small-resolution"],
      )}
    />
  ) : (
    <p>Ошибка загрузки фото</p>
  );
};
