import { SyntheticEvent } from "react";

export const useGetIconOnMouseEnter = () => {
  const handlerIconMouseEnter = (
    e: SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => {
    if (!e.currentTarget.classList.contains(styleActive))
      e.currentTarget.classList.add(styleHover);
  };

  return handlerIconMouseEnter;
};
