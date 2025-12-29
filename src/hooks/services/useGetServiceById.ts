import { getServiceSelector } from "../../features/services/servicesSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetServiceById = (id?: number) => {
  return useSelector((state: RootState) => {
    if (id) {
      return getServiceSelector(state, id);
    }
  });
};
