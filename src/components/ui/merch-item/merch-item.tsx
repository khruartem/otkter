import { FC } from "react";
import clsx from "clsx";

import { MerchItemTopUI } from "../merch-item-top";
import { MerchItemBottomUI } from "../merch-item-bottom";

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
      <MerchItemTopUI />
      <MerchItemBottomUI />
    </div>
  );
};
