import { TPhoto } from "../../../features/photos/photosSlice";
import { TSectionType } from "../../../utils/types";

export type TPhotoListUIProps = {
  id: number;
  type: TSectionType;
  photos: TPhoto[];
};
