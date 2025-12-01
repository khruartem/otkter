import { TItemOTKind, TPhoto } from "../../../utils/types/common";

export type TPhotoListUIProps = {
  itemId: number;
  itemKind: TItemOTKind;
  photos: TPhoto[];
};
