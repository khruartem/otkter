import { FC } from "react";

import { DetailsMediaUI } from "../ui/details-media";

import { TDetailsMediaProps } from "./types";

import { Colors } from "../../utils/types";
import { TItemOTKind } from "../../utils/types/item-ot";

export const DetailsMedia: FC<TDetailsMediaProps> = ({ details, kind }) => {
  const setCategoryText = (kind: TItemOTKind) => {
    switch (kind) {
      case "projects":
        return "СМИ о спектакле";
      case "team":
      case "services":
      case "merch":
        return "Публикации в СМИ";
    }
  };

  const mediaCategories = {
    attention: false,
    categoryList: [
      {
        text: setCategoryText(kind),
      },
    ],
  };

  const categoriesColors = {
    icon: Colors.Light100,
    background: Colors.Light100,
    text: Colors.Dark100,
  };

  return (
    <DetailsMediaUI
      details={details}
      categories={mediaCategories}
      categoriesColors={categoriesColors}
    />
  );
};
