import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { TItemParamsUIProps } from "./types";

import styles from "./item-params.module.css";

export const ItemParamsUI: FC<TItemParamsUIProps> = ({ params }) => {
  return (
    <ul className={styles["param-list"]}>
      {params.map((param) => (
        <li key={nanoid()} className={styles["param-list-item"]}>
          {param}
        </li>
      ))}
    </ul>
  );
};
