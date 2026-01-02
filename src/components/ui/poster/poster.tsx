import { FC } from "react";
import clsx from "clsx";

import { ImageUI } from "../../image";

import { TPosterUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./poster.module.css";

export const PosterUI: FC<TPosterUIProps> = ({ poster, className }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <ImageUI
      src={poster}
      alt="Постер"
      width={clsx(
        isLarge && "27.08vw",
        isDesktop && "34.11vw",
        isLaptop && "37.11vw",
        (isTablet || isMobile) && "100%"
      )}
      height={clsx(
        isLarge && "34.38vw",
        isDesktop && "43.34vw",
        isLaptop && "347.07vw",
        isTablet && "116.93vw",
        isMobile && "117.15vw"
      )}
      className={clsx(
        styles["poster"],
        isLarge && styles["poster_large"],
        isDesktop && styles["poster_desktop"],
        isLaptop && styles["poster_laptop"],
        isTablet && styles["poster_tablet"],
        isMobile && styles["poster_mobile"],
        (isTablet || isMobile) && styles["poster_margined"],
        className && className
      )}
    />
  );
};
