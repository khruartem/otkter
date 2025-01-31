import { FC } from "react";
import clsx from "clsx";

import { TPhotoListUIProps } from "./types";
import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
import { Photo } from "../../photo";

import styles from "./photo-list.module.css";

export const PhotoListUI: FC<TPhotoListUIProps> = ({ photos }) => {
  const { photosWithIds, projectId } = photos;

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useMediaQueryCustom();

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
      {photosWithIds.map(({ id, photo }) => {
        return (
          <Photo key={id} photoId={id} photo={photo} projectId={projectId} />
        );
      })}
    </ul>
  );
};
