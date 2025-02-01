import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { TPhotoProps } from "./types";
import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

export const PhotoUI: FC<TPhotoProps> = ({ photo }) => {
  const { id, source, projectId } = photo;
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useMediaQueryCustom();

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
        state={{ currentImg: source }}
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
