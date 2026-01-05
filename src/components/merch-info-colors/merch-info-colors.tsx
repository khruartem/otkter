import { FC } from "react";

import { ItemBlockUI } from "../ui/item-block";
import { ItemColorsUI } from "../ui/item-colors";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoColors: FC = () => {
  const { currentItem } = useInfoMerchContext();
  const title = "Цвета";

  return (
    currentItem?.colors && (
      <ItemBlockUI title={title}>
        <ItemColorsUI colors={currentItem.colors} />
      </ItemBlockUI>
    )
  );
};
