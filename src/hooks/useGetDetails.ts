import { useSelector } from "react-redux"
import { RootState } from "../services/store"
import { getDetailsSelector } from "../features/projectsInfo/projectsInfoSlice"
import { TDetails } from "../utils/types"

export const useGetDetails = (id: number, type: TDetails) => {
  return useSelector((state: RootState) => getDetailsSelector(state, id, type))
}