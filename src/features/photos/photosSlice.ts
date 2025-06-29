import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { projectPhotos, servicePhotos } from "../../utils/constants";
import { TSectionType } from "../../utils/types";
import { teamPhotos } from "../../utils/constants/team";

type TPhotosType = TSectionType;

export type TPhoto = {
  id: number;
  source: string;
  icon: string;
};

export type TPhotos = {
  id: number;
  photos: TPhoto[];
};

type TPhotosState = {
  projectPhotos: TPhotos[];
  servicePhotos: TPhotos[];
  teamPhotos: TPhotos[];
};

const initialState: TPhotosState = {
  projectPhotos: projectPhotos,
  servicePhotos: servicePhotos,
  teamPhotos: teamPhotos,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  selectors: {
    getPhotosSelector: (state: TPhotosState, id: number, type: TPhotosType) => {
      let photosArray: TPhotos[] = [];

      switch (type) {
        case "services":
          photosArray = state.servicePhotos;
          break;
        case "projects":
          photosArray = state.projectPhotos;
          break;
        case "team":
          photosArray = state.teamPhotos;
          break;
      }

      const foundElement = findById(photosArray, id) as TPhotos;

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
