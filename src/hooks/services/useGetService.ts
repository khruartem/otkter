import { getServiceSelector } from "../../features/services/servicesSlice";
import { useSelector, RootState } from "../../services/store";

export const useGetService = (id: number) => {
  return useSelector((state: RootState) => getServiceSelector(state, id));
};
