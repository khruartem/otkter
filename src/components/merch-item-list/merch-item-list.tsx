import { FC } from "react";

import { MerchItemListUI } from "../ui/merch-item-list";

import { TMerchItemListProps } from "./types";

import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";

export const MerchItemList: FC<TMerchItemListProps> = () => {
  const merchItems = useGetMerchItems("all");

  return <MerchItemListUI merchItems={merchItems} />;
};
