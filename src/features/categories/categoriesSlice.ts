import { createSlice } from "@reduxjs/toolkit";

import { Colors, TCategory } from "../../utils/types";
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
  categoryIconColor: Colors;
  categotyBackgroundColor: Colors;
  categotyTextColor: Colors;
  categoryIconColorAttention: Colors;
  categotyBackgroundColorAttention: Colors;
  categotyTextColorAttention: Colors;
};

type TCategoriesState = {
  projectCategories: TProjectCategories[];
  colors: TCategoryColors;
};

const initialState: TCategoriesState = {
  projectCategories: projectCategories,
  colors: {
    categoryIconColor: Colors.Nephritis100,
    categotyBackgroundColor: Colors.Navy,
    categotyTextColor: Colors.Light100,
    categoryIconColorAttention: Colors.Navy,
    categotyBackgroundColorAttention: Colors.Orange100,
    categotyTextColorAttention: Colors.Navy,
  },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  selectors: {
    getProjectCategoriesSelector: (state: TCategoriesState, id: number) => {
      return findById(state.projectCategories, id) as TCategories;
    },
    getCategoryColorsSelector: (state: TCategoriesState) => state.colors,
    getCategotyAttentionSelector: (state: TCategoriesState, id: number) => {
      return (findById(state.projectCategories, id) as TCategories).attention;
    },
  },
});

export const reducer = categoriesSlice.reducer;
export const {
  getProjectCategoriesSelector,
  getCategoryColorsSelector,
  getCategotyAttentionSelector,
} = categoriesSlice.selectors;
