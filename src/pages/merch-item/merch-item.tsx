import { FC } from "react";
import { useGetMerchItem } from "../../hooks/merch/useGetMerchItem";
import { InfoRenderer } from "../info-renderer";
import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";
import { MerchInfo } from "../merch-info";

export const MerchItem: FC = () => {
  const merchItem = useGetMerchItem();

  return (
    <InfoRenderer
      currentItem={merchItem}
      render={(currentItem) => <MerchInfo currentItem={currentItem} />}
    />
  );
};
