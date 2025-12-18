import { FC } from "react";
import clsx from "clsx";

import { PhotoListItem } from "../../photo-list-item";
import { Photo } from "../../photo";
import { MorePhoto } from "../../more-photo";

import { TPhotoListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({ photos }) => {
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
            <PhotoListItem key={photo.id} photoId={photo.id}>
              <Photo key={photo.id} src={photo.icon} />
            </PhotoListItem>
          );
      })}
      {photos.length > 4 && (
        <PhotoListItem key={photos.length} photoId={photos[4].id}>
          <MorePhoto />
        </PhotoListItem>
      )}
    </ul>
  );
};
