import { FC } from "react";
import clsx from "clsx";

import { MerchItemCategories } from "../../merch-item-categories";
import { MerchItemColors } from "../../merch-item-colors";
import { MerchItemImage } from "../../merch-item-image";
import { MerchItemTitle } from "../../merch-item-title";
import { MerchItemPrice } from "../../merch-item-price";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./merch-item.module.css";

export const MerchItemUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["merch-item"],
        isLarge && styles["merch-item_large"],
        isDesktop && styles["merch-item_desktop"],
        isLaptop && styles["merch-item_laptop"],
        isTablet && styles["merch-item_tablet"],
        isMobile && styles["merch-item_mobile"]
      )}
    >
      <div className={styles["merch-item__top"]}>
        <MerchItemCategories />
        <MerchItemColors />
        <MerchItemImage />
      </div>
      <div className={styles["merch-item__bottom"]}>
        <MerchItemTitle />
        <MerchItemPrice />
      </div>
    </div>
  );
};
