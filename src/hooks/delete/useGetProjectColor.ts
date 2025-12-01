import { Colors } from "../../utils/types";

export const useGetProjectColor = (attention: boolean) => {
  return attention ? Colors.Orange100 : Colors.Nephritis120;
};
