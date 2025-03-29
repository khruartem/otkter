import { useLocation } from "react-router-dom";

export const useGetIsMainPage = () => {
  const { pathname } = useLocation();
  return pathname === "/otkter/" || pathname === `/otkter`; 
}