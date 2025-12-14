import { CSSProperties, FC } from "react";

import { CategoryIconUI } from "../category-icon";

import { TCategoryUIProps } from "./types";

import styles from "./category.module.css";
import clsx from "clsx";

export const CategoryUI: FC<TCategoryUIProps> = ({
  category,
  colors,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.category,
        category?.text
          ? styles["category_with-text"]
          : styles["category_without-text"],
        className && className
      )}
      style={
        { "--categoty-background-color": colors.background } as CSSProperties
      }
    >
      <>
        {category?.icon && (
          <CategoryIconUI icon={category.icon} color={colors.icon} />
        )}
        {category?.text && (
          <label
            className={styles.category__text}
            style={{ "--categoty-text-color": colors.text } as CSSProperties}
          >
            {category.text}
          </label>
        )}
      </>
    </div>
  );
};
