import { TPhoto } from "../../../features/photos/photosSlice";

export type TPhotoProps = {
  projectId: number;
  photo: TPhoto | null;
  label?: string;
  nextPhotoId?: number;
}