import { FC } from "react";

import { DetailsMediaUI } from "../ui/details-media";

import { TDetailsMediaProps } from "./types";

import { Colors } from "../../utils/types";

export const DetailsMedia: FC<TDetailsMediaProps> = ({ details }) => {
  const mediaCategories = {
    attention: false,
    categoryList: [
      {
        text: "СМИ о спектакле",
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
