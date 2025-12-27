import { CSSProperties, FC } from "react";

import { TMerchItemColorUIProps } from "./types";

import styles from "./merch-item-color.module.css";

export const MerchItemColorUI: FC<TMerchItemColorUIProps> = ({ color }) => {
  return (
    <li
      className={styles["merch-item__color"]}
      style={{ "--color": color.hex } as CSSProperties}
    ></li>
  );
};
