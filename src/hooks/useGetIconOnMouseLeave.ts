import { SyntheticEvent } from "react";

export const useGetIconOnMouseLeave = () => {
  const handlerIconMouseLeave = (
    e: SyntheticEvent,
    styleHover: string
  ) => {
    if (e.currentTarget.classList.contains(styleHover))
      e.currentTarget.classList.remove(styleHover);
  };

  return handlerIconMouseLeave;
};
