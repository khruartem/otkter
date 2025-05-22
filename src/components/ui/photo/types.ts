import { TPhoto } from "../../../features/photos/photosSlice";
import { TCardType } from "../../../utils/types";

export type TPhotoUIProps = {
  id: number;
  url: string;
  photo: TPhoto | null;
  label?: string;
  nextPhotoId?: number;
  type: Extract<TCardType, "projects" | "services">;
}