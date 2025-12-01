import { CSSProperties, FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import clsx from "clsx";

import { PointUI } from "../point";

import { TPaginatorUIProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./paginator.module.css";

export const PaginatorUI: FC<TPaginatorUIProps> = ({
  points,
  color = Colors.Light30,
  currentColor = Colors.Light20,
  className,
}) => {
  return (
    <ul
      className={clsx(styles.paginator, className)}
      style={
        { "--color": color, "--current-color": currentColor } as CSSProperties
      }
    >
      {points.map((point) => {
        return <PointUI key={nanoid()} current={point} />;
      })}
    </ul>
  );
};
