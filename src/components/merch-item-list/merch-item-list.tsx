import { FC } from "react";

import { MerchItemListUI } from "../ui/merch-item-list";

import { TMerchItemListProps } from "./types";

import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";

export const MerchItemList: FC<TMerchItemListProps> = ({ type }) => {
  const merchItems = useGetMerchItems(type);

  return <MerchItemListUI merchItems={merchItems} />;
};
