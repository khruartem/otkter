import { FC } from "react";
import clsx from "clsx";

import { CategoryListUIProps } from "./types";
import { Category } from "../../category";
import { nanoid } from "@reduxjs/toolkit";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./category-list.module.css";

export const CategoryListUI: FC<CategoryListUIProps> = ({
  categoryList,
  attention,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop || isLaptop;
  const smallResolution = isTablet || isMobile;
  return (
    <div
      className={clsx(
        styles["category-list"],
        largeResolution && styles["category-list_large-resolution"],
        smallResolution && styles["category-list_small-resolution"]
      )}
    >
      {attention && <Category isAttention />}
      {categoryList.map((item) => {
        return <Category key={nanoid()} category={item} />;
      })}
    </div>
  );
};
