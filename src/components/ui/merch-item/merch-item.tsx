import { FC } from "react";

import { MerchItemCategories } from "../../merch-item-categories";
import { MerchItemColors } from "../../merch-item-colors";
import { MerchItemImage } from "../../merch-item-image";
import { MerchItemTitle } from "../../merch-item-title";
import { MerchItemPrice } from "../../merch-item-price";

import styles from "./merch-item.module.css";

export const MerchItemUI: FC = () => {
  return (
    <div className={styles["merch-item"]}>
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
