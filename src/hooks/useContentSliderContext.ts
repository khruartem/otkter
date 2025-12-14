import { useContext } from "react";
import { ContentSliderContext } from "../components/content-slider/content-slider-context";

export const useContentSliderContext = () => {
  return useContext(ContentSliderContext);
};
