import { getCategoryColorsSelector } from "../features/categories/categoriesSlice";
import { useSelector } from "../services/store";

export const useGetCategoryColors = () => {
  return useSelector(getCategoryColorsSelector);
};
