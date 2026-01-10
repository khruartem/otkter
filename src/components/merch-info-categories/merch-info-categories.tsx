import { FC } from "react";

import { MerchItemCategoriesUI } from "../ui/merch-item-categories";

import { Colors } from "../../utils/types";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoCategories: FC = () => {
  const { currentItem } = useInfoMerchContext();

  const colors = {
    icon: Colors.Light100,
    background: Colors.Error100,
    text: Colors.Light100,
  };

  return (
    currentItem?.categories && (
      <MerchItemCategoriesUI
        categories={currentItem.categories}
        colors={colors}
      />
    )
  );
};
