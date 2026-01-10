import { FC } from "react";

import { MerchItemTitleUI } from "../ui/merch-item-title";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemTitle: FC = () => {
  const { title } = useMerchItemCotext();

  return <MerchItemTitleUI title={title} />;
};
