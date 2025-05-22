import { FC } from "react";
import { TPhotoProps } from "./types";
import { useGetUrlCode } from "../../hooks/useGetUrlCode";
import { PhotoUI } from "../ui/photo";

export const Photo: FC<TPhotoProps> = ({
  photo,
  label,
  nextPhotoId,
  id,
  type,
}) => {
  const url = useGetUrlCode();

  return (
    <PhotoUI
      id={id}
      photo={photo}
      type={type}
      label={label}
      nextPhotoId={nextPhotoId}
      url={url}
    />
  );
};
