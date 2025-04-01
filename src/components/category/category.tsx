import { FC } from "react";
import { CategoryProps } from "./types";

import { CategoryUI } from "../ui/category";
import { useLocation } from "react-router-dom";
import { useGetCategoryColors } from "../../hooks/useGetCategoryColors";

export const Category: FC<CategoryProps> = ({
  category = undefined,
  isAttention = false,
}) => {
  const { pathname } = useLocation();
  //const isWrapper = pathname === "/otkter" || pathname === "/otkter/" || pathname === "/otkter/projects/all";
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
    />
  );
};
