import { FC } from "react";

import { MerchInfoTextUI } from "../ui/merch-info-text";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoText: FC = () => {
  const { currentItem } = useInfoMerchContext();

  return <MerchInfoTextUI text={currentItem.shortText} />;
};
