import { FC } from "react";

import { PhotoUI } from "../ui/photo";

import { TPhotoProps } from "./types";

import { TItemOTKind } from "../../utils/types/common";

import { usePhotoListContext } from "../../hooks/usePhotoListContext";

export const Photo: FC<TPhotoProps> = ({ src }) => {
  const { itemKind } = usePhotoListContext();

  const setAlt = (itemKind: TItemOTKind) => {
    switch (itemKind) {
      case "projects":
        return "проекта";
      case "services":
        return "услуги";
      case "team":
        return "члена команды";
    }
  };

  return <PhotoUI src={src} alt={`Фото ${setAlt(itemKind)}`} />;
};
