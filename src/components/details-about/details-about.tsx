import { FC } from "react";

import { DetailsAboutUI } from "../ui/details-about";

import { TDetailsAboutProps } from "./types";
import { Colors } from "../../utils/types";

export const DetailsAbout: FC<TDetailsAboutProps> = ({
  details,
  categories,
}) => {
  const categoriesColors = categories.attention
    ? {
        icon: Colors.Navy,
        background: Colors.Orange100,
        text: Colors.Navy,
      }
    : {
        icon: Colors.Nephritis100,
        background: Colors.Navy,
        text: Colors.Light100,
      };
  return (
    <DetailsAboutUI
      details={details}
      categories={categories}
      categoriesColors={categoriesColors}
    />
  );
};
