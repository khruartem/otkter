import { FC } from "react";
import { TPhotoProps } from "./types";
import { useGetCode } from "../../hooks/useGetCode";
import { PhotoUI } from "../ui/photo";

export const Photo: FC<TPhotoProps> = ({
  itemId,
  itemKind,
  photo,
  label,
  // nextPhotoId,
}) => {
  const code = useGetCode();
  const url =
    itemKind === "team"
      ? `/${itemKind}/admins/${code}/${photo?.id}`
      : `/${itemKind}/${code}/${photo?.id}`;

  return (
    <PhotoUI
      itemId={itemId}
      itemKind={itemKind}
      photo={photo}
      label={label}
      url={url}
      // nextPhotoId={nextPhotoId}
    />
  );
};
