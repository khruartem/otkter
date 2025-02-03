import { FC } from "react";
import clsx from "clsx";

import { PhotoUI } from "../photo/photo";

import { TPhotoListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { useGetProjectId } from "../../../hooks/useGetProjectId";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({ photos }) => {
  const projectId = useGetProjectId();
  
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
      {photos.map(photo => {
        return (
          <PhotoUI key={photo.id} photo={photo} projectId={projectId} />
        );
      })}
    </ul>
  );
};
