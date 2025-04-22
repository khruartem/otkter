import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectPhotos, servicePhotos } from "../../utils/constants";
import { TCardType } from "../../utils/types";

type TPhotosType = Extract<TCardType, "services" | "projects">;

export type TPhoto = {
  id: number;
  source: string;
};

export type TProjectPhotos = {
  id: number;
  photos: TPhoto[];
};

export type TServicePhotos = {
  id: number;
  photos: TPhoto[];
};

type TPhotosState = {
  projectPhotos: TProjectPhotos[];
  servicePhotos: TServicePhotos[];
};

const initialState: TPhotosState = {
  projectPhotos: projectPhotos,
  servicePhotos: servicePhotos,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  selectors: {
    getPhotosSelector: (
      state: TPhotosState,
      id: number,
      type: TPhotosType
    ) => {
      let photosArray: TProjectPhotos[] | TServicePhotos[] = [];

      switch (type) {
        case "services":
          photosArray = state.servicePhotos;
          break;
        case "projects":
          photosArray = state.projectPhotos;
          break;
      }

      const foundElement = findById(photosArray, id) as
        | TProjectPhotos
        | TServicePhotos;

      return foundElement ? foundElement.photos : undefined;
    },
    getPhotoSelector: (
      state: TPhotosState,
      id: number,
      photoId: number,
      type: TPhotosType
    ) => {
      return photosSlice
        .getSelectors()
        .getPhotosSelector(state, id, type)
        ?.find(({ id }) => {
          return photoId === id;
        });
    },
    getPhotoIndexSelector: (
      state: TPhotosState,
      id: number,
      photoId: number,
      type: TPhotosType
    ) => {
      return photosSlice
        .getSelectors()
        .getPhotosSelector(state, id, type)
        ?.findIndex(({ id }) => {
          return photoId === id;
        });
    },
    // getPhotoSourceSelector: (
    //   state: TPhotosState,
    //   id: number,
    //   photoId: number,
    //   type: TPhotosType
    // ) => {
    //   return photosSlice
    //     .getSelectors()
    //     .getPhotoSelector(state, id, photoId, type)?.source;
    // },
  },
});

export const reducer = photosSlice.reducer;
export const {
  getPhotosSelector,
  getPhotoSelector,
  getPhotoIndexSelector,
  // getPhotoSourceSelector,
} = photosSlice.selectors;
