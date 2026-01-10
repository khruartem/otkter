import { useGetServiceById } from "./useGetServiceById";
import { useGetServiceByUrl } from "./useGetServiceByUrl";

export const useGetService = (id?: number) => {
  const foundServiceById = useGetServiceById(id);
  const foundServiceByUrl = useGetServiceByUrl();

  return id ? foundServiceById : foundServiceByUrl;
};
