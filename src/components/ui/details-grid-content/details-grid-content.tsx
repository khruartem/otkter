import { FC } from "react";

import { CategoryListUI } from "../category-list";

import { TDetailsGridContentUIProps } from "./types";
import { TCategoryListUIProps } from "../category-list/types";

import styles from "./details-grid-content.module.css";
import clsx from "clsx";

export const DetailsGridContentUI: FC<TDetailsGridContentUIProps> = ({
  categoriesProps,
  className,
  children,
}) => {
  const renderCategoryList = (props: TCategoryListUIProps) => {
    return (
      <CategoryListUI
        {...{
          ...props,
          className: categoriesProps?.className
            ? categoriesProps.className
            : styles["category-list_details-default"],
        }}
      />
    );
  };

  return (
    <>
      {renderCategoryList(categoriesProps)}
      <ul
        className={clsx(
          styles["details-grid-item__content"],
          className && className
        )}
      >
        {children}
      </ul>
    </>
  );
};
