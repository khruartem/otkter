import { FC } from "react";

import { InfoRenderer } from "../info-renderer";
import { Info } from "../info";

import { useGetTeams } from "../../hooks/team/useGetTeams";
import { useGetEmployee } from "../../hooks/team/useGetEmployee";

export const EmployeeInfo: FC = () => {
  const teams = useGetTeams("admins")!;
  const employee = useGetEmployee();

  return (
    <InfoRenderer
      items={teams}
      currentItem={employee}
      render={(items, currentItem) => (
        <Info items={items} currentItem={currentItem} />
      )}
    />
  );
};
