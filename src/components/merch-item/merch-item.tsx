import { FC } from "react";

import { MerchItemProvider } from "./merch-item-provider";
import { MerchItemUI } from "../ui/merch-item";

import { TMerchItemProps } from "./types";

export const MerchItem: FC<TMerchItemProps> = ({ item }) => {
  const url = `/merch/${item.type}/${item.url}/`;

  return (
    <MerchItemProvider value={item}>
      <MerchItemUI url={url} />
    </MerchItemProvider>
  );
};
