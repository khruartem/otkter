import { FC } from "react";
import { useLocation } from "react-router-dom";

import { CategoryUI } from "../ui/category";

import { CategoryProps } from "./types";
import { useGetCategoryColors } from "../../hooks/useGetCategoryColors";

export const Category: FC<CategoryProps> = ({
  category = undefined,
  isAttention = false,
  className,
}) => {
  const { pathname } = useLocation();
  const isWrapper = pathname === "/" || pathname === "/projects/all";
  const categoryColors = useGetCategoryColors(
    isAttention ? "attention" : category!.type
  );

  return (
    <CategoryUI
      category={category}
      isAttention={isAttention}
      wrapper={isWrapper}
      colors={categoryColors}
      className={className}
    />
  );
};