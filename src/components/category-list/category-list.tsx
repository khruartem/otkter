import { FC } from "react";
import { CategoryListProps } from "./types";

import { CategoryListUI } from "../ui/category-list";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useLocation } from "react-router-dom";

export const CategoryList: FC<CategoryListProps> = ({ projectId }) => {
  const categories = useGetCategories(projectId);
  const { pathname } = useLocation();

  return (
    <CategoryListUI
      categories={categories}
      projectId={projectId}
      positioned={pathname === "/otkter" ? true : false}
    />
  );
};
