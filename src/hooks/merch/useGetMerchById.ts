import { getMerchItemSelector } from "../../features/merch/merchSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetMerchItemById = (id?: number) => {
  return useSelector((state: RootState) => {
    if (id) {
      return getMerchItemSelector(state, id);
    }
  });
};
