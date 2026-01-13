import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { MerchItemTopUI } from "../merch-item-top";
import { MerchItemCategories } from "../../merch-item-categories";
import { MerchItemColors } from "../../merch-item-colors";
import { MerchItemImage } from "../../merch-item-image";
import { MerchItemBottomUI } from "../merch-item-bottom";

import { TMerchItemUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./merch-item.module.css";

export const MerchItemUI: FC<TMerchItemUIProps> = ({ url }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <li
      className={clsx(
        styles["merch-item"],
        isLarge && styles["merch-item_large"],
        isDesktop && styles["merch-item_desktop"],
        isLaptop && styles["merch-item_laptop"],
        isTablet && styles["merch-item_tablet"],
        isMobile && styles["merch-item_mobile"]
      )}
    >
      <Link className={styles["merch-item__link"]} to={url}>
        <MerchItemTopUI>
          <MerchItemCategories />
          <MerchItemColors />
          <MerchItemImage />
        </MerchItemTopUI>
        <MerchItemBottomUI />
      </Link>
    </li>
  );
};
