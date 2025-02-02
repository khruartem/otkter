import { createSlice } from "@reduxjs/toolkit";
import { TCategory } from "../../utils/types";

import playSVG from "../../../public/projects_play.svg";
import masterClassSVG from "../../../public/projects_master-class.svg";
import contestSVG from "../../../public/project_contest.svg";
import shortFilmSVG from "../../../public/projets_short-film.svg";

type TProjectCategories = {
  projectId: number;
  categories: TCategories;
};

type TCategories = {
  attention: boolean;
  categoryList: TCategory[];
};

type TCategoriesState = {
  projectCategories: TProjectCategories[];
};

const initialState: TCategoriesState = {
  projectCategories: [
    {
      projectId: 1,
      categories: {
        attention: false,
        categoryList: [
          {
            name: "Спектакль",
            icon: playSVG,
            id: "play",
          },
        ],
      },
    },
    {
      projectId: 2,
      categories: {
        attention: false,
        categoryList: [
          {
            name: "Конкурс",
            icon: contestSVG,
            id: "contest",
          },
        ],
      },
    },
    {
      projectId: 3,
      categories: {
        attention: false,
        categoryList: [
          {
            name: "Конкурс",
            icon: contestSVG,
            id: "contest",
          },
        ],
      },
    },
    {
      projectId: 4,
      categories: {
        attention: false,
        categoryList: [
          {
            name: "Мастер класс",
            icon: masterClassSVG,
            id: "master-class",
          },
        ],
      },
    },
    {
      projectId: 5,
      categories: {
        attention: true,
        categoryList: [
          {
            name: "Короткий метр",
            icon: shortFilmSVG,
            id: "short-film",
          },
        ],
      },
    },
    {
      projectId: 6,
      categories: {
        attention: false,
        categoryList: [
          {
            name: "Спектакль",
            icon: playSVG,
            id: "play",
          },
        ],
      },
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  selectors: {
    getProjectCategoriesSelector: (state: TCategoriesState, id: number) => {
      return state.projectCategories.find(({ projectId }) => {
        return projectId === id;
      })?.categories;
    },
  },
});

export const reducer = categoriesSlice.reducer;
export const { getProjectCategoriesSelector } = categoriesSlice.selectors;
