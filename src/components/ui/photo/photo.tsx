import { FC } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import { ImageUI } from "../../image";

import { TPhotoUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoUIProps> = ({
  itemId,
  itemKind,
  photo,
  label = null,
  url,
  // nextPhotoId = null,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const location = useLocation();
  const state = { id: itemId, type: itemKind, url, ...location.state };

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
      {/* {photo && !label && !nextPhotoId ? (
        <Link to={url} state={state}>
          <ImageUI
            src={photo.icon}
            alt="Фото проекта"
            width={"100%"}
            height={"100%"}
            className={styles.photo__link}
          />
        </Link>
      ) : (
        <Link to={url} state={state}>
          <div className={clsx(styles.photo__link, styles.photo__link_more)}>
            {label}
          </div>
        </Link>
      )} */}
      <Link to={url} state={state}>
        {/* {photo && label && !nextPhotoId ? ( */}
        {label ? (
          <div className={clsx(styles.photo__link, styles.photo__link_more)}>
            {label}
          </div>
        ) : (
          <ImageUI
            src={photo.icon}
            alt="Фото проекта"
            width={"100%"}
            height={"100%"}
            className={styles.photo__link}
          />
        )}
      </Link>
    </li>
  );
};
