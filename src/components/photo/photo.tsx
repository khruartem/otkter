import { FC } from "react";
import { TPhotoProps } from "./types";
import { useGetUrlCode } from "../../hooks/useGetUrlCode";
import { PhotoUI } from "../ui/photo";

export const Photo: FC<TPhotoProps> = ({
  itemId,
  itemKind,
  photo,
  label,
  // nextPhotoId,
}) => {
  const code = useGetUrlCode();
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
