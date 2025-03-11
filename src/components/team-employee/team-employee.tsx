import { FC } from "react";
import { TTeamEmployeeProps } from "./types";
import { useGetTeamsSocials } from "../../hooks/useGetTeamsSocials";
import { EmployeeUI } from "../ui/employee";

export const TeamEmployee: FC<TTeamEmployeeProps> = ({ employee }) => {
  const socials = useGetTeamsSocials(employee.id || 0, "admins");

  return (
    <EmployeeUI type={"team"} employee={employee} socials={socials?.socials} />
  )
}