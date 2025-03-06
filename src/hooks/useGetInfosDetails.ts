import { useSelector } from "react-redux"
import { RootState } from "../services/store"
import { getDetailsSelector } from "../features/projectsInfo/infosSlice"
import { TSectionType, TDetails } from "../utils/types"

export const useGetInfosDetails = (id: number, infosType: TSectionType, detailsType: TDetails) => {
  return useSelector((state: RootState) => getDetailsSelector(state, id, infosType, detailsType))
}