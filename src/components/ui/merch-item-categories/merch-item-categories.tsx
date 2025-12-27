import { FC } from "react";
import { TMerchItemCategoriesUIProps } from "./types";
import { CategoryListUI } from "../category-list copy";
import styles from "./merch-item-categories.module.css";

export const MerchItemCategoriesUI: FC<TMerchItemCategoriesUIProps> = ({
  categories,
  colors,
}) => {
  return (
    <CategoryListUI
      categories={categories}
      colors={colors}
      className={styles["category-list_merch"]}
    />
  );
};
