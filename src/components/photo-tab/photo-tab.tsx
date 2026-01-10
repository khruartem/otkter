import { FC } from "react";

import { PhotoTabUI } from "../ui/photo-tab";

import { TPhotoTabProps } from "./types";
import { isItemOT } from "../../utils/guards/is-item-ot";

export const PhotoTab: FC<TPhotoTabProps> = ({
  tab,
  current,
  iconRef,
  onClick,
}) => {
  return (
    <PhotoTabUI
      image={isItemOT(tab) ? tab.icon : ""}
      current={current}
      onClick={onClick}
      ref={iconRef}
    />
  );
};
