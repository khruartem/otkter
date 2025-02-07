import { getCategoryColorsSelector } from "../features/categories/categoriesSlice";
import { RootState, useSelector } from "../services/store";

export const useGetCategoryColors = (id: number) => {
  return useSelector((state: RootState) => getCategoryColorsSelector(state, id));
};
