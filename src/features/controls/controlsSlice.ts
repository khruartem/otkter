import { createSlice } from "@reduxjs/toolkit";
import { TCardType, TControls } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectControls, serviceControls } from "../../utils/constants";

export type TControlsType = Extract<TCardType, "services" | "projects">;

export type TProjectControls = {
  id: number;
  controls: TControls | null;
};

export type TServiceControls = {
  id: number;
  controls: TControls | null;
};

type TControlsState = {
  projectControls: TProjectControls[];
  serviceControls: TServiceControls[];
};

const initialState: TControlsState = {
  projectControls: projectControls,
  serviceControls: serviceControls,
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
  selectors: {
    getProjectControlsSelector: (state: TControlsState, id: number) => {
      const foundElement = findById(
        state.projectControls,
        id
      ) as TProjectControls;
      return foundElement
        ? (findById(state.projectControls, id) as TProjectControls).controls
        : undefined;
    },
    getServiceControlsSelector: (state: TControlsState, id: number) => {
      const foundElement = findById(
        state.serviceControls,
        id
      ) as TServiceControls;
      return foundElement
        ? (findById(state.serviceControls, id) as TServiceControls).controls
        : undefined;
    },
    getControlsSelector: (state: TControlsState, id: number, type: TControlsType) => {
      let controlsArray: TProjectControls[] | TServiceControls[] = [];
      
      switch (type) {
        case "services":
          controlsArray = state.serviceControls;
          break;
        case "projects":
          controlsArray = state.projectControls;
          break;
      };

      const foundElement = findById(
        controlsArray,
        id
      ) as TProjectControls | TServiceControls;

      return foundElement?.controls;
    },
  },
});

export const reducer = controlsSlice.reducer;
export const { getProjectControlsSelector, getServiceControlsSelector, getControlsSelector } =
  controlsSlice.selectors;
