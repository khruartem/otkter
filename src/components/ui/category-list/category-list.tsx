import { FC } from "react";
import clsx from "clsx";

import { CategoryUI } from "../category";

import { TCategoryListUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./category-list.module.css";

export const CategoryListUI: FC<TCategoryListUIProps> = ({
  categories,
  colors,
  className,
}) => {
  const { categoryList } = categories;

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop || isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <div
      className={clsx(
        styles["category-list"],
        largeResolution && styles["category-list_large-resolution"],
        smallResolution && styles["category-list_small-resolution"],
        className && className
      )}
    >
      {categoryList.map((category, index) => {
        return <CategoryUI key={index} category={category} colors={colors} />;
      })}
    </div>
  );
};
