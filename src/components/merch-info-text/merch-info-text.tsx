import { FC } from "react";

import { ItemTextUI } from "../ui/item-text";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoText: FC = () => {
  const { currentItem } = useInfoMerchContext();

  return <ItemTextUI text={currentItem.shortText} />;
};
