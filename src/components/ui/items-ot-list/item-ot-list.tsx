import React from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { TItemOTListUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./item-ot-list.module.css";

export const ItemOTListUI = React.forwardRef<
  HTMLUListElement,
  TItemOTListUIProps
>(({ itemsOT, renderItemOT, className, style }, ref) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const mediumResolution = isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <ul
      className={clsx(
        styles["item-ot-list"],
        largeResolution && styles["item-ot-list_large-gap"],
        mediumResolution && styles["item-ot-list_medium-gap"],
        smallResolution && styles["item-ot-list_small-gap"],
        className && className
      )}
      ref={ref}
      style={style}
    >
      {itemsOT.map((itemOT) => {
        return renderItemOT(itemOT, nanoid());
      })}
    </ul>
  );
});
