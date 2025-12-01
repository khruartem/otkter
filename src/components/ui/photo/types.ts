import { TItemOTKind, TPhoto } from "../../../utils/types/common";

export type TPhotoUIProps = {
  itemId: number;
  itemKind: TItemOTKind;
  photo: TPhoto;
  label?: string;
  url: string;
  // nextPhotoId?: number;
};
