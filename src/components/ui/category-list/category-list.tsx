import { FC } from "react";
import { CategoryListUIProps } from "./types";
import { Category } from "../../category";

import styles from "./category-list.module.css";
import { nanoid } from "@reduxjs/toolkit";

export const CategoryListUI: FC<CategoryListUIProps> = ({
  categoryList,
  attention,
}) => {
  return (
    <div className={styles["category-list"]}>
      {attention && <Category isAttention />}
      {categoryList.map((item) => {
        return <Category key={nanoid()} category={item} />;
      })}
    </div>
  );
};
