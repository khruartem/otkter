import { useGetEmployeeById } from "./useGetEmployeeById";
import { useGetEmployeeByUrl } from "./useGetEmployeeByUrl";

export const useGetEmployee = (id?: number) => {
  const foundEmployeeById = useGetEmployeeById(id);
  const foundEmployeeByUrl = useGetEmployeeByUrl();

  return id ? foundEmployeeById : foundEmployeeByUrl;
};
