import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { TPhotoListProps } from "./types";
import { PhotoListUI } from "../ui/photo-list";

export const PhotoList: FC<TPhotoListProps> = ({ list, projectId }) => {
  const photosWithIds = list.map((photo) => ({ photo, id: nanoid() }));

  const photos = {
    projectId,
    photosWithIds,
  };

  return <PhotoListUI photos={photos} />;
};
