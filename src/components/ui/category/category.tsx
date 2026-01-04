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
  const setCategoryStyle = (text?: string, icon?: string) => {
    if (text && icon) {
      return styles["category_icon-and-text"];
    }

    if (!text && icon) {
      return styles["category_only-icon"];
    }

    if (text && !icon) {
      return styles["category_only-text"];
    }
  };

  return (
    <div
      className={clsx(
        styles.category,
        setCategoryStyle(category?.text, category?.icon),
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
