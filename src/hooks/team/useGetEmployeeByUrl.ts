import { useGetCode } from "../useGetCode";
import { useGetTeams } from "./useGetTeams";

export const useGetEmployeeByUrl = () => {
  const url = useGetCode();
  const admins = useGetTeams("admins");

  return admins.find((employee) => employee.url === url);
};
