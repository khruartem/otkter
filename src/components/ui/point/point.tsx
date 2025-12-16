import { FC } from "react";
import clsx from "clsx";

import { TPointUIProps } from "./types";

import styles from "./point.module.css";

export const PointUI: FC<TPointUIProps> = ({ current }) => {
  return (
    <li>
      <div className={clsx(styles.point, current && styles.point_current)}>
        {current}
      </div>
    </li>
  );
};
