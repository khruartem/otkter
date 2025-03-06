import { TCardType } from "../../utils/types";

export type TSliderProps = {
  type: Extract<TCardType, "projects" | "services">;
};
