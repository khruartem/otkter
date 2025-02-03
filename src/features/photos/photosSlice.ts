import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectPhotos } from "../../utils/constants";

export type TPhoto = {
  id: number;
  source: string;
};

export type TProjectPhotos = {
  projectId: number;
  photos: TPhoto[];
};

type TProjectPhotosState = {
  projectPhotos: TProjectPhotos[];
};

const initialState: TProjectPhotosState = {
  projectPhotos: projectPhotos
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  selectors: {
    getProjectPhotosSelector: (state: TProjectPhotosState, id: number) => {
      return findById(state.projectPhotos, id) as TProjectPhotos;
    },
    getPhotosSelector: (state: TProjectPhotosState, id: number) => {
      return (findById(state.projectPhotos, id) as TProjectPhotos).photos;
    },
    getPhotoSelector: (
      state: TProjectPhotosState,
      id: number,
      photoId: number
    ) => {
      return photosSlice
        .getSelectors()
        .getPhotosSelector(state, id)
        .find(({ id }) => {
          return photoId === id;
        });
    },
    getPhotoIndexSelector: (
      state: TProjectPhotosState,
      id: number,
      photoId: number
    ) => {
      return photosSlice
        .getSelectors()
        .getPhotosSelector(state, id)
        .findIndex(({ id }, index) => {
          return photoId === id && index;
        });
    },
    getPhotoSourceSelector: (
      state: TProjectPhotosState,
      id: number,
      photoId: number
    ) => {
      return photosSlice.getSelectors().getPhotoSelector(state, id, photoId)
        ?.source;
    },
  },
});

export const reducer = photosSlice.reducer;
export const {
  getProjectPhotosSelector,
  getPhotosSelector,
  getPhotoSelector,
  getPhotoIndexSelector,
  getPhotoSourceSelector,
} = photosSlice.selectors;
