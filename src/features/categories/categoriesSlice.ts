import { createSlice } from "@reduxjs/toolkit";

import { TCategory } from "../../utils/types";
import { findById } from "../../utils/findById";
import { projectCategories } from "../../utils/constants";

export type TProjectCategories = {
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
  projectCategories: projectCategories
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  selectors: {
    getProjectCategoriesSelector: (state: TCategoriesState, id: number) => {
      return findById(state.projectCategories, id) as TCategories;
    },
  },
});

export const reducer = categoriesSlice.reducer;
export const { getProjectCategoriesSelector } = categoriesSlice.selectors;
