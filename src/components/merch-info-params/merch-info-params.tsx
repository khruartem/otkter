import { FC } from "react";

import { ItemBlockUI } from "../ui/item-block";
import { ItemParamsUI } from "../ui/item-params";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoParams: FC = () => {
  const { currentItem } = useInfoMerchContext();
  const params = currentItem.params;

  return (
    <ItemBlockUI title={params.name}>
      <ItemParamsUI params={params.values} />
    </ItemBlockUI>
  );
};
