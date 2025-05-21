import { createSelector, createSlice } from "@reduxjs/toolkit";

import { Colors, TProject, TProjectTabMode } from "../../utils/types";
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
    getAll: (state: TProjectsState) => state.projects,
    getProjectsSelector: (
      state: TProjectsState,
      type: TProjectTabMode | "main"
    ) => {
      switch (type) {
        case "all":
          //default:
          return projectsSlice.getSelectors().getAll(state);
        case "play":
          //return state.projects.filter((project) => project.type === "play");
          //return createSelector(projectsSlice.getSelectors().getAll, projects => projects.filter((project) => project.type === "play"));
          return getPlayProjects(state);
        case "contest":
          //return state.projects.filter((project) => project.type === "contest");
          //return createSelector(projectsSlice.getSelectors().getAll, projects => projects.filter((project) => project.type === "contest"));
          return getContestProjects(state);
        case "master-class":
          // return state.projects.filter(
          //   (project) => project.type === "master-class"
          // );
          //return createSelector(projectsSlice.getSelectors().getAll, projects => projects.filter((project) => project.type === "master-class"));
          return getMasterClassProjects(state);
        case "short-film":
          // return state.projects.filter(
          //   (project) => project.type === "short-film"
          // );
          //return createSelector(projectsSlice.getSelectors().getAll, projects => projects.filter((project) => project.type === "short-film"));
          return getShortFilmProjects(state);
        case "main":
          // return state.projects.filter(
          //   (project) => project.isMain === true
          // );
          //return createSelector(projectsSlice.getSelectors().getAll, projects => projects.filter((project) => project.isMain === true));
          return getMainProjects(state);
      }
    },
    getTitleSelector: (state: TProjectsState, id: number) => {
      return (findById(state.projects, id) as TProject)?.title;
    },
    getShortTextSelector: (state: TProjectsState, id: number) => {
      return (findById(state.projects, id) as TProject)?.shortText;
    },
    getProjectSelector: (state: TProjectsState, id: number) => {
      return findById(state.projects, id) as TProject;
    },
    getProjectColorsSelector: (state: TProjectsState) => state.colors,
    getIsMainSelector: (state: TProjectsState, id: number) => {
      return (findById(state.projects, id) as TProject)?.isMain;
    },
    getTypeSelector: (state: TProjectsState, id: number) => {
      const typeToFormat = (findById(state.projects, id) as TProject)?.type;
      switch (typeToFormat) {
        case "master-class":
          return "Мастер-класс";
        case "play":
          return "Спектакль";
        case "short-film":
          return "Короткий метр";
        case "contest":
          return "Конкурс";
        case "open-sea":
        case "events":
        case "design":
        case "content":
        case "lamp":
        case "smm":
        case "projects":
        case "team":
        case "services":
        case "all":
          return "Услуга";
      }
    },
  },
});

const getPlayProjects = createSelector(
  projectsSlice.getSelectors().getAll,
  (projects) => projects.filter((project) => project.type === "play")
);
const getContestProjects = createSelector(
  projectsSlice.getSelectors().getAll,
  (projects) => projects.filter((project) => project.type === "contest")
);
const getMasterClassProjects = createSelector(
  projectsSlice.getSelectors().getAll,
  (projects) => projects.filter((project) => project.type === "master-class")
);
const getShortFilmProjects = createSelector(
  projectsSlice.getSelectors().getAll,
  (projects) => projects.filter((project) => project.type === "short-film")
);
const getMainProjects = createSelector(
  projectsSlice.getSelectors().getAll,
  (projects) => projects.filter((project) => project.isMain === true)
);

export const reducer = projectsSlice.reducer;
export const {
  getProjectsSelector,
  getTitleSelector,
  getProjectSelector,
  getProjectColorsSelector,
  getShortTextSelector,
  getIsMainSelector,
  getTypeSelector,
} = projectsSlice.selectors;
