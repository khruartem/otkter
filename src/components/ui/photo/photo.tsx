import { FC } from "react";
import clsx from "clsx";

import { ImageUI } from "../../image";

import { TPhotoUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Link, useLocation } from "react-router-dom";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoUIProps> = ({
  photo,
  label = null,
  nextPhotoId = null,
  id,
  url,
  type,
}) => {
  const location = useLocation();
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
        <Link
          to={
            type === "team"
              ? `/${type}/admins/${url}/${photo.id}`
              : `/${type}/${url}/${photo.id}`
          }
          state={{ id, type, url, ...location.state }}
        >
          {/* <img
            loading="lazy"
            width={"100%"}
            height={"100%"}
            className={styles.photo__link}
            src={photo.source}
            alt="Фото проекта"
          /> */}
          <ImageUI
            src={photo.icon}
            alt="Фото проекта"
            width={"100%"}
            height={"100%"}
            className={styles.photo__link}
          />
        </Link>
      ) : (
        <Link
          to={
            type === "team"
              ? `/${type}/admins/${url}/${nextPhotoId}`
              : `/${type}/${url}/${nextPhotoId}`
          }
          state={{ id, type, url, ...location.state }}
        >
          <div className={clsx(styles.photo__link, styles.photo__link_more)}>
            {label}
          </div>
        </Link>
      )}
    </li>
  );
};
