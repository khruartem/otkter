import { useGetCode } from "../useGetCode";
import { useGetMerchItems } from "./useGetMerchItems";

export const useGetMerchItemByUrl = () => {
  const url = useGetCode();
  const merchItems = useGetMerchItems();

  return merchItems.find((merchItem) => merchItem.url === url);
};
