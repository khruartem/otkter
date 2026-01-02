import { FC } from "react";

import { PosterUI } from "../ui/poster";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoPoster: FC = () => {
  const { currentItem } = useInfoContext();

  return currentItem?.poster && <PosterUI poster={currentItem.poster} />;
};
