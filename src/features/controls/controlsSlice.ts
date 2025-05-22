import { createSlice } from "@reduxjs/toolkit";
import { TCardType, TControlsItem } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectControls, serviceControls } from "../../utils/constants";

export type TControlsType = Extract<TCardType, "services" | "projects">;

export type TControls = {
  id: number;
  controls: TControlsItem[] | undefined;
};

type TControlsState = {
  projectControls: TControls[];
  serviceControls: TControls[];
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
      }

      const unsortedControls = (findById(controlsArray, id) as TControls)
        ?.controls;

      return unsortedControls;
    },
  },
});

export const reducer = controlsSlice.reducer;
export const { getControlsSelector } = controlsSlice.selectors;
