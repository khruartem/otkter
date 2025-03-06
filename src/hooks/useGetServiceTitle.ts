import { useSelector } from "react-redux";
import { getServiceTitleSelector } from "../features/services/servicesSlice";
import { RootState } from "../services/store";

export const useGetServiceTitle = (id: number) => {
  return useSelector((state: RootState) => getServiceTitleSelector(state, id));
};
