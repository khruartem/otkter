import { useSelector } from "../../services/store";
import { TMerchType } from "../../utils/types/merch";
import { getMerchItemsSelector } from "../../features/merch/merchSlice";

export const useGetMerchItems = (type: TMerchType) => {
  const merchItemsAll = useSelector(getMerchItemsSelector);

  switch (type) {
    case "cloths":
    case "souvenirs":
      return merchItemsAll.filter((merchItem) => merchItem.type === type);
    case "all":
    default:
      return merchItemsAll;
  }
};
