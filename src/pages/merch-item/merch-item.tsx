import { FC } from "react";
import { useGetMerchItem } from "../../hooks/merch/useGetMerchItem";
import { InfoRenderer } from "../info-renderer";
import { InfoMerch } from "../info-merch";
import { TMerch } from "../../utils/types/merch";

export const MerchItem: FC = () => {
  const merchItem = useGetMerchItem();

  return (
    <InfoRenderer
      currentItem={merchItem}
      render={(currentItem) => (
        <InfoMerch currentItem={currentItem as TMerch} />
      )}
    />
  );
};
