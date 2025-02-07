import { FC } from "react";
import { CategoryProps } from "./types";

import { CategoryUI } from "../ui/category";
import { useLocation } from "react-router-dom";
import { useGetCategoryColors } from "../../hooks/useGetCategoryColors";

export const Category: FC<CategoryProps> = ({
  category = undefined,
  isAttention = false,
  projectId
}) => {
  const location = useLocation();
  const categoryColors = useGetCategoryColors(projectId);

  return (
    <CategoryUI
      category={category}
      isAttention={isAttention}
      wrapper={location.pathname === "/otkter" ? true : false}
      colors={categoryColors}
    />
  );
};
