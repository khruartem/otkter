import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { teams } from "../../utils/constants/team";
import { TEmployee } from "../../utils/types/team";

type TTeamState = {
  teams: TEmployee[];
};

const initialState: TTeamState = {
  teams,
};

const servicesSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  selectors: {
    getTeamsSelector: (state: TTeamState) => state.teams,
    getEmployeeSelector: (state: TTeamState, id: number) => {
      return findById(state.teams, id);
    },
  },
});

export const reducer = servicesSlice.reducer;
export const { getTeamsSelector, getEmployeeSelector } =
  servicesSlice.selectors;
