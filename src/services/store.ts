import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { reducer as projectsReducer } from "../features/projects/projectsSlice";
import { reducer as projectsInfoReducer } from "../features/projectsInfo/projectsInfoSlice";
import { reducer as infosReducer } from "../features/projectsInfo/infosSlice";
import { reducer as photosReducer } from "../features/photos/photosSlice";
import { reducer as categoriesReducer } from "../features/categories/categoriesSlice";
import { reducer as controlsReducer } from "../features/controls/controlsSlice";
import { reducer as tabsReducer } from "../features/tabs/tabsSlice";
import { reducer as servicesReducer } from "../features/services/servicesSlice";
import { reducer as socialsReducer } from "../features/socials/socialsSlice";
import { reducer as teamsReducer } from "../features/teams/teamsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectsInfo: projectsInfoReducer,
    infos: infosReducer,
    photos: photosReducer,
    categories: categoriesReducer,
    controls: controlsReducer,
    tabs: tabsReducer,
    services: servicesReducer,
    socials: socialsReducer,
    teams: teamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
