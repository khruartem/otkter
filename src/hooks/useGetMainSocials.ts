import { useSelector } from "react-redux";
import { getMainSocialsSelector } from "../features/socials/socialsSlice";

export const useGetMainSocials = () => {
  return useSelector(getMainSocialsSelector);
};
