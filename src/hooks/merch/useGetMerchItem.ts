import { getMerchItemSelector } from "../../features/merch/merchSlice";
import { useSelector, RootState } from "../../services/store";

export const useGetMerchItem = (id: number) => {
  return useSelector((state: RootState) => getMerchItemSelector(state, id));
};
