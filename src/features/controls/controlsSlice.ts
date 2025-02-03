import { createSlice } from "@reduxjs/toolkit";
import { TControls } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectControls } from "../../utils/constants";

export type TProjectControls = {
  projectId: number;
  controls: TControls | null;
};

type TControlsState = {
  projectControls: TProjectControls[];
};

const initialState: TControlsState = {
  projectControls: projectControls
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
  selectors: {
    getControlsSelector: (state: TControlsState, id: number) => {
      return (findById(state.projectControls, id) as TProjectControls).controls;
    },
  },
});

export const reducer = controlsSlice.reducer;
export const { getControlsSelector } = controlsSlice.selectors;
