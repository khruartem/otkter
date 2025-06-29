import { TPhoto } from "../../features/photos/photosSlice";
import { TSectionType } from "../../utils/types";

export type TPhotoProps = {
  id: number;
  photo: TPhoto | null;
  label?: string;
  nextPhotoId?: number;
  type: TSectionType;
}