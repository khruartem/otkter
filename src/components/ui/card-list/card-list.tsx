import { FC } from "react";
import clsx from "clsx";

import { Card } from "../../card";
import { CardListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./card-list.module.css";
import { nanoid } from "@reduxjs/toolkit";

export const CardListUI: FC<CardListUIProps> = ({ cards }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const mediumResolution = isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <ul
      className={clsx(
        styles["card-list"],
        largeResolution && styles["card-list_large-resolution"],
        mediumResolution && styles["card-list_medium-resolution"],
        smallResolution && styles["card-list_small-resolution"]
      )}
    >
      {cards?.map((card) => {
        return <Card key={nanoid()} card={card} />;
      })}
    </ul>
  );
};
