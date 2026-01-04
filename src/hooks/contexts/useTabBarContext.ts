import { useContext } from "react";
import { TabBarContext } from "../../components/tab-bar";

export const useTabBarContext = () => {
  return useContext(TabBarContext);
};
