import { ReactNode } from "react";
import { TItemOTKind, TPhoto } from "../../utils/types/common";

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
