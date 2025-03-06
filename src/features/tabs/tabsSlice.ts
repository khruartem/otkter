import { createSlice } from "@reduxjs/toolkit";

import { TServicesTabMode, TSliderSectionType, TTeamTabMode } from "../../utils/types";
import { serviceTabs, teamsTabs } from "../../utils/constants";

type TTabsState = {
  servicesTabs: TServicesTabMode[];
  teamsTabs: TTeamTabMode[];
};

const initialState: TTabsState = {
  servicesTabs: serviceTabs,
  teamsTabs: teamsTabs,
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {},
  selectors: {
    getTabsSelector: (state: TTabsState, type: TSliderSectionType) => {
      switch (type) {
        case "team":
          return state.teamsTabs
        case "services":
          return state.servicesTabs
      }
    },
  },
});

export const reducer = tabsSlice.reducer;
export const { getTabsSelector } = tabsSlice.selectors;
