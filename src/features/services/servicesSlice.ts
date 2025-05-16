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
    getAllServicesSelector: (state: TServicesState) => state.services,
    getMainServicesSelector: (state: TServicesState) => {
      return state.services.filter(service => service.isMain === true)
    },
    getServicesSelector: (state: TServicesState, type: "all" | "main") => {
      switch (type) {
        case "all":
          return servicesSlice.getSelectors().getAllServicesSelector(state);
        case "main":
          return servicesSlice.getSelectors().getMainServicesSelector(state);

      }
    },
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
