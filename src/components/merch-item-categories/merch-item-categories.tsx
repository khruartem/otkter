import { FC } from "react";
import { Colors } from "../../utils/types";
import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";
import { CategoryListUI } from "../ui/category-list copy";

export const MerchItemCategories: FC = () => {
  const item = useMerchItemCotext();

  const categoriesColors = {
    icon: Colors.Light100,
    background: Colors.Error100,
    text: Colors.Light100,
  };

  return (
    item?.categories && (
      <CategoryListUI categories={item.categories} colors={categoriesColors} />
    )
  );
};
