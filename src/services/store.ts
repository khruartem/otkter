import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { reducer as projectsReducer } from "../features/projects/projectsSlice";
import { reducer as servicesReducer } from "../features/services/servicesSlice";
import { reducer as teamReducer } from "../features/team/teamSlice";
import { reducer as merchReducer } from "../features/merch/merchSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    services: servicesReducer,
    team: teamReducer,
    merch: merchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
