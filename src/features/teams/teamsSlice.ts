import { createSlice } from "@reduxjs/toolkit";

import { TEmployees } from "../../utils/types";
import { teams } from "../../utils/constants";

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
  },
});

export const reducer = teamsSlice.reducer;
export const { getTeamsSelector, getAdminsSelector, getArtistsSelector } =
  teamsSlice.selectors;
