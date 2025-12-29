import { useParams } from "react-router-dom";
import { TItemOTUrl } from "../utils/types/common";

export const useGetCode = () => {
  const { code } = useParams<{
    code: TItemOTUrl | "not-found";
  }>();

  return code || "not-found";
};
