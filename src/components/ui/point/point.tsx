import { FC } from "react";
import clsx from "clsx";

import { TPointUIProps } from "./types";

import styles from "./point.module.css";

export const PointUI: FC<TPointUIProps> = ({ current = false }) => {
  return (
    <li className={clsx(styles.point, current && styles.point_current)}></li>
  );
};
