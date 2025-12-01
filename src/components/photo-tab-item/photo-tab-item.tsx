import { FC } from "react";

import { PhotoTabItemUI } from "../ui/photo-tab-item";

import { TPhotoTabItemProps } from "./types";

export const PhotoTabItem: FC<TPhotoTabItemProps> = ({
  tab,
  current,
  iconRef,
  onClick,
}) => {
  return (
    <PhotoTabItemUI
      image={tab.icon}
      current={current}
      onClick={onClick}
      ref={iconRef}
    />
  );
};
