import { createSlice } from "@reduxjs/toolkit";

import { findById } from "../../utils/findById";
import { services } from "../../utils/constants/services";
import { TService } from "../../utils/types/services";

type TServicesState = {
  services: TService[];
};

const initialState: TServicesState = {
  services,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  selectors: {
    getServicesSelector: (state: TServicesState) => state.services,
    getServiceSelector: (state: TServicesState, id: number) => {
      return findById(state.services, id);
    },
  },
});

export const reducer = servicesSlice.reducer;
export const { getServicesSelector, getServiceSelector } =
  servicesSlice.selectors;
