import { FC } from "react";

import { MerchItemProvider } from "./merch-item-provider";
import { MerchItemUI } from "../ui/merch-item";

import { TMerchItemProps } from "./types";

export const MerchItem: FC<TMerchItemProps> = ({ item }) => {
  return (
    <MerchItemProvider value={item}>
      <MerchItemUI />
    </MerchItemProvider>
  );
};
