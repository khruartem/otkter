import { FC } from "react";
import clsx from "clsx";

import { Photo } from "../../photo";

import { TPhotoListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({
  itemId,
  itemKind,
  photos,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const middleResolution = isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <ul
      className={clsx(
        styles["photo-list"],
        largeResolution && styles["photo-list_large-resolution"],
        middleResolution && styles["photo-list_middle-resolution"],
        smallResolution && [
          styles["photo-list_small-resolution"],
          styles["photo-list_small-padding"],
        ],
        isLarge && styles["photo-list_middle-padding"],
        isDesktop && styles["photo-list_large-padding"]
      )}
    >
      {photos.map((photo, index) => {
        if (index < 4)
          return (
            <Photo
              key={photo.id}
              itemId={itemId}
              itemKind={itemKind}
              photo={photo}
            />
          );
      })}
      {photos.length > 4 && (
        <Photo
          key={photos.length + 1}
          itemId={itemId}
          itemKind={itemKind}
          photo={photos[4]}
          // nextPhotoId={photos[4].id}
          label={`+${photos.length - 4}`}
        />
      )}
    </ul>
  );
};
