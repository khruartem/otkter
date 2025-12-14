import { FC, ReactNode } from "react";
import { TContentSliderContext } from "./types";
import { ContentSliderContext } from "./content-slider-context";

type TContentSliderPoviderProps = {
  children: ReactNode;
  value: TContentSliderContext;
};

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
