import { FC } from "react";

import { ItemTitleUI } from "../ui/item-title";

import { Colors } from "../../utils/types";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoTitle: FC = () => {
  const { currentItem } = useInfoMerchContext();
  const titleColor = Colors.Navy;

  return <ItemTitleUI title={currentItem.title} color={titleColor} />;
};
