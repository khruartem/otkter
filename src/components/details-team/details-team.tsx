import { FC } from "react";

import { TDetailsTeamProps } from "./types";
import { DetailsTeamUI } from "../ui/details-team";
import { Colors, TEmployee } from "../../utils/types";
import { TItemOT } from "../../utils/types/common";

export const DetailsTeam: FC<TDetailsTeamProps> = ({
  detailsAdmins,
  detailsArtists,
}) => {
  const categoriesAdmins = {
    attention: false,
    categoryList: [
      {
        text: "Руководители",
      },
    ],
  };

  const categoriesArtists = {
    attention: false,
    categoryList: [
      {
        text: "Творцы",
      },
    ],
  };

  function guardEmployee(
    value: string | string[] | TEmployee | TItemOT
  ): value is TEmployee {
    return (value as TEmployee).occupation !== undefined;
  }

  const categoriesColors = {
    icon: Colors.Light100,
    background: Colors.Light100,
    text: Colors.Dark100,
  };

  return (
    <DetailsTeamUI
      detailsAdmins={detailsAdmins}
      detailsArtists={detailsArtists}
      categoriesAdmins={categoriesAdmins}
      categoriesArtists={categoriesArtists}
      categoriesColors={categoriesColors}
      guardEmployee={guardEmployee}
    />
  );
};
