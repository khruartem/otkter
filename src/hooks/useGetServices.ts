import { useSelector } from "react-redux"
import { getServicesSelector } from "../features/services/servicesSlice"

export const useGetServices = () => {
  return useSelector(getServicesSelector);
}