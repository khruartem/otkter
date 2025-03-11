import { createSlice } from "@reduxjs/toolkit";

import { Social, TRole } from "../../utils/types";
import { mainSocials, teamsSocials } from "../../utils/constants";

type TSocialsState = {
  main: Social[];
  teams: TTeamSocials[];
};

export type TTeamSocials = {
  teamType: TRole;
  teamSocials: TEmployeeSocials[];
};

export type TEmployeeSocials = {
  employeeId: number;
  socials: Social[];
};

const initialState: TSocialsState = {
  main: mainSocials,
  teams: teamsSocials,
};

const socialsSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {},
  selectors: {
    getMainSocialsSelector: (state: TSocialsState) => state.main,
    getTeamsSocialsSelector: (
      state: TSocialsState,
      type: TRole,
      employeeId: number
    ) => {
      return state.teams
        .find((team) => team.teamType === type)
        ?.teamSocials.find((social) => social.employeeId === employeeId);
    },
  },
});

export const reducer = socialsSlice.reducer;
export const { getMainSocialsSelector, getTeamsSocialsSelector } =
  socialsSlice.selectors;
