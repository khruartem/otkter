import { useSelector } from "react-redux"
import { getTabsSelector } from "../features/tabs/tabsSlice"

export const useGetTabs = () => {
  return useSelector(getTabsSelector);
}