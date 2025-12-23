import { FC } from "react";

import { ContentSliderContext } from "./content-slider-context";

import { TContentSliderPoviderProps } from "./types";

export const ContentSliderPovider: FC<TContentSliderPoviderProps> = ({
  children,
  value,
}) => {
  return (
    <ContentSliderContext.Provider value={value}>
      {children}
    </ContentSliderContext.Provider>
  );
};
