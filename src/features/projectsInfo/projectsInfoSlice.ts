import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectInfos } from "../../utils/constants";
import { TDetails } from "../../utils/types";

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

export type TEventType =
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price";

export type TEventDetails = {
  type: TEventType;
  label: string;
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
    getDetailsSelector: (
      state: TProjectsInfoState,
      id: number,
      type: TDetails
    ) => {
      const projectFound = findById(state.infos, id) as TInfo;
      switch (type) {
        case "events":
          return projectFound.eventDetails;
        case "employees":
          return projectFound.employees;
      }
    },
    getIsEmployeesSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TInfo)?.employees ? true : false;
    },
  },
});

export const reducer = projectsInfoSlice.reducer;
export const { getTextSelector, getDetailsSelector, getIsEmployeesSelector } =
  projectsInfoSlice.selectors;
