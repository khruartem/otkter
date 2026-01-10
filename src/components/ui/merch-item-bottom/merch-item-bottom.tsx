import { FC } from "react";

import { MerchItemPrice } from "../../merch-item-price";
import { MerchItemTitle } from "../../merch-item-title";

import styles from "./merch-item-bottom.module.css";

export const MerchItemBottomUI: FC = () => {
  return (
    <div className={styles["merch-item__bottom"]}>
      <MerchItemTitle />
      <MerchItemPrice />
    </div>
  );
};
