import { FC } from "react";

import { ItemPosterUI } from "../ui/item-poster";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoPoster: FC = () => {
  const { currentItem } = useInfoContext();

  return currentItem?.poster && <ItemPosterUI poster={currentItem.poster} />;
};
