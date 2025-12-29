import { useGetCode } from "./useGetCode";
import { useGetItemsOT } from "./useGetItemsOT";

export const useGetItemOTByUrl = () => {
  const code = useGetCode();
  const itemsOT = useGetItemsOT();

  return itemsOT.find((itemOT) => itemOT.url === code)!;
};
