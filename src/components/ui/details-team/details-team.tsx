import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { DetailsGridItemUI } from "../details-grid-item";
import { DetailsGridContentUI } from "../details-grid-content";
import { EmployeeUI } from "../employee";

import { TDetailsTeamUIProps } from "./types";

import { TDetails } from "../../../utils/types/details";
import { TEmployee } from "../../../utils/types/team";

export const DetailsTeamUI: FC<TDetailsTeamUIProps> = ({
  detailsAdmins,
  detailsArtists,
  categoriesAdmins,
  categoriesArtists,
  categoriesColors,
}) => {
  const renderTeamDetails = (details: TDetails[]) => {
    return (
      <>
        {details.map(({ value }) => (
          <EmployeeUI
            key={nanoid()}
            type={"projects"}
            employee={value as TEmployee}
          />
        ))}
      </>
    );
  };

  return !detailsAdmins && !detailsArtists ? null : (
    <DetailsGridItemUI>
      {detailsArtists && (
        <DetailsGridContentUI
          categoriesProps={{
            categories: categoriesArtists,
            colors: categoriesColors,
          }}
        >
          {renderTeamDetails(detailsArtists)}
        </DetailsGridContentUI>
      )}
      {detailsAdmins && (
        <DetailsGridContentUI
          categoriesProps={{
            categories: categoriesAdmins,
            colors: categoriesColors,
          }}
        >
          {renderTeamDetails(detailsAdmins)}
        </DetailsGridContentUI>
      )}
    </DetailsGridItemUI>
  );
};
