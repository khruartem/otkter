import { useSelector } from "react-redux"
import { getTabsSelector } from "../features/tabs/tabsSlice"
import { TSliderSectionType } from "../utils/types";
import { RootState } from "../services/store";

export const useGetTabs = (type: TSliderSectionType) => {
  return useSelector((state: RootState) => getTabsSelector(state, type));
}