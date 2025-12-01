import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projects } from "../../utils/constants/projects";
import { TProject } from "../../utils/types/projects";

type TProjectsState = {
  projects: TProject[];
};

const initialState: TProjectsState = {
  projects: projects,
};

const projectsSlice = createSlice({
  name: "_projects",
  initialState,
  reducers: {},
  selectors: {
    getProjectsSelector: (state: TProjectsState) => state.projects,
    getProjectSelector: (state: TProjectsState, id: number) => {
      return findById(state.projects, id);
    },
  },
});

export const reducer = projectsSlice.reducer;
export const { getProjectsSelector, getProjectSelector } =
  projectsSlice.selectors;
