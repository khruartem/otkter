import { FC } from "react";

import { Card } from "../../card";
import { CardListUIProps } from "./types";

import styles from "./card-list.module.css";
import { useLargeScreenMediaQuery } from "../../../hooks/useLargeScreenMediaQuery";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

export const CardListUI: FC<CardListUIProps> = ({ cards }) => {
  const isLarge = useLargeScreenMediaQuery();
  
  return (
    <ul className={clsx(
      styles["card-list"],
      isLarge && styles["card-list_large-screen"]
    )}>
      {cards.map((card) => {
        return <Card key={nanoid()} card={card!} />;
      })}
    </ul>
  );
};
