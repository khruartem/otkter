import { createSlice } from "@reduxjs/toolkit";

import { TService } from "../../utils/types";
import { findById } from "../../utils/findById";
import { services } from "../../utils/constants";

type TServicesState = {
  services: TService[];
};

const initialState: TServicesState = {
  services: services,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  selectors: {
    getServicesSelector: (state: TServicesState) => state.services,
    getServiceTitleSelector: (state: TServicesState, id: number) => {
      return (findById(state.services, id) as TService)?.title;
    },
    getServiceSelector: (state: TServicesState, id: number) => {
      return findById(state.services, id) as TService;
    },
  },
});

export const reducer = servicesSlice.reducer;
export const {
  getServicesSelector,
  getServiceTitleSelector,
  getServiceSelector,
} = servicesSlice.selectors;
