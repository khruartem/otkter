import { FC } from "react";
import clsx from "clsx";

import { PhotoUI } from "../photo";

import styles from "./merch-info-poster.module.css";

import { TMerchInfoPosterUIProps } from "./types";
import { MerchItemImageUI } from "../merch-item-image";
import { MerchItemTopUI } from "../merch-item-top";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { MerchInfoCategories } from "../../merch-info-categories";

export const MerchInfoPosterUI: FC<TMerchInfoPosterUIProps> = ({
  photos,
  currentPhoto,
  onChangePhoto,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["merch-info-poster"],
        (isLarge || isDesktop) && styles["merch-info-poster_large-gap"],
        (isLaptop || isTablet || isMobile) &&
          styles["merch-info-poster_small-gap"],
        isLarge && styles["merch-info-poster_large"],
        isDesktop && styles["merch-info-poster_desktop"],
        isLaptop && styles["merch-info-poster_laptop"],
        isTablet && styles["merch-info-poster_tablet"],
        isMobile && styles["merch-info-poster_mobile"]
      )}
    >
      <MerchItemTopUI
        className={clsx(
          styles["merch-item__top_info"],
          isMobile && styles["merch-item__top_info_no-padding"]
        )}
      >
        <MerchInfoCategories />
        <MerchItemImageUI
          src={currentPhoto}
          alt="Фото мерча"
          className={clsx(
            styles["merch-item__image_info"],
            isLarge && styles["merch-item__image_info_large"],
            isDesktop && styles["merch-item__image_info_desktop"],
            isLaptop && styles["merch-item__image_info_laptop"],
            isTablet && styles["merch-item__image_info_tablet"],
            isMobile && styles["merch-item__image_info_mobile"]
          )}
        />
      </MerchItemTopUI>
      {photos && onChangePhoto && (
        <ul
          className={clsx(
            styles["merch-info-photo-list"],
            isLarge && styles["merch-info-photo-list_large"],
            isDesktop && styles["merch-info-photo-list_desktop"],
            isLaptop && styles["merch-info-photo-list_laptop"],
            isTablet && styles["merch-info-photo-list_tablet"],
            isMobile && styles["merch-info-photo-list_mobile"]
          )}
        >
          {photos.map(({ id, source }) => (
            <li
              key={id}
              className={clsx(
                styles["merch-info-photo-list-item"],
                source === currentPhoto
                  ? styles["merch-info-photo-list-item_active"]
                  : styles["merch-info-photo-list-item_inactive"]
              )}
            >
              <PhotoUI
                src={source}
                alt="Фото мерча"
                onClick={() => onChangePhoto(source)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
