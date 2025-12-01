import { TItemOTKind, TPhoto } from "../../utils/types/common";

export type TPhotoProps = {
  itemId: number;
  // photo: TPhoto | null;
  photo: TPhoto;
  label?: string;
  // nextPhotoId?: number;
  itemKind: TItemOTKind;
};
