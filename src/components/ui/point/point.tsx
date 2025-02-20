import { FC } from "react";

import { TPointUIProps } from "./types";

import styles from "./point.module.css";
import clsx from "clsx";

export const PointUI: FC<TPointUIProps> = ({ current = false }) => {
  return (
    <li className={clsx(styles.point, current && styles.point_current)}></li>
  );
};
