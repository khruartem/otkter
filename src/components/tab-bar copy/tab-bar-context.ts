import { createContext } from "react";
import { TTabBarCotextValue } from "./types";

const defaultValue = {
  tabs: [],
  currentTab: {
    id: 0,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "",
    shortText: "",
    image: "",
    icon: "",
    main: false,
    active: true,
  },
  currentIndex: 0,
  handleTabClick: () => {},
  renderTab: () => {},
  onSwitch: () => {},
  tabsGap: "none",
};

export const TabBarContext = createContext<TTabBarCotextValue>(
  defaultValue as TTabBarCotextValue
);
