import { FC } from "react";

import { ItemPriceUI } from "../ui/item-price";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoPrice: FC = () => {
  const { currentItem } = useInfoMerchContext();
  const price = currentItem.price;

  return <ItemPriceUI value={price.value} currency={price.currency} />;
};
