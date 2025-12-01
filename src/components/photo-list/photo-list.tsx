import { FC } from "react";

import { PhotoListUI } from "../ui/photo-list";

import { TPhotoListProps } from "./types";
import { useGetPhotos } from "../../hooks/delete/useGetPhotos";

// TODO: убрать компонент
export const PhotoList: FC<TPhotoListProps> = ({ id, type }) => {
  const photos = useGetPhotos(id, type);

  return <PhotoListUI id={id} photos={photos!} type={type} />;
};
