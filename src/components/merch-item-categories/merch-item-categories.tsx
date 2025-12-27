import { FC } from "react";

import { MerchItemCategoriesUI } from "../ui/merch-item-categories";

import { Colors } from "../../utils/types";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemCategories: FC = () => {
  const item = useMerchItemCotext();

  const colors = {
    icon: Colors.Light100,
    background: Colors.Error100,
    text: Colors.Light100,
  };

  return (
    item?.categories && (
      <MerchItemCategoriesUI categories={item.categories} colors={colors} />
    )
  );
};
