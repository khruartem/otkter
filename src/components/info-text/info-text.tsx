import { FC } from "react";

import { ItemTextUI } from "../ui/item-text";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoText: FC = () => {
  const { currentItem } = useInfoContext();

  return currentItem?.text ? (
    <ItemTextUI text={currentItem.text} />
  ) : (
    <ItemTextUI text={currentItem.shortText} />
  );
};
