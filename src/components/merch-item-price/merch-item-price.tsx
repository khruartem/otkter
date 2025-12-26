import { FC } from "react";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemPrice: FC = () => {
  const { price } = useMerchItemCotext();

  return <MerchItemPriceUI price={item.price} />;
};
