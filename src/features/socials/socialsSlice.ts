import { createSlice } from "@reduxjs/toolkit";

import { Social, TEmployeesType } from "../../utils/types";
import { mainSocials } from "../../utils/constants";
import { teamsSocials } from "../../utils/constants/team";

type TSocialsState = {
  main: Social[];
  teams: TTeamSocials[];
};

export type TTeamSocials = {
  teamType: TEmployeesType;
  teamSocials: TEmployeeSocials[];
};

export type TEmployeeSocials = {
  id: number;
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
      type: TEmployeesType,
      id: number
    ) => {
      return state.teams
        .find((team) => team.teamType === type)
        ?.teamSocials.find((social) => social.id === id);
    },
  },
});

export const reducer = socialsSlice.reducer;
export const { getMainSocialsSelector, getTeamsSocialsSelector } =
  socialsSlice.selectors;
