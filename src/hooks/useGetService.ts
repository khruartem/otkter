import { getServiceSelector } from "../features/services/servicesSlice";
import { RootState, useSelector } from "../services/store";

export const useGetService = (id: number) => {
  return useSelector((state: RootState) => getServiceSelector(state, id));
};
