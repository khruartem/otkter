import { FC } from "react";
import { CategoryProps } from "./types";

import { CategoryUI } from "../ui/category";
import { useLocation } from "react-router-dom";
import { useGetCategoryColors } from "../../hooks/useGetCategoryColors";

export const Category: FC<CategoryProps> = ({
  category = undefined,
  isAttention = false,
}) => {
  const location = useLocation();
  const isWrapper = location.pathname === "/otkter";
  const categoryColors = useGetCategoryColors(
    isAttention ? "attention" : category!.type 
  );

  return (
    <CategoryUI
      category={category}
      isAttention={isAttention}
      wrapper={isWrapper}
      colors={categoryColors}
    />
  );
};
