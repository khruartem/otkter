import { TPhoto } from "../../../features/photos/photosSlice";
import { TCardType } from "../../../utils/types";

export type TPhotoListUIProps = {
  id: number;
  type: Extract<TCardType, "projects" | "services">;
  photos: TPhoto[];
};
