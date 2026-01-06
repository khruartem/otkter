import { ReactNode } from "react";
import { TItemOTKind } from "../../utils/types/item-ot";
import { TPhoto } from "../../utils/types/photo";

export type TPhotoListProps = {
  itemKind: TItemOTKind;
  photos: TPhoto[];
};

export type TPhotoListContextValue = {
  itemKind: TItemOTKind;
  photos: TPhoto[];
};

export type TPhotoListProvider = {
  value: TPhotoListContextValue;
  children: ReactNode;
};
