import { useParams } from "react-router-dom";

export const useGetPhotoId = () => {
  const { photoId } = useParams<{ photoId: string }>();

  return Number(photoId);
}