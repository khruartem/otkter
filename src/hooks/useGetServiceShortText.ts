import { useSelector } from "react-redux";
import { getServiceShortTextSelector } from "../features/services/servicesSlice";
import { RootState } from "../services/store";

export const useGetServiceShortText = (id: number) => {
  return useSelector((state: RootState) =>
    getServiceShortTextSelector(state, id)
  );
};
