import { createSlice } from "@reduxjs/toolkit";

import { TProjectTabMode, TServicesTabMode, TSliderSectionType, TTeamTabMode } from "../../utils/types";
import { serviceTabs, projectsTabs } from "../../utils/constants";
import { teamsTabs } from "../../utils/constants/team";

type TTabsState = {
  servicesTabs: TServicesTabMode[];
  teamsTabs: TTeamTabMode[];
  projectsTabs: TProjectTabMode[];
};

const initialState: TTabsState = {
  servicesTabs: serviceTabs,
  teamsTabs: teamsTabs,
  projectsTabs: projectsTabs,
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
        case "projects":
          return state.projectsTabs
      }
    },
  },
});

export const reducer = tabsSlice.reducer;
export const { getTabsSelector } = tabsSlice.selectors;
