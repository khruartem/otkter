import { createSlice } from "@reduxjs/toolkit";

import { TProject } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projects } from "../../utils/constants";

type TProjectsState = {
  projects: TProject[];
};

const initialState: TProjectsState = {
  projects: projects
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  selectors: {
    getProjectsSelector: (state: TProjectsState) => state.projects,
    getTitleSelector: (state: TProjectsState, id: number) => {
      return (findById(state.projects, id) as TProject).title;
    },
    getProjectSelector: (state: TProjectsState, id: number) => {
      return findById(state.projects, id) as TProject;
    },
  },
});

export const reducer = projectsSlice.reducer;
export const { getProjectsSelector, getTitleSelector, getProjectSelector } =
  projectsSlice.selectors;
