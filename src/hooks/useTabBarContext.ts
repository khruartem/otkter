import { useContext } from "react";
import { TabBarContext } from "../components/tab-bar copy";

export const useTabBarContext = () => {
  return useContext(TabBarContext);
};
