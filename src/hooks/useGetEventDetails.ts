import { useSelector } from "react-redux"
import { RootState } from "../services/store"
import { getEventDetailsSelector } from "../features/projectsInfo/projectsInfoSlice"

export const useGetEventDetails = (id: number) => {
  return useSelector((state: RootState) => getEventDetailsSelector(state, id))
}