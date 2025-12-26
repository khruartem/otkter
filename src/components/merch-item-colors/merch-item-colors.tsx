import { FC } from "react";

import { MerchItemColorsUI } from "../ui/merch-item-colors";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemColors: FC = () => {
  const item = useMerchItemCotext();

  return item?.colors && <MerchItemColorsUI colors={item.colors} />;
};
