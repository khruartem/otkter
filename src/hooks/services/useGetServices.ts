import { useSelector } from "../../services/store";
import { getServicesSelector } from "../../features/services/servicesSlice";

export const useGetServices = (type?: "main") => {
  const servicesAll = useSelector(getServicesSelector);

  if (!type) {
    return servicesAll;
  } else {
    return servicesAll.filter((service) => service.main === true);
  }
};
