import { FC } from "react";

import { TPhotoProps } from "./types";
import { PhotoUI } from "../ui/photo";

export const Photo: FC<TPhotoProps> = ({ photo, projectId, photoId }) => {
  const photoFormatted = {
    source: photo,
    id: photoId,
    projectId
  }
  
  return <PhotoUI photo={photoFormatted} />
}