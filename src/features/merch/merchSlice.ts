import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { merchItems } from "../../utils/constants/merch";
import { TMerch } from "../../utils/types/merch";

type TMerchState = {
  merchItems: TMerch[];
};

const initialState: TMerchState = {
  merchItems,
};

const merchSlice = createSlice({
  name: "merch",
  initialState,
  reducers: {},
  selectors: {
    getMerchItemsSelector: (state: TMerchState) => state.merchItems,
    getMerchItemSelector: (state: TMerchState, id: number) => {
      return findById(state.merchItems, id);
    },
  },
});

export const reducer = merchSlice.reducer;
export const { getMerchItemsSelector, getMerchItemSelector } =
  merchSlice.selectors;
