import { FC } from "react";

import { ItemTitleUI } from "../ui/item-title";

import { Colors } from "../../utils/types";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoTitle: FC = () => {
  const { currentItem } = useInfoContext();
  const itemColor =
    currentItem.kind === "projects"
      ? currentItem.categories?.attention
        ? Colors.Orange100
        : Colors.Navy
      : Colors.Navy;

  return (
    <ItemTitleUI
      title={currentItem.title}
      extraTitle={currentItem?.extraText}
      color={itemColor}
    />
  );
};
