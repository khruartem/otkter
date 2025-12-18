import { FC } from "react";

import { PhotoListItemUI } from "../ui/photo-list-item";

import { TPhotoListItemProps } from "./types";

import { TItemOTUrl } from "../../utils/types/common";

import { useGetCode } from "../../hooks/useGetCode";
import { usePhotoListContext } from "../../hooks/usePhotoListContext";

export const PhotoListItem: FC<TPhotoListItemProps> = ({
  photoId,
  children,
}) => {
  const { itemKind } = usePhotoListContext();

  const code = useGetCode() as TItemOTUrl;

  const itemUrl =
    itemKind === "team"
      ? `/${itemKind}/admins/${code}/`
      : `/${itemKind}/${code}/`;

  const photoUrl = itemUrl + `${photoId}`;

  return (
    <PhotoListItemUI itemUrl={itemUrl} photoUrl={photoUrl}>
      {children}
    </PhotoListItemUI>
  );
};
