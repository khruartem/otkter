import { createSlice } from "@reduxjs/toolkit";

import { Colors, TProject } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projects } from "../../utils/constants";

type TProjectsState = {
  projects: TProject[];
  colors: TProjectColors;
};

type TProjectColors = {
  projectTitleColor: Colors;
  projectTitleColorAttention: Colors;
};

const initialState: TProjectsState = {
  projects: projects,
  colors: {
    projectTitleColor: Colors.Nephritis120,
    projectTitleColorAttention: Colors.Orange100,
  },
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
    getProjectColorsSelector: (state: TProjectsState) => state.colors,
  },
});

export const reducer = projectsSlice.reducer;
export const {
  getProjectsSelector,
  getTitleSelector,
  getProjectSelector,
  getProjectColorsSelector,
} = projectsSlice.selectors;
