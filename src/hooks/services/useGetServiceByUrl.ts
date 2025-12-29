import { useGetCode } from "../useGetCode";
import { useGetServices } from "./useGetServices";

export const useGetServiceByUrl = () => {
  const url = useGetCode();
  const services = useGetServices();

  return services.find((service) => service.url === url);
};
