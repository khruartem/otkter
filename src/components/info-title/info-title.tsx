import { FC } from "react";

import { ItemTitleUI } from "../ui/item-title";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoTitle: FC = () => {
  const { currentItem, itemColor } = useInfoContext();

  return (
    <ItemTitleUI
      title={currentItem.title}
      extraTitle={currentItem?.extraText}
      color={itemColor}
    />
  );
};
