import { createContext } from "react";
import { TTabBarCotextValue } from "./types";

const initialValue = {
  tabs: [],
  styleType: "rowed",
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
  onTabClick: () => undefined,
  renderTab: () => undefined,
  onSwitch: () => undefined,
  tabsGap: "none",
};

export const TabBarContext = createContext<TTabBarCotextValue>(
  initialValue as unknown as TTabBarCotextValue
);
