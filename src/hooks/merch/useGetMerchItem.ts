import { useGetMerchItemById } from "./useGetMerchById";
import { useGetMerchItemByUrl } from "./useGetMerchItemByUrl";

export const useGetMerchItem = (id?: number) => {
  const foundMerchItemById = useGetMerchItemById(id);
  const foundMerchItemByUrl = useGetMerchItemByUrl();

  return id ? foundMerchItemById : foundMerchItemByUrl;
};
