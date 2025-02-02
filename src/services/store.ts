import { configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import { reducer as projectsReducer } from '../features/projects/projectsSlice';
import { reducer as projectsInfoReducer } from '../features/projectsInfo/projectsInfoSlice';
import { reducer as photosReducer } from '../features/photos/photosSlice';
import { reducer as categoriesReducer } from '../features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectsInfo: projectsInfoReducer,
    photos: photosReducer,
    categories: categoriesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
