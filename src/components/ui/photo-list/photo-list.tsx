import { FC } from "react";
import clsx from "clsx";

import { PhotoUI } from "../photo/photo";

import { TPhotoListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({
  projectId,
  photos
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
          return <PhotoUI key={photo.id} photo={photo} projectId={projectId} />;
      })}
      {photos.length > 4 && (
        <PhotoUI
          key={photos.length + 1}
          photo={null}
          label={`+${photos.length - 4}`}
          projectId={projectId}
          nextPhotoId={photos[4].id}
        />
      )}
    </ul>
  );
};
