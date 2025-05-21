import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectInfos } from "../../utils/constants";
import { TDetails, TEmployees, TEventDetails } from "../../utils/types";

export type TProjectInfo = {
  id: number;
  text: string;
  eventDetails: TEventDetails[];
  employees?: TEmployees;
  previewImg: string;
  poster?: string;
};

type TProjectsInfoState = {
  infos: TProjectInfo[];
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
      return (findById(state.infos, id) as TProjectInfo)?.text;
    },
    getPreviewImgSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TProjectInfo).previewImg;
    },
    getDetailsSelector: (
      state: TProjectsInfoState,
      id: number,
      type: TDetails
    ) => {
      const projectFound = findById(state.infos, id) as TProjectInfo;
      switch (type) {
        case "events":
          return projectFound.eventDetails;
        case "employees":
          return projectFound.employees;
      }
    },
    getIsEmployeesSelector: (state: TProjectsInfoState, id: number) => {
      return (findById(state.infos, id) as TProjectInfo)?.employees
        ? true
        : false;
    },
  },
});

export const reducer = projectsInfoSlice.reducer;
export const {
  getTextSelector,
  getDetailsSelector,
  getIsEmployeesSelector,
  getPreviewImgSelector,
} = projectsInfoSlice.selectors;
