import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectInfos } from "../../utils/constants";

export type TInfo = {
  projectId: number;
  text: string;
  eventDetails: TEventDetails[];
  employees?: TEmployees;
};

export type TEmployees = {
  actors?: TEmployee[];
  administrators?: TEmployee[];
};

type TEmployee = {
  name: string;
  occupation: string;
  photo: string;
};

export type TEventDetails = {
  type: "organizers" | "partners" | "date" | "address" | "price";
  value: string | string[];
};

type TProjectsInfoState = {
  infos: TInfo[];
};

const initialState: TProjectsInfoState = {
  infos: projectInfos,
};

const projectsInfoSlice = createSlice({
  name: "projectsInfo",
  initialState,
  reducers: {},
  selectors: {
    getTextSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TInfo).text;
    },
    getEventDetailsSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TInfo).eventDetails;
    },
    getEmployeesSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TInfo).employees;
    },
  },
});

export const reducer = projectsInfoSlice.reducer;
export const {
  getTextSelector,
  getEventDetailsSelector,
  getEmployeesSelector,
} = projectsInfoSlice.selectors;
