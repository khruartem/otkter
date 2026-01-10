import { CSSProperties, forwardRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import clsx from "clsx";

import { Point } from "../../point";

import { TPaginatorUIProps } from "./types";
import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./paginator.module.css";

export const PaginatorUI = forwardRef<HTMLUListElement, TPaginatorUIProps>(
  (
    {
      points,
      color = Colors.Light30,
      currentColor = Colors.Light20,
      className,
    },
    ref
  ) => {
    const { isMobile } = useGetMediaQuery();

    return (
      <ul
        className={clsx(
          styles.paginator,
          isMobile && styles.paginator_widthed,
          className
        )}
        style={
          { "--color": color, "--current-color": currentColor } as CSSProperties
        }
        ref={ref}
      >
        {points.map((point) => {
          return <Point key={nanoid()} current={point} />;
        })}
      </ul>
    );
  }
);
