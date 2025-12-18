import { FC } from "react";

import { PhotoListProvider } from "./photo-list-provider";
import { PhotoListUI } from "../ui/photo-list copy";

import { TPhotoListProps } from "./types";

export const PhotoList: FC<TPhotoListProps> = ({ itemKind, photos }) => {
  const photoListContextValue = {
    itemKind,
    photos,
  };

  return (
    <PhotoListProvider value={photoListContextValue}>
      <PhotoListUI photos={photos} />
    </PhotoListProvider>
  );
};
