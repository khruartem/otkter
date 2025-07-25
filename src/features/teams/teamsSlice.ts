import { createSlice } from "@reduxjs/toolkit";

import { TEmployee, TEmployees } from "../../utils/types";
import { teams } from "../../utils/constants/team";
import { findById } from "../../utils/findById";

type TTeamssState = {
  teams: TEmployees;
};

const initialState: TTeamssState = {
  teams: teams,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  selectors: {
    getTeamsSelector: (state: TTeamssState) => state.teams,
    getAdminsSelector: (state: TTeamssState) => state.teams.administrators,
    getArtistsSelector: (state: TTeamssState) => state.teams.artists,
    getAdminSelector: (state: TTeamssState, id: number) => {
      const admins =
        teamsSlice.getSelectors().getAdminsSelector(state)?.employees || [];
      return findById(admins, id) as TEmployee;
    },
  },
});

export const reducer = teamsSlice.reducer;
export const {
  getTeamsSelector,
  getAdminsSelector,
  getArtistsSelector,
  getAdminSelector,
} = teamsSlice.selectors;
