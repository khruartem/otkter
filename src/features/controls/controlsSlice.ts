import { createSlice } from "@reduxjs/toolkit";
import { TCardType, TControlsItem } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectControls, serviceControls } from "../../utils/constants";
import { teamControls } from "../../utils/constants/team";

export type TControlsType = Extract<
  TCardType,
  "services" | "projects" | "team"
>;

export type TControls = {
  id: number;
  controls: TControlsItem[] | undefined;
};

type TControlsState = {
  projectControls: TControls[];
  serviceControls: TControls[];
  teamControls: TControls[];
};

const initialState: TControlsState = {
  projectControls: projectControls,
  serviceControls: serviceControls,
  teamControls: teamControls,
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
  selectors: {
    getControlsSelector: (
      state: TControlsState,
      id: number,
      type: TControlsType
    ) => {
      let controlsArray: TControls[] = [];

      switch (type) {
        case "services":
          controlsArray = state.serviceControls;
          break;
        case "projects":
          controlsArray = state.projectControls;
          break;
        case "team":
          controlsArray = state.teamControls;
          break;
      }

      const unsortedControls = (findById(controlsArray, id) as TControls)
        ?.controls;

      return unsortedControls;
    },
  },
});

export const reducer = controlsSlice.reducer;
export const { getControlsSelector } = controlsSlice.selectors;
