import { FC } from "react";

import { MerchItemListUI } from "../ui/merch-item-list";

import { TMerchItemListProps } from "./types";

import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";
import { TMerchType } from "../../utils/types/merch";
import { GroupListUI } from "../ui/group-list";

export const MerchItemList: FC<TMerchItemListProps> = ({
  type,
  merchItemListRef,
  merchItemListViewRef,
}) => {
  const merchItems = useGetMerchItems(type as TMerchType);

  return (
    <GroupListUI ref={merchItemListRef}>
      <MerchItemListUI merchItems={merchItems} ref={merchItemListViewRef} />
    </GroupListUI>
  );
};
