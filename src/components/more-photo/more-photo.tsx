import { FC } from "react";

import { MorePhotoUI } from "../ui/more-photo";

import { usePhotoListContext } from "../../hooks/contexts/usePhotoListContext";

export const MorePhoto: FC = () => {
  const { photos } = usePhotoListContext();
  const photosLength = photos.length;

  return <MorePhotoUI photosLength={photosLength} />;
};
