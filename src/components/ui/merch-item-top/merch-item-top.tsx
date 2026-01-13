import { FC } from "react";
import clsx from "clsx";

import { TMerchItemTopUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./merch-item-top.module.css";

export const MerchItemTopUI: FC<TMerchItemTopUIProps> = ({
  children,
  className,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      id="background"
      className={clsx(
        styles["merch-item__top"],
        isLarge && styles["merch-item__top_large"],
        isDesktop && styles["merch-item__top_desktop"],
        isLaptop && styles["merch-item__top_laptop"],
        isTablet && styles["merch-item__top_tablet"],
        isMobile && styles["merch-item__top_mobile"],
        className && className
      )}
    >
      {children}
    </div>
  );
};
