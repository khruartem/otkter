import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectInfos, serviceInfos } from "../../utils/constants";
import {
  TCardType,
  TDetails,
  TEmployees,
  TEventDetails,
} from "../../utils/types";

type TInfosType = Extract<TCardType, "services" | "projects">;

// TODO: убрать дублирующиеся TProjectInfo
export type TProjectInfo = {
  id: number;
  text: string;
  eventDetails: TEventDetails[];
  employees?: TEmployees;
  previewImg: string;
  poster?: string;
};

export type TServiceInfo = {
  id: number;
  text: string;
  serviceDetails: TEventDetails[];
  employees?: TEmployees;
  previewImg: string;
  poster?: string;
};

type TInfosState = {
  projectInfos: TProjectInfo[];
  serviceInfos: TServiceInfo[];
};

const initialState: TInfosState = {
  projectInfos: projectInfos,
  serviceInfos: serviceInfos,
};

const infosSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {},
  selectors: {
    getInfosSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType
    ) => {
      let infosArray: TProjectInfo[] | TServiceInfo[] = [];

      switch (infosType) {
        case "services":
          infosArray = state.serviceInfos;
          break;
        case "projects":
          infosArray = state.projectInfos;
          break;
      }

      const foundElement = findById(infosArray, id) as TProjectInfo &
        TServiceInfo;

      return foundElement;
    },
    getTextSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType
    ) => {
      return infosSlice.getSelectors().getInfosSelector(state, id, infosType)
        ?.text;
    },
    getPreviewImageSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType
    ) => {
      return infosSlice.getSelectors().getInfosSelector(state, id, infosType)
        ?.previewImg;
    },
    getDetailsSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType,
      detailsType: TDetails
    ) => {
      const infosFound = infosSlice
        .getSelectors()
        .getInfosSelector(state, id, infosType) as TProjectInfo & TServiceInfo;

      // TODO: Сейчас events относится к проектам - неочевидно 
      switch (detailsType) {
        case "events":
          return infosFound?.eventDetails;
        case "services":
          return infosFound?.serviceDetails;
        case "employees":
          return infosFound?.employees;
      }
    },
    getIsEmployeesSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType
    ) => {
      const infosFound = infosSlice
        .getSelectors()
        .getInfosSelector(state, id, infosType) as TProjectInfo & TServiceInfo;

      return infosFound?.employees ? true : false;
    },
    getPosterSelector: (
      state: TInfosState,
      id: number,
      infosType: TInfosType
    ) => {
      return infosSlice.getSelectors().getInfosSelector(state, id, infosType)
        ?.poster;
    },
  },
});

export const reducer = infosSlice.reducer;
export const {
  getInfosSelector,
  getTextSelector,
  getDetailsSelector,
  getIsEmployeesSelector,
  getPosterSelector,
  getPreviewImageSelector
} = infosSlice.selectors;
