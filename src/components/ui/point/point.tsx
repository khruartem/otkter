import { forwardRef } from "react";
import clsx from "clsx";

import { TPointUIProps } from "./types";

import styles from "./point.module.css";

export const PointUI = forwardRef<HTMLLIElement, TPointUIProps>(
  ({ current = false }, ref) => {
    return (
      <li
        className={clsx(styles.point, current && styles.point_current)}
        ref={ref}
      ></li>
    );
  }
);
