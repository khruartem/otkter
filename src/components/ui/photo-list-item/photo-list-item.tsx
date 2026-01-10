import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { TPhotoListItemUIProps } from "./types";
import styles from "./photo-list-item.module.css";
import clsx from "clsx";

export const PhotoListItemUI: FC<TPhotoListItemUIProps> = ({
  photoUrl,
  itemUrl,
  children,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <li
      className={clsx(
        styles["photo-list-item"],
        isLarge && styles["photo-list-item_large"],
        isDesktop && styles["photo-list-item_desktop"],
        isLaptop && styles["photo-list-item_laptop"],
        isTablet && styles["photo-list-item_tablet"],
        isMobile && styles["photo-list-item_mobile"]
      )}
    >
      <Link to={photoUrl} state={{ url: itemUrl }}>
        {children}
      </Link>
    </li>
  );
};
