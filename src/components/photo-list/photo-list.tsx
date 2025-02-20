import { FC } from "react";

import { PhotoListUI } from "../ui/photo-list";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { useGetProjectId } from "../../hooks/useGetProjectId";

export const PhotoList: FC = () => {
  const projectId = useGetProjectId();
  const photos = useGetPhotos(projectId);

  return <PhotoListUI projectId={projectId} photos={photos} />;
};
