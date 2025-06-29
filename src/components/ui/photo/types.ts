import { TPhoto } from "../../../features/photos/photosSlice";
import { TSectionType } from "../../../utils/types";

export type TPhotoUIProps = {
  id: number;
  url: string;
  photo: TPhoto | null;
  label?: string;
  nextPhotoId?: number;
  type: TSectionType;
}