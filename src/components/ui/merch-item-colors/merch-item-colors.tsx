import { FC } from "react";

import { MerchItemColorUI } from "../merch-item-color/merch-item-color";

import { TMerchItemColorsUIProps } from "./types";

import styles from "./merch-item-colors.module.css";

export const MerchItemColorsUI: FC<TMerchItemColorsUIProps> = ({ colors }) => {
  return (
    <ul className={styles["merch-item__colors-list"]}>
      {colors.map((color) => (
        <MerchItemColorUI color={color} />
      ))}
    </ul>
  );
};
