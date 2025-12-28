import { FC } from "react";

import { InfoRenderer } from "../info-renderer";

import { useGetId } from "../../hooks/useGetId";
import { useGetTeams } from "../../hooks/team/useGetTeams";
import { useGetEmployee } from "../../hooks/team/useGetEmployee";

export const EmployeeInfo: FC = () => {
  const employeeId = useGetId();
  const teams = useGetTeams("admins")!;
  const employee = useGetEmployee(employeeId);

  return <InfoRenderer items={teams} currentItem={employee} />;
};
