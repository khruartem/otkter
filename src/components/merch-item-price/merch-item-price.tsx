import { FC } from "react";

import { MerchItemPriceUI } from "../ui/merch-item-price";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemPrice: FC = () => {
  const { price } = useMerchItemCotext();

  return <MerchItemPriceUI value={price.value} currency={price.currency} />;
};
