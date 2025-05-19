import { FC } from "react";
import clsx from "clsx";

import { Photo } from "../../photo";

import { TPhotoListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({
  id,
  photos,
  type
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
        smallResolution && styles["photo-list_small-resolution"]
      )}
    >
      {photos.map((photo, index) => {
        if (index < 4)
          return <Photo key={photo.id} photo={photo} id={id} type={type} />;
      })}
      {photos.length > 4 && (
        <Photo
          key={photos.length + 1}
          photo={null}
          label={`+${photos.length - 4}`}
          id={id}
          nextPhotoId={photos[4].id}
          type={type}
        />
      )}
    </ul>
  );
};
