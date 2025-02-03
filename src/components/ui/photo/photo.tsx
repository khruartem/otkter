import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { TPhotoProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoProps> = ({ photo, projectId }) => {
  const { id, source } = photo;

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
      <Link
        to={`/otkter/projects/${projectId}/${id}`}
        className={styles.photo__link}
        style={
          {
            "--url": `url(${source})`,
          } as CSSProperties
        }
      />
    </li>
  );
};
