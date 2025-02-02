import { createSlice } from "@reduxjs/toolkit";

import testPhoto1 from "../../assets/testPhoto1.png";
import testPhoto2 from "../../assets/testPhoto2.png";
import testPhoto3 from "../../assets/testPhoto3.png";
import testPhoto4 from "../../assets/testPhoto4.png";
import testPhoto5 from "../../assets/testPhoto5.png";

type TPhoto = {
  id: number;
  source: string;
};

type TProjectPhotos = {
  projectId: number;
  photos: TPhoto[];
};

type TProjectPhotosState = {
  projectPhotos: TProjectPhotos[];
};

const initialState: TProjectPhotosState = {
  projectPhotos: [
    {
      projectId: 1,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
    {
      projectId: 2,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
    {
      projectId: 3,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
    {
      projectId: 4,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
    {
      projectId: 5,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
    {
      projectId: 6,
      photos: [
        {
          id: 1,
          source: testPhoto1,
        },
        {
          id: 2,
          source: testPhoto2,
        },
        {
          id: 3,
          source: testPhoto3,
        },
        {
          id: 4,
          source: testPhoto4,
        },
        {
          id: 5,
          source: testPhoto5,
        },
      ],
    },
  ],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  selectors: {
    getPhotosSelector: (state: TProjectPhotosState, id: number) => {
      return state.projectPhotos.find(({ projectId }) => {
        return projectId === id;
      })?.photos;
    },
    getPhotoSelector: (
      state: TProjectPhotosState,
      id: number,
      photoId: number
    ) => {
      return photosSlice
        .getSelectors()
        .getPhotosSelector(state, id)
        ?.find(({ id }) => {
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
        ?.findIndex(({ id }, index) => {
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
  getPhotosSelector,
  getPhotoSelector,
  getPhotoIndexSelector,
  getPhotoSourceSelector,
} = photosSlice.selectors;
