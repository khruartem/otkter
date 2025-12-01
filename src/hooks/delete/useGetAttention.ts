import { getCategotyAttentionSelector } from "../../features/categories/categoriesSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetAttention = (id: number) => {
  return useSelector((state: RootState) =>
    getCategotyAttentionSelector(state, id)
  );
};
