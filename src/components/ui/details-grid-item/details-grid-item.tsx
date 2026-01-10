import { FC } from "react";
import clsx from "clsx";

import { TDetailsGridItemUIProps } from "./types";

import styles from "./details-grid-item.module.css";

export const DetailsGridItemUI: FC<TDetailsGridItemUIProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(styles["details-grid-item"], className && className)}>
      {children}
    </div>
  );
};
