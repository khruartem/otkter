import { FC } from "react";

import { PhotoListUI } from "../ui/photo-list";

import { TPhotoListProps } from "./types";
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const PhotoList: FC<TPhotoListProps> = ({ id, type }) => {
  const photos = useGetPhotos(id, type);

  return <PhotoListUI id={id} photos={photos!} type={type} />;
};
