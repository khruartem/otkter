import { FC } from "react";

import { DetailsGridItemUI } from "../details-grid-item";
import { DetailsGridContentUI } from "../details-grid-content";
import { EmployeeUI } from "../employee";

import { TDetailsTeamUIProps } from "./types";
import { TDetails } from "../../../utils/types/common";

export const DetailsTeamUI: FC<TDetailsTeamUIProps> = ({
  detailsAdmins,
  detailsArtists,
  categoriesAdmins,
  categoriesArtists,
  categoriesColors,
  guardEmployee,
}) => {
  const renderTeamDetails = (details: TDetails[]) => {
    return (
      <>
        {details.map(({ value }) => (
          <>
            {guardEmployee(value) && (
              <EmployeeUI type={"projects"} employee={value} />
            )}
          </>
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
