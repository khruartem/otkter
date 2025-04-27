import { useSelector } from "react-redux"
import { RootState } from "../services/store";
import { getServicesSelector } from "../features/services/servicesSlice"

export const useGetServices = (type: "all" | "main") => {
  return useSelector((state: RootState) => getServicesSelector(state, type));
}