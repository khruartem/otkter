import { FC } from "react";
import clsx from "clsx";

import { CategoryUI } from "../category";

import styles from "./vpn-checker.module.css";
import { TVpnCheckerUIProps } from "./types";

export const VpnCheckerUI: FC<TVpnCheckerUIProps> = ({ alert, active }) => {
  return (
    <CategoryUI
      category={alert.category}
      className={clsx(
        styles["vpn-checker"],
        active && styles["vpn-checker_active"],
      )}
      colors={alert.colors}
    />
  );
};
