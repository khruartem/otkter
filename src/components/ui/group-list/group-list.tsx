import React from "react";
import clsx from "clsx";

import { TGroupListUIProps } from "./types";

import styles from "./group-list.module.css";

export const GroupListUI = React.forwardRef<HTMLDivElement, TGroupListUIProps>(
  ({ children, fade, className }, ref) => {
    return (
      <div
        className={clsx(
          styles["group-list"],
          fade && styles["group-list_faded"],
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
