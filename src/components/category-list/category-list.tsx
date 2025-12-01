import { FC } from "react";
import { CategoryListProps } from "./types";

import { CategoryListUI } from "../ui/category-list copy";
import { useGetCategories } from "../../hooks/delete/useGetCategories";
import { useLocation } from "react-router-dom";

export const CategoryList: FC<CategoryListProps> = ({ id }) => {
  const categories = useGetCategories(id);
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
  // const isPositioned =
  //   pathname === "/otkter" ||
  //   pathname === "/otkter/" ||
  //   pathname === "/otkter/projects/all";
  const isPositioned =
    pathname === "/" ||
    pathname === "/projects/all";

  return <CategoryListUI categories={categories} positioned={isPositioned} />;
};