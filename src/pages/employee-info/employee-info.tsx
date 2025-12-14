import { FC } from "react";

import { Info } from "../../components/pages/info";
import { NotFound404 } from "../not-found-404";

import { useGetId } from "../../hooks/useGetId";
import { useGetTeams } from "../../hooks/team/useGetTeams";
import { useGetEmployee } from "../../hooks/team/useGetEmployee";

export const EmployeeInfo: FC = () => {
  const employeeId = useGetId();
  const teams = useGetTeams("admins")!;
  const employee = useGetEmployee(employeeId);

  return employee ? (
    <Info currentItem={employee} items={teams} />
  ) : (
    <NotFound404 />
  );
};
