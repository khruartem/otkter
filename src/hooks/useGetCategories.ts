import { getProjectCategoriesSelector } from "../features/categories/categoriesSlice"
import { RootState, useSelector } from "../services/store"

export const useGetCategories = (id: number) => {
  return useSelector((state: RootState) => getProjectCategoriesSelector(state, id))
}