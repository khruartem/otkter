import { FC } from "react";

import { ItemTextUI } from "../item-text";

import { TMerchInfoTextUIProps } from "./types";

import styles from "./merch-info-text.module.css";

export const MerchInfoTextUI: FC<TMerchInfoTextUIProps> = ({ text }) => {
  return <ItemTextUI text={text} className={styles["item-text_info"]} />;
};
