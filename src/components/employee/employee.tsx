import { FC } from "react";
import { TEmployeeProps } from "./types";
import { useGetTeamsSocials } from "../../hooks/useGetTeamsSocials";
import { EmployeeUI } from "../ui/employee";

export const Employee: FC<TEmployeeProps> = ({ employee }) => {
  const socials = useGetTeamsSocials(employee.id || 0, "admins");

  return (
    <EmployeeUI type={"team"} employee={employee} socials={socials?.socials} />
  );
};
