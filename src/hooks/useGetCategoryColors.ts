import { getCategoryColorsSelector } from "../features/categories/categoriesSlice";
import { RootState, useSelector } from "../services/store";
import { TCategoryType } from "../utils/types";

export const useGetCategoryColors = (type: TCategoryType) => {
  return useSelector((state: RootState) => getCategoryColorsSelector(state, type));
};
