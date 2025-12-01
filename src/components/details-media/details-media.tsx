import { FC } from "react";

import { TDetailsMediaProps } from "./types";
import { Colors, TEmployee } from "../../utils/types";
import { TItemOT } from "../../utils/types/common";
import { DetailsMediaUI } from "../ui/details-media";

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

  function guardMedia(
    value: string | string[] | TEmployee | TItemOT
  ): value is TItemOT {
    return (value as TItemOT).active !== undefined;
  }

  return (
    <DetailsMediaUI
      details={details}
      categories={mediaCategories}
      categoriesColors={categoriesColors}
      guardMedia={guardMedia}
    />
  );
};
