import { FC } from "react";
import { CategoryListProps } from "./types";

import { CategoryListUI } from "../ui/category-list";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useLocation } from "react-router-dom";

export const CategoryList: FC<CategoryListProps> = ({ projectId }) => {
  const categories = useGetCategories(projectId);
  // const { attention, categoryList } = categories;
  // const formattedCategoryList = categoryList.filter(category => {
  //   switch (type) {
  //     case "main": return category.type === "main" || category.type === "attention"
  //     case "extra": return category.type === "extra";
  //   }
  // })
  // const formattedCategories = {
  //   attention,
  //   categoryList: formattedCategoryList,
  // }

  const { pathname } = useLocation();
  const isPositioned = pathname === "/otkter";

  return (
    <CategoryListUI
      categories={categories}
      positioned={isPositioned}
    />
  );
};
