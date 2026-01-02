import { FC } from "react";
import { useGetMerchItem } from "../../hooks/merch/useGetMerchItem";
import { InfoRenderer } from "../info-renderer";
import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";
import { MerchInfo } from "../merch-info";

export const MerchItem: FC = () => {
  const merchItem = useGetMerchItem();
  const merchItems = useGetMerchItems();

  return (
    <InfoRenderer
      items={merchItems}
      currentItem={merchItem}
      render={(items, currentItem) => (
        <MerchInfo items={items} currentItem={currentItem} />
      )}
    />
  );
};
