import { createSlice } from "@reduxjs/toolkit";

import { TServicesTabMode } from "../../utils/types";
import { serviceTabs } from "../../utils/constants";

type TTabsState = {
  tabs: TServicesTabMode[];
};

const initialState: TTabsState = {
  tabs: serviceTabs,
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {},
  selectors: {
    getTabsSelector: (state: TTabsState) => state.tabs,
  },
});

export const reducer = tabsSlice.reducer;
export const { getTabsSelector } = tabsSlice.selectors;
