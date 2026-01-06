import { FC } from "react";

import { DetailsTeamUI } from "../ui/details-team";

import { TDetailsTeamProps } from "./types";

import { Colors } from "../../utils/types";

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
    />
  );
};
