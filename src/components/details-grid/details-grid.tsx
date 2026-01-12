import { FC } from "react";

import { DetailsGridUI } from "../ui/details-grid";
import { DetailsAbout } from "../details-about";
import { DetailsTeam } from "../details-team";
import { DetailsMedia } from "../details-media";

import { TDetailsGridProps } from "./types";

import { TDetails, TDetailsType } from "../../utils/types/details";

export const DetailsGrid: FC<TDetailsGridProps> = ({
  details,
  categories,
  kind,
}) => {
  const findDetails = (details: TDetails[], type: TDetailsType) => {
    if (type === "about") {
      return details.filter((detail) => detail.type === type);
    } else {
      return details.find((detail) => detail.type === type)
        ? details.filter((detail) => detail.type === type)
        : undefined;
    }
  };

  const detailsAbout = findDetails(details, "about");
  const detailsAdmins = findDetails(details, "admins");
  const detailsArtists = findDetails(details, "artists");
  const detailsMedia = findDetails(details, "media");

  return (
    <DetailsGridUI
      about={
        detailsAbout &&
        categories && (
          <DetailsAbout details={detailsAbout} categories={categories} />
        )
      }
      team={
        (detailsAdmins || detailsArtists) && (
          <DetailsTeam
            detailsAdmins={detailsAdmins}
            detailsArtists={detailsArtists}
          />
        )
      }
      media={
        detailsMedia && <DetailsMedia details={detailsMedia} kind={kind} />
      }
    />
  );
};
