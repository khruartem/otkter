import { FC } from "react";

import { MorePhotoUI } from "../ui/more-photo";

import { usePhotoListContext } from "../../hooks/usePhotoListContext";

export const MorePhoto: FC = () => {
  const { photos } = usePhotoListContext();
  const photosLength = photos.length;

  return <MorePhotoUI photosLength={photosLength} />;
};
