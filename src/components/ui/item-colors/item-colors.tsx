import { CSSProperties, FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { TItemColorsUIProps } from "./types";

import styles from "./item-colors.module.css";

export const ItemColorsUI: FC<TItemColorsUIProps> = ({ colors }) => {
  return (
    <ul className={styles["color-list"]}>
      {colors.map((color) => (
        <li
          key={nanoid()}
          className={styles["color-list-item"]}
          style={{ "--color": color.hex } as CSSProperties}
        >
          {color.name}
        </li>
      ))}
    </ul>
  );
};
