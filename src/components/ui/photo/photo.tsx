import { FC } from "react";
import clsx from "clsx";

import { TPhotoProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoProps> = ({
  photo,
  label = null,
  nextPhotoId = null,
  projectId,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <li
      className={clsx(
        styles.photo,
        isLarge && styles["photo_large-screen"],
        isDesktop && styles.photo_desktop,
        isLaptop && styles.photo_laptop,
        isTablet && styles.photo_tablet,
        isMobile && styles.photo_mobile
      )}
    >
      {photo && !label && !nextPhotoId ? (
        <Link to={`/otkter/projects/${projectId}/${photo.id}`} state={{projectId}}>
          <img
            className={styles.photo__link}
            src={photo.source}
            alt="Фото проекта"
          />
        </Link>
      ) : (
        <Link to={`/otkter/projects/${projectId}/${nextPhotoId}`}>
          <div className={clsx(styles.photo__link, styles.photo__link_more)}>
            {label}
          </div>
        </Link>
      )}
    </li>
  );
};
