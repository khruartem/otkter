import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { PointUI } from "../point";

import { TPaginatorUIProps } from "./types";

import styles from "./paginator.module.css";

export const PaginatorUI: FC<TPaginatorUIProps> = ({ points }) => {
  return (
    <ul
      className={styles.paginator}
    >
      {points.map((point) => {
        return point ? (
          <PointUI key={nanoid()} current />
        ) : (
          <PointUI key={nanoid()} />
        );
      })}
    </ul>
  );
};
