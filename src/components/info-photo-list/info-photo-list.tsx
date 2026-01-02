import { FC } from "react";

import { PhotoList } from "../photo-list";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoPhotoList: FC = () => {
  const { currentItem } = useInfoContext();

  return (
    currentItem?.photos && (
      <PhotoList itemKind={currentItem.kind} photos={currentItem.photos} />
    )
  );
};
