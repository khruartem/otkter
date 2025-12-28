import { FC } from "react";

import { MerchItemCategories } from "../../merch-item-categories";
import { MerchItemColors } from "../../merch-item-colors";
import { MerchItemImage } from "../../merch-item-image";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./merch-item-top.module.css";
import clsx from "clsx";

export const MerchItemTopUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["merch-item__top"],
        isLarge && styles["merch-item__top_large"],
        isDesktop && styles["merch-item__top_desktop"],
        isLaptop && styles["merch-item__top_laptop"],
        isTablet && styles["merch-item__top_tablet"],
        isMobile && styles["merch-item__top_mobile"]
      )}
    >
      <MerchItemCategories />
      <MerchItemColors />
      <MerchItemImage />
    </div>
  );
};
