import { createSlice } from "@reduxjs/toolkit";

import {
  Colors,
  TCategory,
  TCategoryType,
} from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectCategories } from "../../utils/constants";

export type TProjectCategories = {
  projectId: number;
  categories: TCategories;
};

export type TCategories = {
  attention: boolean;
  categoryList: TCategory[];
};

export type TCategoryColors = {
  categoryIconColor?: Colors;
  categotyBackgroundColor: Colors;
  categotyTextColor: Colors;
};

type TCategoriesState = {
  projectCategories: TProjectCategories[];
  colorsMain: TCategoryColors;
  colorsExtra: TCategoryColors;
  colorsAttention: TCategoryColors;
};

const initialState: TCategoriesState = {
  projectCategories: projectCategories,
  colorsMain: {
    categoryIconColor: Colors.Nephritis100,
    categotyBackgroundColor: Colors.Navy,
    categotyTextColor: Colors.Light100,
  },
  colorsExtra: {
    categotyBackgroundColor: Colors.Light100,
    categotyTextColor: Colors.Dark100,
  },
  colorsAttention: {
    categoryIconColor: Colors.Navy,
    categotyBackgroundColor: Colors.Orange100,
    categotyTextColor: Colors.Navy,
  },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  selectors: {
    getProjectCategoriesSelector: (state: TCategoriesState, id: number) => {
      return findById(state.projectCategories, id) as TProjectCategories;
    },
    getCategoriesSelector: (state: TCategoriesState, id: number) => {
      return (findById(state.projectCategories, id) as TProjectCategories)
        .categories;
    },
    getCategoryColorsSelector: (
      state: TCategoriesState,
      type: TCategoryType
    ) => {
      switch (type) {
        case "main":
          return state.colorsMain;
        case "attention":
          return state.colorsAttention;
        case "extra":
          return state.colorsExtra;
        default:
          return undefined;
      }
    },
    getCategotyAttentionSelector: (state: TCategoriesState, id: number) => {
      return (findById(state.projectCategories, id) as TProjectCategories)
        .categories.attention;
    },
  },
});

export const reducer = categoriesSlice.reducer;
export const {
  getProjectCategoriesSelector,
  getCategoriesSelector,
  getCategoryColorsSelector,
  getCategotyAttentionSelector,
} = categoriesSlice.selectors;
