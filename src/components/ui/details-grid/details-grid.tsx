import { FC } from "react";

import { TDetailsGridUIProps } from "./types";

import styles from "./details-grid.module.css";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import clsx from "clsx";

export const DetailsGridUI: FC<TDetailsGridUIProps> = ({
  about,
  team,
  media,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["info-details"],
        !team && !media && styles["info-details_one-block"],
        (isLarge || isDesktop) && styles["info-details_large-gap"],
        isLaptop && [
          styles["info-details_middle-gap"],
          styles["info-details_m-padding"],
        ],
        (isTablet || isMobile) && [
          styles["info-details_small-gap"],
          styles["info-details_s-padding"],
          styles["info-details_columed"],
        ],
        isLarge && styles["info-details_xl-padding"],
        isDesktop && styles["info-details_l-padding"]
      )}
    >
      {about}
      {team && team}
      {media && media}
    </div>
  );
};
