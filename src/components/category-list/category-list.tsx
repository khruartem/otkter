import { FC } from "react";
import { CategoryListProps } from "./types";

import { CategoryListUI } from "../ui/category-list";
import { useGetCategories } from "../../hooks/useGetCategories";

export const CategoryList: FC<CategoryListProps> = ({ projectId }) => {
  const categories = useGetCategories(projectId);

  return <CategoryListUI categories={categories} />;
};
