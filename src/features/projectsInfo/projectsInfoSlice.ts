import { createSlice } from "@reduxjs/toolkit";
import { TControls } from "../../utils/types";

import { findById } from "../../utils/findById";
import { projectInfos } from "../../utils/constants";

export type TInfo = {
  projectId: number;
  projectInfo: TProjectInfo;
  controls?: TControls;
};

type TProjectInfo = {
  text: string;
  eventDetails: TEventDetails;
  employees?: TEmployees;
};

type TEmployees = {
  actors?: TEmployee[];
  administrators?: TEmployee[];
};

type TEmployee = {
  name: string;
  occupation: string;
  photo: string;
};

type TEventDetails = {
  organizers?: string[];
  partners?: string[];
  eventDate?: string;
  address?: string;
  price?: string;
};

type TProjectsInfoState = {
  infos: TInfo[];
};

const initialState: TProjectsInfoState = {
  infos: projectInfos
};

const projectsInfoSlice = createSlice({
  name: "projectsInfo",
  initialState,
  reducers: {},
  selectors: {
    getProjectInfoSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TInfo).projectInfo;
    },
  },
});

export const reducer = projectsInfoSlice.reducer;
export const { getProjectInfoSelector } = projectsInfoSlice.selectors;
